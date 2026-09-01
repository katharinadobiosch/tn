import Image from "next/image";
import { RevealText } from "@/components/RevealText";
import { sql } from "@/lib/db";
import type { Update } from "@/types/update";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktuelles",
  description:
    "Neuigkeiten aus dem Hofladen der Talbrennerei Neufra: saisonale Produkte, regionale Angebote, Verkostungen und Veranstaltungen.",
};

export default async function AktuellesPage() {
  const updates = (await sql`
    select *
    from updates
    where published = true
    order by created_at desc
  `) as Update[];

  return (
    <main
      className="bg-[#FAF9F6] text-[#24231F] talbrennerei-aktuelles"
      style={{ "--page-accent": "#6B8F5A" } as React.CSSProperties}
    >
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pb-20 md:pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Aktuelles
        </p>

        <RevealText>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight md:text-7xl">
            Aktuelles aus der Talbrennerei Neufra
          </h1>
        </RevealText>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149] md:mt-8">
          Hier finden Sie Neuigkeiten aus dem Hofladen, zum saisonalen und
          regionalen Sortiment, zur Talbrennerei sowie zu Verkostungen und
          Veranstaltungen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 talbrennerei-aktuelles-list md:pb-24">
        {!updates.length && (
          <div className="border-y border-[#24231F]/15 py-8 md:py-12">
            <p className="text-xs uppercase tracking-[0.28em] text-[#B87935]">
              Neuigkeiten
            </p>

            <h2 className="mt-4 font-heading text-3xl text-[#1F2F20]">
              Derzeit gibt es keine aktuellen Beiträge.
            </h2>

            <p className="mt-4 text-[#555149]">
              Schauen Sie gerne zu einem späteren Zeitpunkt wieder vorbei.
            </p>
          </div>
        )}

        <div className="grid gap-8 md:gap-10">
          {updates.map((update, index) => (
            <article
              key={update.id}
              className="grid gap-6 border-t border-[#24231F]/15 pt-8 md:grid-cols-[0.55fr_1fr] md:gap-8 md:pt-10"
            >
              <div
                className={`relative min-h-[220px] overflow-hidden bg-[#D8D2C6] md:min-h-[260px] ${
                  index % 2 === 1
                    ? "shadow-[10px_10px_0_rgba(234,214,189,0.28)] md:shadow-[14px_14px_0_rgba(234,214,189,0.28)]"
                    : ""
                }`}
              >
                {update.image_url ? (
                  <Image
                    src={update.image_url}
                    alt={update.title}
                    fill
                    className="object-cover grayscale-[8%]"
                  />
                ) : (
                  <div className="flex h-full min-h-[220px] items-center justify-center text-sm uppercase tracking-[0.2em] text-[#777064] md:min-h-[260px]">
                    Kein Bild
                  </div>
                )}
              </div>

              <div>
                <time
                  dateTime={update.created_at}
                  className="text-xs uppercase tracking-[0.22em] text-[#B87935]"
                >
                  {new Date(update.created_at).toLocaleDateString("de-DE")}
                </time>

                <h2 className="mt-3 font-heading text-4xl md:mt-4">
                  {update.title}
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#555149] md:mt-6">
                  {update.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
