"use server";

import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { weekdays, type OpeningHoursSchedule } from "@/lib/siteSettings";

export async function updateSiteSettings(formData: FormData) {
  await requireAdmin();

  const schedule = weekdays.reduce((acc, { key }) => {
    const closed = formData.get(`${key}_closed`) === "on";
    const from = formData.get(`${key}_from`) as string;
    const to = formData.get(`${key}_to`) as string;

    acc[key] = {
      closed,
      from: closed ? "" : from,
      to: closed ? "" : to,
    };

    return acc;
  }, {} as OpeningHoursSchedule);

  await sql`
    insert into site_settings (key, value, updated_at)
    values ('opening_hours_schedule', ${JSON.stringify(schedule)}, now())
    on conflict (key)
    do update set value = ${JSON.stringify(schedule)}, updated_at = now()
  `;

  redirect("/admin");
}
