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
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-16 md:min-h-[74vh] md:grid-cols-[1fr_0.95fr] md:gap-14 md:pb-24 md:pt-24 lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Über uns
          </p>

          <RevealText>
            <h1 className="font-heading text-6xl leading-[0.98] md:text-8xl">
              Von der Streuobstwiese zum regionalen Hofladen.
            </h1>
          </RevealText>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#555149] md:mt-9">
            Was mit eigenen Obstwiesen und einer Brennerei begann, hat sich
            Schritt für Schritt zu einem regionalen Hofladen entwickelt. Heute
            verbinden wir ausgewählte Partner und Lebensmittel aus der Region
            mit unseren eigenen Spezialitäten.
          </p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] shadow-[14px_14px_0_rgba(234,214,189,0.45)] md:min-h-[520px] md:shadow-[18px_18px_0_rgba(234,214,189,0.45)]">
          <Image
            src={siteImages.about.inside}
            alt="Außenansicht der Talbrennerei Neufra"
            fill
            className="object-cover object-[0%_center] saturate-[0.92] contrast-[1.03]"
            priority
          />
        </div>
      </section>

      {/* DIE ERSTEN JAHRE */}
      <section className="px-6 py-16 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935] md:mb-16">
            Die ersten Jahre
          </p>

          <article className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div>
              <p className="font-heading text-8xl leading-none text-[#526247] md:text-9xl">
                2008
              </p>

              <RevealText>
                <h2 className="mt-4 font-heading text-4xl leading-tight md:mt-5">
                  Der Anfang
                </h2>
              </RevealText>
            </div>

            <p className="max-w-3xl self-end text-lg leading-8 text-[#555149]">
              Im Jahr 2008 kauften Detlef Zamzow und seine Frau Annemarie ihre
              erste Obstwiese in Dettingen/Erms. Mit der wachsenden Begeisterung
              für den Obstbau kamen im Laufe der Zeit weitere Flächen hinzu.
            </p>
          </article>

          <article className="mt-16 grid gap-8 md:mt-28 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div>
              <RevealText direction="right">
                <h2 className="font-heading text-5xl leading-tight md:text-6xl">
                  Die Talbrennerei entsteht
                </h2>
              </RevealText>
            </div>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#555149]">
              <p>
                Über die Jahre bewirtschaftete das Unternehmen rund 15 Hektar
                Obstwiesen und Waldflächen. Mit den wachsenden Obsterträgen
                wurde auch die Frage der Verarbeitung immer wichtiger.
              </p>

              <p>
                Die Pflege der Obstwiesen und Plantagen war für die Familie weit
                mehr als reine Arbeit. Die Bäume wurden mit viel Erfahrung
                gepflegt und die Früchte zur Erntezeit schonend von Hand
                geerntet.
              </p>

              <p>
                Daraus entwickelten sich die eigene Brennerei und der
                Direktverkauf in Neufra. Obst von erster Qualität wurde als
                Tafelobst im Hofladen angeboten. Das übrige Obst wurde in der
                hauseigenen Brennerei zu eigenen Spezialitäten weiterverarbeitet
                oder fand im familieneigenen Damwild-Gehege Verwendung.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* WEITERENTWICKLUNG */}
      <section className="bg-[#526247] px-6 py-16 text-[#FAF9F6] talbrennerei-ueber-uns-history md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935] md:mb-16">
            Weiterentwicklung
          </p>

          <article className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div>
              <p className="font-heading text-8xl leading-none text-[#EAD6BD] md:text-9xl">
                2024
              </p>

              <h2 className="mt-4 font-heading text-4xl leading-tight md:mt-5">
                Ein neuer Weg
              </h2>
            </div>

            <div className="max-w-3xl space-y-6 self-end text-lg leading-8 text-[#FAF9F6]/80">
              <p>
                Im Jahr 2024 beendete die Talbrennerei den eigenen Obstbau.
                Gründe dafür waren der Personalmangel, der steigende
                Arbeitsaufwand und zunehmend komplexe EU-Anforderungen im
                Bereich Pflanzenschutz.
              </p>

              <p>
                Die Plantagen wurden an regionale Obstbaubetriebe verkauft. Mit
                einigen dieser Betriebe arbeiten wir weiterhin eng zusammen und
                beziehen teilweise weiterhin deren Obst.
              </p>
            </div>
          </article>

          <article className="mt-16 grid gap-8 md:mt-28 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <h2 className="font-heading text-5xl leading-tight md:text-6xl">
              Regionalität, Qualität und Vertrauen
            </h2>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#FAF9F6]/80">
              <p>
                Neben den langjährigen regionalen Partnern beziehen wir Obst von
                weiteren ausgewählten Erzeugern, darunter Betriebe rund um den
                Bodensee. Besuche vor Ort helfen uns dabei, Herkunft,
                Arbeitsweise und Qualität kennenzulernen.
              </p>

              <p>
                Entscheidend bleibt eine Zusammenarbeit, die auf
                nachvollziehbarer Herkunft, guter Qualität und Vertrauen beruht.
              </p>
            </div>
          </article>

          <article className="mt-16 grid gap-8 md:mt-28 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <h2 className="font-heading text-5xl leading-tight md:text-6xl">
              Unser Sortiment wächst
            </h2>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#FAF9F6]/80">
              <p>
                Mit der Zeit wurde das Angebot um Gemüse und weitere regionale
                Lebensmittel ergänzt. So entstand aus dem Direktverkauf ein
                breiter aufgestellter Hofladen.
              </p>

              <p>
                Regionalität verstehen wir saisonal: Was in Deutschland wächst,
                möchten wir möglichst auch aus deutschem Anbau beziehen. Ist ein
                Produkt zu einer bestimmten Jahreszeit oder aufgrund der
                klimatischen Bedingungen nicht aus heimischem Anbau verfügbar,
                führen wir es entsprechend nicht.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 2025 / NEUER HOFLADEN */}
      <section className="bg-[#EAD6BD]/35 px-6 py-16 talbrennerei-ueber-uns-development md:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative min-h-[360px] overflow-hidden bg-[#D8D2C6] md:min-h-[500px]">
            <Image
              src={siteImages.about.outside}
              alt="Innenraum des Hofladens in Neufra"
              fill
              className="object-cover object-[0%_center]"
            />
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#B87935]">
              Ein neuer Standort
            </p>

            <p className="font-heading text-8xl leading-none text-[#526247] md:text-9xl">
              2025
            </p>

            <RevealText direction="right">
              <h2 className="mt-4 font-heading text-5xl leading-tight md:mt-5 md:text-6xl">
                Der neue Hofladen
              </h2>
            </RevealText>

            <p className="mt-6 text-lg leading-8 text-[#555149] md:mt-8">
              Ende 2025 eröffnete der neue Hofladen im ehemaligen
              Volksbank-Gebäude im Herzen von Neufra. Die größere Verkaufsfläche
              schafft Platz für mehr Auswahl und bringt das Angebot näher zu
              unseren Kundinnen und Kunden. Gleichzeitig leistet der Hofladen
              einen Beitrag zur Versorgung vor Ort.
            </p>
          </div>
        </div>
      </section>

      {/* STANDORTE */}
      <section className="mx-auto max-w-7xl px-6 py-16 talbrennerei-ueber-uns-locations md:py-40">
        <div className="mb-10 max-w-3xl md:mb-16">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Unsere Standorte
          </p>

          <h2 className="font-heading text-5xl leading-tight md:text-6xl">
            Hofladen und Produktion
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#555149] md:mt-7">
            Einkauf und Verkauf finden in unserem Hofladen in der Rathausstraße
            statt.
          </p>
        </div>

        <div className="grid gap-10 border-t border-[#1F2F20]/20 pt-8 md:grid-cols-2 md:gap-20 md:pt-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Hofladen / Verkauf
            </p>

            <p className="mt-5 font-heading text-4xl leading-relaxed text-[#1F2F20] md:mt-6">
              Rathausstr. 15
              <br />
              72419 Neufra
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Produktion / Lager
            </p>

            <p className="mt-5 font-heading text-4xl leading-relaxed text-[#1F2F20] md:mt-6">
              Talstr. 25
              <br />
              72419 Neufra
            </p>
          </div>
        </div>
      </section>

      {/* ABSCHLUSS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-40">
        <blockquote className="max-w-6xl border-l-2 border-[var(--page-accent)] py-4 pl-6 font-heading text-4xl leading-[1.1] text-[#1F2F20] md:pl-12 md:text-6xl">
          Von der eigenen Streuobstwiese zur regionalen Vermarktung – unsere
          Geschichte verändert sich, aber unsere Leidenschaft für gute Produkte
          bleibt.
        </blockquote>
      </section>
    </main>
  );
}
