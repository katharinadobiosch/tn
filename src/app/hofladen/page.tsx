import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { RevealText } from "@/components/RevealText";
import { siteImages } from "@/data/images";
import { getOpenDaysOnly } from "@/lib/siteSettings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hofladen Neufra",
  description:
    "Entdecken Sie den Hofladen der Talbrennerei Neufra mit regionalem Obst und Gemüse, Lebensmitteln ausgewählter Erzeuger und eigenen Spezialitäten.",
};

export default async function HofladenPage() {
  const openingHours = await getOpenDaysOnly();

  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-24 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Hofladen in Neufra
          </p>

          <RevealText>
            <h1 className="max-w-4xl font-heading text-5xl leading-tight md:text-7xl">
              Hofladen im Herzen von Neufra.
            </h1>
          </RevealText>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
            Regionale Lebensmittel, ausgewählte Erzeuger und eigene
            Spezialitäten – persönlich ausgesucht und mit Blick auf Herkunft und
            Qualität.
          </p>
        </div>

        <div className="relative min-h-[480px] overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] shadow-[18px_18px_0_rgba(234,214,189,0.45)]">
          <Image
            src={siteImages.about.shop}
            alt="Hofladen der Talbrennerei Neufra"
            fill
            priority
            className="object-cover saturate-[0.92] contrast-[1.03]"
          />
        </div>
      </section>

      <section className="bg-[#526247] px-6 py-24 text-[#FAF9F6]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
                Unser Sortiment
              </p>

              <RevealText>
                <h2 className="font-heading text-4xl leading-tight md:text-5xl">
                  Regionale Lebensmittel und saisonale Produkte
                </h2>
              </RevealText>
            </div>

            <div className="divide-y divide-[#EAD6BD]/25 border-y border-[#EAD6BD]/25">
              <article className="grid gap-4 py-8 sm:grid-cols-[12rem_1fr]">
                <h3 className="font-heading text-2xl text-[#FAF9F6]">
                  Regional &amp; saisonal
                </h3>
                <p className="leading-7 text-[#FAF9F6]/80">
                  Je nach Saison finden Sie bei uns Obst und Gemüse von
                  regionalen Erzeugern. Das Angebot orientiert sich daran, was
                  in der Umgebung gerade wächst und verfügbar ist.
                </p>
              </article>

              <article className="grid gap-4 py-8 sm:grid-cols-[12rem_1fr]">
                <h3 className="font-heading text-2xl text-[#FAF9F6]">
                  Von Betrieben, die wir kennen
                </h3>
                <p className="leading-7 text-[#FAF9F6]/80">
                  Brot, Eier, Käse, Wurst, Gewürze und weitere Lebensmittel
                  beziehen wir von ausgewählten Betrieben aus Neufra und der
                  umliegenden Region. Entscheidend sind für uns Qualität und
                  eine Herkunft, die nachvollziehbar bleibt.
                </p>
              </article>

              <article className="py-8">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#EAD6BD]">
                  Aus eigener Herstellung
                </p>
                <h2 className="font-heading text-3xl text-[#FAF9F6]">
                  Spezialitäten aus eigener Herstellung
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-[#FAF9F6]/80">
                  Als Talbrennerei stellen wir weiterhin eigene Liköre,
                  Spirituosen, Fruchtaufstriche, Honig und verschiedene Säfte
                  her. Sie ergänzen das regionale Sortiment im Hofladen um
                  unsere eigenen Spezialitäten.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAD6BD]/35 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#B87935]">
              Persönlich einkaufen
            </p>
            <RevealText direction="right">
              <h2 className="font-heading text-4xl leading-tight md:text-5xl">
                Ein kleiner Wochenmarkt unter einem Dach.
              </h2>
            </RevealText>
          </div>

          <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#555149]">
            <p>
              Der Hofladen verbindet ein sorgfältig ausgewähltes regionales
              Angebot an einem Ort. So entsteht ein Einkaufserlebnis wie auf
              einem kleinen Wochenmarkt: persönlich, überschaubar und nah an den
              Menschen, die die Lebensmittel erzeugen.
            </p>
            <p>
              Im Mittelpunkt stehen hochwertige Produkte direkt von regionalen
              Betrieben und eine Herkunft, die für unsere Kundinnen und Kunden
              verständlich bleibt.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Vorbeikommen
          </p>
          <RevealText>
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Öffnungszeiten und Adresse
            </h2>
          </RevealText>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="border-t-2 border-[#B87935] bg-[#EAD6BD]/25 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Öffnungszeiten
            </p>
            <p className="mt-6 whitespace-pre-line font-heading text-3xl leading-relaxed text-[#1F2F20]">
              {openingHours}
            </p>
          </article>

          <article className="border-t-2 border-[#B87935] bg-[#EAD6BD]/25 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Hofladen
            </p>
            <p className="mt-6 font-heading text-3xl leading-relaxed text-[#1F2F20]">
              Rathausstr. 15
              <br />
              72419 Neufra
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-[#1F2F20]/15 pt-12 md:flex-row md:items-center">
          <p className="max-w-3xl font-heading text-3xl leading-snug text-[#1F2F20] md:text-4xl">
            Kommen Sie vorbei, lernen Sie unser Sortiment kennen und überzeugen
            Sie sich selbst.
          </p>
          <ButtonLink href="/kontakt" variant="secondary">
            Kontakt &amp; Anfahrt
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
