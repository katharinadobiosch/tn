import { siteInfo } from "@/data/site";
import { RevealText } from "@/components/RevealText";
import { getOpeningHours } from "@/lib/siteSettings";

export default async function KontaktPage() {
  const openingHours = await getOpeningHours();

  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Kontakt
        </p>

        <RevealText>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight md:text-7xl">
            Besuchen Sie uns im Hofladen.
          </h1>
        </RevealText>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          Für Fragen zu Produkten, Verfügbarkeit, Verkostungen oder zur
          Vermietung des Brennerstübles erreichen Sie uns telefonisch oder per
          E-Mail.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-4">
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Telefon
          </p>
          <h2 className="font-heading text-4xl">Anrufen</h2>
          <a
            href={`tel:${siteInfo.phone.replaceAll(" ", "")}`}
            className="mt-6 inline-block border-b border-transparent pb-1 text-lg transition-colors duration-200 hover:border-[#B87935] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
          >
            {siteInfo.phone}
          </a>

          <a
            href={`https://wa.me/${siteInfo.whatsapp.replace("+", "")}?text=${encodeURIComponent(
              "Hallo, ich habe eine Anfrage zur Talbrennerei Neufra.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#B87935] active:bg-[#8F5C29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
          >
            Auf WhatsApp schreiben
          </a>
        </article>
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            E-Mail
          </p>
          <h2 className="font-heading text-4xl">Schreiben</h2>
          <a
            href={`mailto:${siteInfo.email}`}
            className="mt-6 inline-block border-b border-transparent pb-1 text-lg transition-colors duration-200 hover:border-[#B87935] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
          >
            {siteInfo.email}
          </a>
        </article>
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Öffnungszeiten
          </p>
          <h2 className="font-heading text-4xl">Vor Ort</h2>
          <p className="mt-6 leading-7 text-[#555149]">{openingHours}</p>
          <p className="mt-2 leading-7 text-[#555149]">{siteInfo.address}</p>
        </article>
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Social Media
          </p>
          <h2 className="font-heading text-4xl">Folgen</h2>

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/talbrennerei_neufra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talbrennerei Neufra auf Instagram öffnen"
              className="flex h-11 w-11 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[#B87935] hover:bg-[#EAD6BD]/35 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
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
              className="flex h-11 w-11 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[#B87935] hover:bg-[#EAD6BD]/35 hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
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
        </article>
      </section>
    </main>
  );
}
