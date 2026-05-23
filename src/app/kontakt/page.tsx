import { siteInfo } from "@/data/site";
import { RevealText } from "@/components/RevealText";

export default function KontaktPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Kontakt
        </p>

        <RevealText>
          <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Besuchen Sie uns im Hofladen.
          </h1>
        </RevealText>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          Für Fragen zu Produkten, Verfügbarkeit, Verkostungen oder zur
          Vermietung des Brennerstübles erreichen Sie uns telefonisch oder per
          E-Mail.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Telefon
          </p>
          <h2 className="font-serif text-4xl">Anrufen</h2>
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
          <h2 className="font-serif text-4xl">Schreiben</h2>
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
          <h2 className="font-serif text-4xl">Vor Ort</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            {siteInfo.openingHours}
          </p>
          <p className="mt-2 leading-7 text-[#555149]">{siteInfo.address}</p>
        </article>
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Social Media
          </p>
          <h2 className="font-serif text-4xl">Folgen</h2>

          <div className="mt-6 space-y-3">
            <a
              href="https://www.instagram.com/talbrennerei_neufra/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit border-b border-transparent pb-1 text-lg transition-colors duration-200 hover:border-[#B87935] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/p/Talbrennerei-Neufra-100070884354091/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit border-b border-transparent pb-1 text-lg transition-colors duration-200 hover:border-[#B87935] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              Facebook
            </a>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-t border-[#24231F]/15 pt-12">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Anfrage
          </p>

          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Sie haben Fragen zu Produkten, Verkostungen oder Verfügbarkeit?
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${siteInfo.phone.replaceAll(" ", "")}`}
              className="inline-flex items-center justify-center bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#B87935] active:bg-[#8F5C29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              Jetzt anrufen
            </a>

            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center justify-center border border-[#B87935]/50 px-6 py-3 text-sm text-[#1F2F20] transition-colors duration-200 hover:border-[#B87935] hover:bg-[#EAD6BD]/45 active:border-[#8F5C29] active:bg-[#EAD6BD]/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
