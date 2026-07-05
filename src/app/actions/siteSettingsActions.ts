"use server";

import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { getOpeningHours } from "@/lib/siteSettings";

export async function updateSiteSettings(formData: FormData) {
  await requireAdmin();

  const openingHours = await getOpeningHours();
  const shopStatus = formData.get("shopStatus") as string;

  if (!openingHours) {
    throw new Error("Öffnungszeiten dürfen nicht leer sein.");
  }

  await sql`
    insert into site_settings (key, value, updated_at)
    values ('opening_hours', ${openingHours}, now())
    on conflict (key)
    do update set value = ${openingHours}, updated_at = now()
  `;

  await sql`
    insert into site_settings (key, value, updated_at)
    values ('shop_status', ${shopStatus}, now())
    on conflict (key)
    do update set value = ${shopStatus}, updated_at = now()
  `;

  redirect("/admin");
}
