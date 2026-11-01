import { siteInfo } from "@/data/site";
import { RevealText } from "@/components/RevealText";
import { getOpenDaysOnly } from "@/lib/siteSettings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt, Öffnungszeiten und Standorte der Talbrennerei Neufra und des Hofladens in der Rathausstraße.",
};

export default async function KontaktPage() {
  const openingHours = await getOpenDaysOnly();

  return (
    <main className="bg-[#FAF9F6] text-[#24231F] talbrennerei-kontakt">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pb-24 md:pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Kontakt
        </p>

        <RevealText>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight md:text-7xl">
            Kontakt zur Talbrennerei Neufra
          </h1>
        </RevealText>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149] md:mt-8">
          Ob Fragen zu Produkten und Verfügbarkeit, zum Hofladen, zu
          Verkostungen und dem Brennerstüble oder ein anderes Anliegen – wir
          helfen Ihnen gerne weiter.
        </p>
      </section>

      <section className="bg-[#526247] px-6 py-12 text-[#FAF9F6] talbrennerei-kontakt-location md:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
              Vor Ort
            </p>

            <RevealText>
              <h2 className="font-heading text-4xl leading-tight md:text-5xl">
                Besuchen Sie unseren Hofladen
              </h2>
            </RevealText>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#FAF9F6]/80 md:mt-6">
              Im Hofladen in der Rathausstraße finden Sie unser regionales
              Sortiment und die Spezialitäten der Talbrennerei.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
            <article className="border-t border-[#EAD6BD]/35 pt-6 md:pt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#EAD6BD]">
                Hofladen
              </p>

              <p className="mt-4 font-heading text-3xl leading-relaxed md:mt-5">
                Rathausstr. 15
                <br />
                72419 Neufra
              </p>
            </article>

            <article className="border-t border-[#EAD6BD]/35 pt-6 md:pt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#EAD6BD]">
                Öffnungszeiten
              </p>

              <p className="mt-4 whitespace-pre-line font-heading text-3xl leading-relaxed md:mt-5">
                {openingHours}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 talbrennerei-kontakt-options md:py-32">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Kontaktmöglichkeiten
          </p>

          <RevealText direction="right">
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              So erreichen Sie uns
            </h2>
          </RevealText>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="border-t border-[#24231F]/15 pt-6 md:pt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Telefon
            </p>

            <a
              href={`tel:${siteInfo.phone.replaceAll(" ", "")}`}
              className="mt-4 inline-block font-heading text-2xl transition-colors duration-200 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] md:mt-6"
            >
              {siteInfo.phone}
            </a>
          </article>

          <article className="border-t border-[#24231F]/15 pt-6 md:pt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              E-Mail
            </p>

            <a
              href={`mailto:${siteInfo.email}`}
              className="mt-4 inline-block break-all font-heading text-2xl transition-colors duration-200 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] md:mt-6"
            >
              {siteInfo.email}
            </a>
          </article>

          <article className="border-t border-[#24231F]/15 pt-6 md:pt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              WhatsApp
            </p>

            <a
              href={`https://wa.me/${siteInfo.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                "Hallo, ich habe eine Anfrage zur Talbrennerei Neufra.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talbrennerei Neufra über WhatsApp kontaktieren"
              className="mt-4 inline-flex h-11 w-11 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[#B87935] hover:bg-[#EAD6BD]/35 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] md:mt-6"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.892-9.884 2.641 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 7.002c-.003 5.45-4.437 9.877-9.889 9.877" />
              </svg>
            </a>
          </article>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[#24231F]/15 pt-6 sm:flex-row sm:items-center md:mt-16 md:pt-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#526247]">
              Social Media
            </p>

            <h3 className="mt-2 font-heading text-2xl">Talbrennerei folgen</h3>
          </div>

          <div className="flex gap-4 sm:ml-auto">
            <a
              href="https://www.instagram.com/talbrennerei_neufra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talbrennerei Neufra auf Instagram öffnen"
              className="flex h-11 w-11 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[var(--page-accent)] hover:bg-[#EAD6BD]/35 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/p/Talbrennerei-Neufra-100070884354091/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talbrennerei Neufra auf Facebook öffnen"
              className="flex h-11 w-11 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[var(--page-accent)] hover:bg-[#EAD6BD]/35 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M14.5 8.5V7.2c0-.6.4-1 1-1h1.3V3.4c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.5-4 4.2v1.1H7.8v3.1h2.6V21h3.3v-9.4h2.7l.4-3.1h-3.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 talbrennerei-kontakt-production md:pb-24">
        <div className="grid gap-8 border-y border-[#1F2F20]/15 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:py-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Betriebsstandort
            </p>

            <h2 className="font-heading text-4xl leading-tight">
              Produktion und Lager
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
            <p className="font-heading text-2xl leading-relaxed text-[#1F2F20]">
              Talstr. 25
              <br />
              72419 Neufra
            </p>

            <p className="leading-7 text-[#555149]">
              Hier befinden sich Produktion und Lager der Talbrennerei. Für
              Ihren Besuch und Einkauf begrüßen wir Sie in unserem Hofladen in
              der Rathausstr. 15.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
