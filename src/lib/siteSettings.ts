import { sql } from "@/lib/db";

export async function getOpeningHours() {
  const rows = (await sql`
    select value
    from site_settings
    where key = 'opening_hours'
    limit 1
  `) as { value: string }[];

  return rows[0]?.value ?? "Öffnungszeiten folgen.";
}

export async function getShopStatus() {
  const rows = (await sql`
    select value
    from site_settings
    where key = 'shop_status'
    limit 1
  `) as { value: "open" | "closed" }[];

  return rows[0]?.value ?? "closed";
}
