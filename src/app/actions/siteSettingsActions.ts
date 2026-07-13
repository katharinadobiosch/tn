"use server";

import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { weekdays, type OpeningHoursSchedule } from "@/lib/siteSettings";

export type SiteSettingsState = {
  success: boolean;
  message: string;
};

export async function updateSiteSettings(
  _previousState: SiteSettingsState,
  formData: FormData,
): Promise<SiteSettingsState> {
  await requireAdmin();

  try {
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
      do update set
        value = ${JSON.stringify(schedule)},
        updated_at = now()
    `;

    return {
      success: true,
      message: "Gespeichert",
    };
  } catch (error) {
    console.error("Öffnungszeiten konnten nicht gespeichert werden:", error);

    return {
      success: false,
      message: "Speichern fehlgeschlagen",
    };
  }
}
