import { sql } from "@/lib/db";

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type OpeningHoursSchedule = Record<
  Weekday,
  {
    closed: boolean;
    from: string;
    to: string;
  }
>;

export const weekdays: { key: Weekday; label: string }[] = [
  { key: "monday", label: "Montag" },
  { key: "tuesday", label: "Dienstag" },
  { key: "wednesday", label: "Mittwoch" },
  { key: "thursday", label: "Donnerstag" },
  { key: "friday", label: "Freitag" },
  { key: "saturday", label: "Samstag" },
  { key: "sunday", label: "Sonntag" },
];

const fallbackSchedule: OpeningHoursSchedule = {
  monday: { closed: true, from: "", to: "" },
  tuesday: { closed: true, from: "", to: "" },
  wednesday: { closed: true, from: "", to: "" },
  thursday: { closed: false, from: "15:00", to: "18:00" },
  friday: { closed: false, from: "15:00", to: "18:00" },
  saturday: { closed: true, from: "", to: "" },
  sunday: { closed: true, from: "", to: "" },
};

export async function getOpeningHoursSchedule() {
  const rows = (await sql`
    select value
    from site_settings
    where key = 'opening_hours_schedule'
    limit 1
  `) as { value: string }[];

  if (!rows[0]?.value) {
    return fallbackSchedule;
  }

  return JSON.parse(rows[0].value) as OpeningHoursSchedule;
}

export function formatOpeningHours(schedule: OpeningHoursSchedule) {
  return weekdays
    .map(({ key, label }) => {
      const day = schedule[key];

      if (day.closed) {
        return `${label}: geschlossen`;
      }

      return `${label}: ${day.from}–${day.to} Uhr`;
    })
    .join("\n");
}

function getBerlinWeekdayKey(date: Date): Weekday {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "Europe/Berlin",
  })
    .format(date)
    .toLowerCase();

  return weekday as Weekday;
}

function getBerlinTimeInMinutes(date: Date) {
  const parts = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Berlin",
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);

  return hour * 60 + minute;
}

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

export function isShopOpenNow(schedule: OpeningHoursSchedule) {
  const now = new Date();
  const todayKey = getBerlinWeekdayKey(now);
  const today = schedule[todayKey];

  if (!today || today.closed || !today.from || !today.to) {
    return false;
  }

  const currentMinutes = getBerlinTimeInMinutes(now);
  const fromMinutes = timeToMinutes(today.from);
  const toMinutes = timeToMinutes(today.to);

  return currentMinutes >= fromMinutes && currentMinutes <= toMinutes;
}

export async function getOpeningHours() {
  const schedule = await getOpeningHoursSchedule();

  return formatOpeningHours(schedule);
}

export async function getShopStatus() {
  const schedule = await getOpeningHoursSchedule();

  return isShopOpenNow(schedule) ? "open" : "closed";
}

export function formatOpenDaysOnly(schedule: OpeningHoursSchedule) {
  return weekdays
    .filter(({ key }) => !schedule[key].closed)
    .map(({ key, label }) => {
      const day = schedule[key];

      return `${label}: ${day.from}–${day.to} Uhr`;
    })
    .join("\n");
}

export async function getOpenDaysOnly() {
  const schedule = await getOpeningHoursSchedule();

  return formatOpenDaysOnly(schedule);
}
