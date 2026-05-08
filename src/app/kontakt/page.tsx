import { siteInfo } from "@/data/site";

export default function KontaktPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Kontakt
        </p>

        <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
          Besuchen Sie uns im Hofladen.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          Für Fragen zu Produkten, Verfügbarkeit, Verkostungen oder zur
          Vermietung des Brennerstübles erreichen Sie uns telefonisch oder per
          E-Mail.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Telefon
          </p>
          <h2 className="font-serif text-4xl">Anrufen</h2>
          <a
            href={`tel:${siteInfo.phone.replaceAll(" ", "")}`}
            className="mt-6 block text-lg underline underline-offset-4"
          >
            {siteInfo.phone}
          </a>

          <a
            href={`https://wa.me/${siteInfo.whatsapp.replace("+", "")}?text=${encodeURIComponent(
              "Hallo, ich habe eine Anfrage zur Talbrennerei Neufra.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-[#1F2F20] px-6 py-3 text-sm text-white"
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
            className="mt-6 block text-lg underline underline-offset-4"
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 bg-[#24231F] p-8 text-[#F7F4EE] md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#B8C0A6]">
              Anfrage
            </p>
            <h2 className="font-serif text-4xl">Nachricht senden</h2>
            <p className="mt-6 leading-7 text-white/70">
              Das Formular ist aktuell als Layout vorbereitet. Die technische
              Anbindung ergänzen wir später.
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
            />
            <input
              type="text"
              placeholder="Betreff"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
            />
            <textarea
              placeholder="Ihre Nachricht"
              rows={6}
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
            />
            <button
              type="button"
              className="border border-[#B8C0A6] px-6 py-3 text-sm text-[#B8C0A6]"
            >
              Nachricht abschicken
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
