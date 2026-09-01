import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { RevealText } from "@/components/RevealText";
import { siteImages } from "@/data/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verkostungen in Neufra",
  description:
    "Verkostungen, private Feiern und Veranstaltungen im Brennerstüble der Talbrennerei Neufra.",
};

export default function VerkostungPage() {
  return (
    <main
      className="bg-[#FAF9F6] text-[#24231F] talbrennerei-verkostung"
      style={{ "--page-accent": "#A9583E" } as React.CSSProperties}
    >
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 md:min-h-[70vh] md:grid-cols-[1fr_0.9fr] md:gap-14 md:pb-20 md:pt-24">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Verkostung
          </p>

          <RevealText>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              Verkostungen und Feiern im Brennerstüble.
            </h1>
          </RevealText>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149] md:mt-8">
            Unser Brennerstüble bietet Raum für Schnaps- und Likörverkostungen
            sowie private Feiern in schwäbisch gemütlicher Atmosphäre.
          </p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] shadow-[12px_12px_0_rgba(234,214,189,0.45)] md:min-h-[520px] md:shadow-[18px_18px_0_rgba(234,214,189,0.45)]">
          <Image
            src={siteImages.tasting.room}
            alt="Brennerstüble der Talbrennerei Neufra"
            fill
            className="object-cover saturate-[0.92] contrast-[1.03]"
            priority
          />
        </div>
      </section>

      <section className="bg-[#EAD6BD] px-6 py-12 talbrennerei-verkostung-tastings md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_0.9fr] md:gap-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#526247] before:h-px before:w-8 before:bg-[#B87935]">
              Gemeinsam genießen
            </p>

            <RevealText>
              <h2 className="font-heading text-4xl leading-tight md:text-5xl">
                Verkostungen in Neufra
              </h2>
            </RevealText>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555149] md:mt-6">
              Im Brennerstüble können Sie unsere Schnäpse und Liköre in ruhiger,
              schwäbisch gemütlicher Atmosphäre kennenlernen und gemeinsam Zeit
              verbringen.
            </p>

            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 md:mt-10">
              {[
                "Freunde und Kollegen",
                "Gruppen und Vereine",
                "Betriebs- und Seniorenausflüge",
                "Junggesellenabschiede",
              ].map((occasion) => (
                <li
                  key={occasion}
                  className="border-t border-[#1F2F20]/15 py-4 text-[#1F2F20]"
                >
                  {occasion}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[320px] overflow-hidden border border-[#B87935]/25 bg-[#D8D2C6] md:min-h-[440px]">
            <Image
              src={siteImages.tasting.detail}
              alt="Gedeckter Tisch im Brennerstüble"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 talbrennerei-verkostung-private-events md:grid-cols-2 md:gap-14 md:py-24">
        <article className="border-t border-[#24231F]/15 pt-8 md:pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Private Veranstaltungen
          </p>

          <h2 className="font-heading text-4xl leading-tight">
            Brennerstüble für private Feiern
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555149] md:mt-6">
            Das Brennerstüble bietet Platz für ca. 60 Personen und ausreichend
            Raum zum Feiern und Tanzen.
          </p>
        </article>

        <article className="border-t border-[#24231F]/15 pt-8 md:pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Gut zugänglich
          </p>

          <h2 className="font-heading text-4xl leading-tight">
            Ausstattung und Vermietung
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555149] md:mt-6">
            Parkmöglichkeiten befinden sich direkt vor dem Gebäude. Die Eingänge
            und Toiletten sind barrierefrei zugänglich.
          </p>

          <div className="mt-6 border-t-2 border-[var(--page-accent)] bg-[#EAD6BD]/25 p-6 md:mt-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#526247]">
              Mietpreis
            </p>

            <p className="mt-3 font-heading text-3xl text-[#1F2F20]">
              350,00 EUR
            </p>

            <p className="mt-2 text-sm text-[#555149]">
              inkl. MwSt. und Endreinigung
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-[#1F2F20]/15 pt-10 md:flex-row md:items-center md:gap-8 md:pt-12">
          <h2 className="max-w-3xl font-heading text-3xl leading-snug text-[#1F2F20] md:text-4xl">
            Interesse an einer Verkostung oder Feier?
          </h2>

          <ButtonLink href="/kontakt" variant="secondary">
            Anfrage stellen
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
