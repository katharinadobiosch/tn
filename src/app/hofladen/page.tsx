import Image from "next/image";
import { siteImages } from "@/data/images";
import { siteInfo } from "@/data/site";
import { getOpeningHours } from "@/lib/siteSettings";

export default async function HofladenPage() {
  const openingHours = await getOpeningHours();

  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto grid min-h-[70vh] max-w-7xl items-start gap-14 px-6 pb-20 pt-24 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Hofladen
          </p>

          <h1 className="max-w-4xl font-heading text-5xl leading-tight md:text-7xl">
            Regionale Spezialitäten direkt vor Ort.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
            Im Hofladen finden Sie Produkte aus eigener Herstellung: Brände,
            Liköre, Honig, Fruchtaufstriche, Apfelsaft, saisonales Obst,
            Wildspezialitäten und Geschenkkörbe.
          </p>
        </div>
        <div className="relative min-h-[480px] overflow-hidden bg-[#D8D2C6]">
          <Image
            src={siteImages.about.shop}
            alt="Hofladen der Talbrennerei Neufra"
            fill
            className="object-cover"
          />
        </div>{" "}
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-3">
        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Öffnungszeiten
          </p>
          <h2 className="font-heading text-4xl">Vorbeikommen</h2>
          <p className="mt-6 leading-7 text-[#555149]">{openingHours}</p>
        </article>

        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Adresse
          </p>
          <h2 className="font-heading text-4xl">In Neufra</h2>
          <p className="mt-6 leading-7 text-[#555149]">{siteInfo.address}</p>
        </article>

        <article className="border-t border-[#24231F]/15 pt-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Anfrage
          </p>
          <h2 className="font-heading text-4xl">Kontakt</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Fragen zur Verfügbarkeit saisonaler Produkte beantworten wir gerne
            telefonisch oder per E-Mail.
          </p>
        </article>
      </section>
    </main>
  );
}
