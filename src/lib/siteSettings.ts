import "server-only";

import { sql } from "@/lib/db";
import {
  isShopOpenAt,
  weekdays,
  type OpeningHoursSchedule,
} from "@/lib/siteSettings.shared";

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

export function isShopOpenNow(schedule: OpeningHoursSchedule) {
  return isShopOpenAt(schedule, new Date());
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
