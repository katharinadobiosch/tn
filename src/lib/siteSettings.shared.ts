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

const shopTimeZone = "Europe/Berlin";

function getShopWeekdayKey(date: Date): Weekday {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: shopTimeZone,
  })
    .format(date)
    .toLowerCase() as Weekday;
}

function getShopTimeInMinutes(date: Date) {
  const parts = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: shopTimeZone,
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);

  return hour * 60 + minute;
}

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
}

export function isShopOpenAt(schedule: OpeningHoursSchedule, date: Date) {
  const today = schedule[getShopWeekdayKey(date)];

  if (!today || today.closed || !today.from || !today.to) {
    return false;
  }

  const currentMinutes = getShopTimeInMinutes(date);
  const fromMinutes = timeToMinutes(today.from);
  const toMinutes = timeToMinutes(today.to);

  return currentMinutes >= fromMinutes && currentMinutes < toMinutes;
}
