import Image from "next/image";
import Link from "next/link";
import type { Update } from "@/types/update";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { logout } from "@/app/actions/authActions";
import { getOpeningHoursSchedule, weekdays } from "@/lib/siteSettings";
import { updateSiteSettings } from "@/app/actions/siteSettingsActions";

export default async function AdminPage() {
  await requireAdmin();
  const openingHoursSchedule = await getOpeningHoursSchedule();

  const updates = (await sql`
  select *
  from updates
  order by created_at desc
`) as Update[];

  return (
    <main className="bg-[#FAF9F6] px-6 py-24 text-[#24231F]">
      <section className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center justify-between gap-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Admin
            </p>
            <h1 className="font-heading text-5xl">Neuigkeiten verwalten</h1>
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin/new"
              className="bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#2F432F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] active:bg-[#162417]"
            >
              Neuer Beitrag
            </Link>

            <form action={logout}>
              <button
                type="submit"
                className="border border-[#1F2F20]/40 px-6 py-3 text-sm transition-colors duration-200 hover:border-[#1F2F20] hover:bg-[#1F2F20] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
              >
                Ausloggen
              </button>
            </form>
          </div>
        </div>

        <form
          action={updateSiteSettings}
          className="mb-12 border-t border-[#24231F]/15 pt-8"
        >
          <h2 className="font-heading text-3xl">Öffnungszeiten</h2>

          <div className="mt-6 grid gap-4">
            {weekdays.map(({ key, label }) => {
              const day = openingHoursSchedule[key];

              return (
                <div
                  key={key}
                  className="grid items-end gap-4 md:grid-cols-[160px_1fr_1fr_160px]"
                >
                  <p className="pb-3 text-sm">{label}</p>

                  <div>
                    <label
                      htmlFor={`${key}_from`}
                      className="mb-2 block text-sm"
                    >
                      Von
                    </label>
                    <input
                      id={`${key}_from`}
                      name={`${key}_from`}
                      type="time"
                      defaultValue={day.from}
                      className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
                    />
                  </div>

                  <div>
                    <label htmlFor={`${key}_to`} className="mb-2 block text-sm">
                      Bis
                    </label>
                    <input
                      id={`${key}_to`}
                      name={`${key}_to`}
                      type="time"
                      defaultValue={day.to}
                      className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
                    />
                  </div>

                  <label className="flex gap-3 pb-3 text-sm">
                    <input
                      name={`${key}_closed`}
                      type="checkbox"
                      defaultChecked={day.closed}
                    />
                    Geschlossen
                  </label>
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="mt-8 bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#2F432F]"
          >
            Öffnungszeiten speichern
          </button>
        </form>

        {!updates?.length && (
          <p className="border-t border-[#24231F]/15 pt-8 text-[#555149]">
            Noch keine Beiträge vorhanden.
          </p>
        )}

        <div className="divide-y divide-[#24231F]/15">
          {updates?.map((update: Update) => (
            <article
              key={update.id}
              className="grid items-start gap-6 py-8 md:grid-cols-[180px_1fr_auto]"
            >
              <div className="relative h-32 w-full overflow-hidden bg-[#D8D2C6]">
                {update.image_url ? (
                  <Image
                    src={update.image_url}
                    alt={update.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[#777064]">
                    Kein Bild
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#526247]">
                  {update.published ? "Veröffentlicht" : "Entwurf"}
                </p>

                <h2 className="mt-3 font-heading text-3xl">{update.title}</h2>

                <p className="mt-3 max-w-2xl text-[#555149]">
                  {update.content}
                </p>
              </div>

              <div className="flex shrink-0 gap-4 text-sm">
                <Link
                  href={`/admin/${update.id}`}
                  className="border-b border-[#24231F] pb-1 transition-colors duration-200 hover:border-[#526247] hover:text-[#526247] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
                >
                  Bearbeiten
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
