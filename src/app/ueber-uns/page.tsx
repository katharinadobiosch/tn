import Image from "next/image";
import { RevealText } from "@/components/RevealText";
import { siteImages } from "@/data/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Geschichte der Talbrennerei Neufra: von der eigenen Streuobstwiese zur regionalen Vermarktung und zum Hofladen im Herzen von Neufra.",
};

export default function UeberUnsPage() {
  return (
    <main
      className="bg-[#FAF9F6] text-[#24231F] talbrennerei-ueber-uns"
      style={{ "--page-accent": "#526247" } as React.CSSProperties}
    >
      <section className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-24 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Über uns
          </p>

          <RevealText>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              Von der Streuobstwiese zum regionalen Hofladen.
            </h1>
          </RevealText>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
            Was mit eigenen Obstwiesen und einer Brennerei begann, hat sich
            Schritt für Schritt zu einem regionalen Hofladen entwickelt. Heute
            verbinden wir ausgewählte Partner und Lebensmittel aus der Region
            mit unseren eigenen Spezialitäten.
          </p>
        </div>

        <div className="relative min-h-[480px] overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] shadow-[18px_18px_0_rgba(234,214,189,0.45)]">
          <Image
            src={siteImages.about.inside}
            alt="Außenansicht der Talbrennerei Neufra"
            fill
            className="object-cover object-[0%_center] saturate-[0.92] contrast-[1.03]"
            priority
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-[0.65fr_1.35fr]">
          <p className="flex h-fit items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Die ersten Jahre
          </p>

          <div className="divide-y divide-[#1F2F20]/15 border-y border-[#1F2F20]/15">
            <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
              <RevealText>
                <h2 className="font-heading text-4xl leading-tight">
                  2008 – Der Anfang
                </h2>
              </RevealText>
              <p className="text-lg leading-8 text-[#555149]">
                Im Jahr 2008 kauften Detlef Zamzow und seine Frau Annemarie ihre
                erste Obstwiese in Dettingen/Erms. Mit der wachsenden
                Begeisterung für den Obstbau kamen im Laufe der Zeit weitere
                Flächen hinzu.
              </p>
            </article>

            <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
              <RevealText direction="right">
                <h2 className="font-heading text-4xl leading-tight">
                  Die Talbrennerei entsteht
                </h2>
              </RevealText>
              <div className="space-y-5 text-lg leading-8 text-[#555149]">
                <p>
                  Über die Jahre bewirtschaftete das Unternehmen rund 15 Hektar
                  Obstwiesen und Waldflächen. Mit den wachsenden Obsterträgen
                  wurde auch die Frage der Verarbeitung immer wichtiger.
                </p>
                <p>
                  Die Pflege der Obstwiesen und Plantagen war für die Familie
                  weit mehr als reine Arbeit. Die Bäume wurden mit viel
                  Erfahrung gepflegt und die Früchte zur Erntezeit schonend von
                  Hand geerntet.
                </p>
                <p>
                  Daraus entwickelten sich die eigene Brennerei und der
                  Direktverkauf in Neufra. Obst, das auf den Flächen wuchs,
                  konnte so verarbeitet und als eigene Spezialität angeboten
                  werden.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-[#526247] px-6 py-24 text-[#FAF9F6] talbrennerei-ueber-uns-history">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-[0.65fr_1.35fr]">
            <p className="flex h-fit items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
              Weiterentwicklung
            </p>

            <div className="divide-y divide-[#EAD6BD]/25 border-y border-[#EAD6BD]/25">
              <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
                <h2 className="font-heading text-4xl leading-tight">
                  2024 – Ein neuer Weg
                </h2>
                <div className="space-y-5 text-lg leading-8 text-[#FAF9F6]/80">
                  <p>
                    Im Jahr 2024 beendete die Talbrennerei den eigenen Obstbau.
                    Gründe dafür waren der Personalmangel, der steigende
                    Arbeitsaufwand und zunehmend komplexe EU-Anforderungen im
                    Bereich Pflanzenschutz.
                  </p>
                  <p>
                    Die Plantagen wurden an regionale Obstbaubetriebe verkauft.
                    Mit einigen dieser Betriebe arbeiten wir weiterhin eng
                    zusammen und beziehen teilweise weiterhin deren Obst.
                  </p>
                </div>
              </article>

              <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
                <h2 className="font-heading text-4xl leading-tight">
                  Regionalität, Qualität und Vertrauen
                </h2>
                <div className="space-y-5 text-lg leading-8 text-[#FAF9F6]/80">
                  <p>
                    Neben den langjährigen regionalen Partnern beziehen wir Obst
                    von weiteren ausgewählten Erzeugern, darunter Betriebe rund
                    um den Bodensee. Besuche vor Ort helfen uns dabei, Herkunft,
                    Arbeitsweise und Qualität kennenzulernen.
                  </p>
                  <p>
                    Entscheidend bleibt eine Zusammenarbeit, die auf
                    nachvollziehbarer Herkunft, guter Qualität und Vertrauen
                    beruht.
                  </p>
                </div>
              </article>

              <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
                <h2 className="font-heading text-4xl leading-tight">
                  Unser Sortiment wächst
                </h2>
                <div className="space-y-5 text-lg leading-8 text-[#FAF9F6]/80">
                  <p>
                    Mit der Zeit wurde das Angebot um Gemüse und weitere
                    regionale Lebensmittel ergänzt. So entstand aus dem
                    Direktverkauf ein breiter aufgestellter Hofladen.
                  </p>
                  <p>
                    Regionalität verstehen wir saisonal: Was in Deutschland
                    wächst, möchten wir möglichst auch aus deutschem Anbau
                    beziehen. Ist ein Produkt zu einer bestimmten Jahreszeit
                    oder aufgrund der klimatischen Bedingungen nicht aus
                    heimischem Anbau verfügbar, führen wir es entsprechend
                    nicht.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EAD6BD]/35 px-6 py-24 talbrennerei-ueber-uns-development">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[440px] overflow-hidden bg-[#D8D2C6]">
            <Image
              src={siteImages.about.outside}
              alt="Innenraum des Hofladens in Neufra"
              fill
              className="object-cover object-[0%_center]"
            />
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#B87935]">
              Ein neuer Standort
            </p>
            <RevealText direction="right">
              <h2 className="font-heading text-4xl leading-tight md:text-5xl">
                Ende 2025 – Der neue Hofladen
              </h2>
            </RevealText>
            <p className="mt-6 text-lg leading-8 text-[#555149]">
              Ende 2025 eröffnete der neue Hofladen im ehemaligen
              Volksbank-Gebäude im Herzen von Neufra. Die größere Verkaufsfläche
              schafft Platz für mehr Auswahl und bringt das Angebot näher zu
              unseren Kundinnen und Kunden. Gleichzeitig leistet der Hofladen
              einen Beitrag zur Versorgung vor Ort.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 talbrennerei-ueber-uns-locations">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Unsere Standorte
          </p>
          <h2 className="font-heading text-4xl leading-tight md:text-5xl">
            Hofladen und Produktion
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#555149]">
            Einkauf und Verkauf finden in unserem Hofladen in der Rathausstraße
            statt.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="border-t-2 border-[var(--page-accent)] bg-[#EAD6BD]/25 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Hofladen / Verkauf
            </p>
            <p className="mt-6 font-heading text-3xl leading-relaxed text-[#1F2F20]">
              Rathausstr. 15
              <br />
              72419 Neufra
            </p>
          </article>

          <article className="border-t-2 border-[var(--page-accent)] bg-[#FAF9F6] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Produktion / Lager
            </p>
            <p className="mt-6 font-heading text-3xl leading-relaxed text-[#1F2F20]">
              Talstr. 25
              <br />
              72419 Neufra
            </p>
          </article>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-y border-[#1F2F20]/15 py-16">
          <blockquote className="max-w-5xl border-l-2 border-[var(--page-accent)] pl-8 font-heading text-3xl leading-snug text-[#1F2F20] md:text-5xl">
            Von der eigenen Streuobstwiese zur regionalen Vermarktung – unsere
            Geschichte verändert sich, aber unsere Leidenschaft für gute
            Produkte bleibt.
          </blockquote>
        </div>
      </section>
    </main>
  );
}
