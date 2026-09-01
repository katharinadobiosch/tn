import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Talbrennerei Neufra.",
};

export default function ImpressumPage() {
  return (
    <main className="talbrennerei-impressum bg-[#FAF9F6] text-[#24231F]">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#526247]">
            Rechtliches
          </p>

          <h1 className="font-heading text-4xl leading-tight text-[#1F2F20] md:text-5xl">
            Impressum
          </h1>

          <div className="mt-12 space-y-12 border-t border-[#1F2F20]/15 pt-10">
            <section>
              <h2 className="font-heading text-2xl text-[#1F2F20]">
                Anbieterkennzeichnung
              </h2>

              <p className="mt-4 leading-7 text-[#1F2F20]/75">
                Annemarie Zamzow
                <br />
                Talbrennerei Neufra
                <br />
                Inh. Annemarie Zamzow
                <br />
                Land- und Forstwirtschaftlicher Betrieb
                <br />
                Lichtensteinstr. 21
                <br />
                72419 Neufra
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-[#1F2F20]">Kontakt</h2>

              <p className="mt-4 leading-7 text-[#1F2F20]/75">
                Telefon:{" "}
                <a
                  href="tel:+4915112130356"
                  className="underline decoration-[#B87935]/50 underline-offset-4 transition-colors hover:text-[#B87935]"
                >
                  +49 (0) 151 12130356
                </a>
                <br />
                Telefax: +49 (0) 7574 935299
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@talbrennerei-neufra.de"
                  className="underline decoration-[#B87935]/50 underline-offset-4 transition-colors hover:text-[#B87935]"
                >
                  info@talbrennerei-neufra.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-[#1F2F20]">
                Umsatzsteuer-ID
              </h2>

              <p className="mt-4 leading-7 text-[#1F2F20]/75">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                DE334987929
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-[#1F2F20]">
                Redaktionell verantwortlich
              </h2>

              <p className="mt-4 leading-7 text-[#1F2F20]/75">
                Talbrennerei Neufra
                <br />
                Inh. Annemarie Zamzow
                <br />
                Marvin Leuze
                <br />
                Lichtensteinstr. 21
                <br />
                72419 Neufra
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-[#1F2F20]">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>

              <p className="mt-4 leading-7 text-[#1F2F20]/75">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="border-t border-[#1F2F20]/10 pt-8">
              <p className="text-sm leading-6 text-[#1F2F20]/60">
                Quelle:{" "}
                <a
                  href="https://www.e-recht24.de/impressum-generator.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-[#B87935]"
                >
                  e-recht24.de/impressum-generator.html
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
