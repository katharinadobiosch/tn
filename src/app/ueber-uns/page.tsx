import Image from "next/image";
import { RevealText } from "@/components/RevealText";
import { siteImages } from "@/data/images";

export default function UeberUnsPage() {
  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-24 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Über uns
          </p>

          <RevealText>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Eine Brennerei mit Geschichte.
            </h1>
          </RevealText>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
            Was mit Streuobstwiesen begann, wird heute mit Erfahrung, Handarbeit
            und Respekt vor der Natur weitergeführt.
          </p>
        </div>

        <div className="relative min-h-[480px] overflow-hidden bg-[#D8D2C6]">
          <Image
            src={siteImages.about.outside}
            alt="Außenansicht der Talbrennerei Neufra"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
      s
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-[#D8D2C6]">
          <Image
            src={siteImages.about.shop}
            alt="Innenraum des Hofladens"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#555149]">
          <RevealText direction="right">
            <h2 className="font-serif text-4xl leading-tight text-[#24231F] md:text-5xl">
              Die Geschichte der Talbrennerei beginnt mit einer Streuobstwiese.
            </h2>
          </RevealText>

          <div className="space-y-6 text-lg leading-8 text-[#555149]">
            <p>
              Im Jahr 2008 kaufte Firmengründer Detlef Zamzow zusammen mit
              seiner Ehefrau Annemarie seine erste Streuobstwiese in
              Dettingen/Erms. Schnell war sein Interesse geweckt und nach und
              nach kamen weitere Grundstücke dazu.
            </p>

            <p>
              Heute bewirtschaftet das Unternehmen rund 15 Hektar eigene
              Obstwiesen und Wälder. Durch den reichlichen Ertrag an Obst musste
              schnell eine Lösung zur Weiterverarbeitung gefunden werden.
            </p>

            <p>
              Mit der Gründung einer Brennerei mit Direktvermarktung am Ende der
              Talstraße in Neufra/Hohenzollern entstand die Talbrennerei.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Kreislauf
          </p>
          <h2 className="font-serif text-4xl">Nichts wird verschwendet.</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Produkte erster Klasse werden als Tafelobst im Hofladen vermarktet.
            Das übrige Obst kommt in die hauseigene Brennerei zur
            Weiterverarbeitung oder wird im familieneigenen Damwild-Gehege
            verfüttert.
          </p>
        </article>

        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Handarbeit
          </p>
          <h2 className="font-serif text-4xl">Schonende Ernte von Hand.</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Die Obstbäume und Plantagen werden mit Begeisterung und Engagement
            gepflegt. Die Ernte erfolgt mit geschultem Auge und schonend von
            Hand.
          </p>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Im Haus
          </p>
          <h2 className="font-serif text-4xl">Außerdem bei uns</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="bg-white/40 p-8">
              <h3 className="font-serif text-3xl">Home made by Uli Keck</h3>
              <p className="mt-4 text-[#555149]">Deko für Ihr Zuhause.</p>
            </article>

            <article className="bg-white/40 p-8">
              <h3 className="font-serif text-3xl">Sabine Daikeler</h3>
              <p className="mt-4 text-[#555149]">Motorsägenschnitzereien.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
