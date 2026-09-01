import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { ProductTeaserGrid } from "@/components/ProductTeaserGrid";
import { UpdatesPreview } from "@/components/UpdatesPreview";
import { siteImages } from "@/data/images";
import { PartnerSection } from "@/components/PartnerSection";
import { getOpenDaysOnly } from "@/lib/siteSettings";
import { sql } from "@/lib/db";
import type { Update } from "@/types/update";
import type { Metadata } from "next";

const ownSpecialties = [
  {
    title: "Feine Brände & Liköre",
    text: "Charaktervolle Destillate und Liköre aus sorgfältig ausgewählten Früchten – handwerklich in Neufra hergestellt.",
    href: "/produkte",
  },
  {
    title: "Honig & Fruchtaufstriche",
    text: "Eigener Honig und fruchtige Aufstriche, die den Geschmack unserer Landschaft ins Glas bringen.",
    href: "/produkte",
  },
  {
    title: "Säfte & weitere Spezialitäten",
    text: "Naturtrüber Apfelsaft und saisonale Erzeugnisse aus dem, was Streuobstwiesen und Region uns schenken.",
    href: "/produkte",
  },
];

export const metadata: Metadata = {
  title: "Hofladen in Neufra",
  description:
    "Regionale Lebensmittel, saisonales Obst und Gemüse sowie Spezialitäten aus eigener Herstellung im Hofladen der Talbrennerei Neufra.",
};

export default async function Home() {
  const openingHours = await getOpenDaysOnly();

  const latestUpdates = (await sql`
    select *
    from updates
    where published = true
    order by created_at desc
    limit 3
  `) as Update[];

  return (
    <>
      <main className="bg-[#FAF9F6] text-[#24231F] talbrennerei-home">
        <HeroSection
          eyebrow="HOFLADEN · REGIONALE PRODUKTE · NEUFRA"
          title="Gutes aus der Region. Mitten in Neufra."
          text="In unserem Hofladen finden Sie hochwertiges Obst und Gemüse, Lebensmittel ausgewählter regionaler Erzeuger und Spezialitäten aus eigener Herstellung."
          image={siteImages.home.hero}
          variant="dark"
          actions={[
            { label: "Hofladen entdecken", href: "/hofladen" },
            {
              label: "Öffnungszeiten",
              href: "/kontakt",
              variant: "secondary",
            },
          ]}
        />

        <section className="bg-[#EAD6BD]/35 px-6 py-16 talbrennerei-home-hofladen-intro md:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
                  Der Hofladen
                </p>

                <h2 className="max-w-2xl font-heading text-5xl leading-[0.98] text-[#1F2F20] md:text-6xl lg:text-7xl">
                  Ein kleiner Wochenmarkt unter einem Dach.
                </h2>
              </div>

              <div className="max-w-2xl self-end">
                <p className="text-lg leading-8 text-[#555149]">
                  Unser Hofladen bringt zusammen, was in der Region mit Sorgfalt
                  angebaut, gebacken und hergestellt wird. So entsteht ein
                  ausgewähltes, hochwertiges Sortiment für den täglichen Einkauf
                  – persönlich zusammengestellt und direkt in Neufra.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-10 lg:mt-28 lg:gap-16">
              <article>
                <span className="mb-6 block h-px w-10 bg-[#B87935]" />

                <h3 className="font-heading text-3xl leading-tight text-[#1F2F20]">
                  Frisch aus der Region
                </h3>

                <p className="mt-5 leading-7 text-[#555149]">
                  Saisonales Obst und Gemüse von ausgewählten Erzeugern aus der
                  Umgebung.
                </p>
              </article>

              <article>
                <span className="mb-6 block h-px w-10 bg-[#B87935]" />

                <h3 className="font-heading text-3xl leading-tight text-[#1F2F20]">
                  Für jeden Tag
                </h3>

                <p className="mt-5 leading-7 text-[#555149]">
                  Brot, Eier, Käse, Wurst, Gewürze und weitere gute Lebensmittel
                  regionaler Betriebe.
                </p>
              </article>

              <article>
                <span className="mb-6 block h-px w-10 bg-[#B87935]" />

                <h3 className="font-heading text-3xl leading-tight text-[#1F2F20]">
                  Von uns gemacht
                </h3>

                <p className="mt-5 leading-7 text-[#555149]">
                  Liköre, Spirituosen, Honig, Fruchtaufstriche und Säfte aus
                  eigener Herstellung.
                </p>
              </article>
            </div>

            <div className="mt-12 grid gap-6 bg-[#FAF9F6]/80 p-6 sm:grid-cols-2 sm:p-8 md:mt-16 lg:mt-20">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
                  Hier finden Sie uns
                </p>

                <p className="mt-3 text-base leading-7 text-[#1F2F20]">
                  Rathausstr. 15
                  <br />
                  72419 Neufra
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
                  Öffnungszeiten
                </p>

                <p className="mt-3 whitespace-pre-line text-base leading-7 text-[#1F2F20]">
                  {openingHours}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-6 py-16 md:py-28"
          aria-label="Einblicke in den Hofladen"
        >
          <div className="grid grid-cols-12 items-start gap-4 md:gap-6">
            <div className="relative col-span-12 min-h-[300px] overflow-hidden md:col-span-7 md:min-h-[620px]">
              <Image
                src={siteImages.hofladen.inside}
                alt="Einblick in den Hofladen der Talbrennerei Neufra"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-7 min-h-[230px] overflow-hidden md:col-span-5 md:mt-20 md:min-h-[390px]">
              <Image
                src={siteImages.products.apples}
                alt="Obst im Hofladen"
                fill
                sizes="(min-width: 768px) 40vw, 58vw"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-5 mt-6 min-h-[190px] overflow-hidden md:col-span-4 md:-mt-28 md:min-h-[310px]">
              <Image
                src={siteImages.products.shopTea}
                alt="Tee und Gewürze im Hofladen"
                fill
                sizes="(min-width: 768px) 32vw, 42vw"
                className="object-cover object-[50%_1%]"
              />
            </div>
          </div>
        </section>

        <ProductTeaserGrid
          eyebrow="Aus eigener Herstellung"
          title="Und manches machen wir noch selbst."
          text="Die Wurzeln der Talbrennerei bleiben ein wichtiger Teil unseres Hofladens: eigene Spezialitäten, mit Erfahrung, guten Rohstoffen und viel Sorgfalt hergestellt."
          linkLabel="Alle eigenen Spezialitäten ansehen"
          categories={ownSpecialties}
        />

        <PartnerSection />

        <UpdatesPreview
          updates={latestUpdates.map((update) => ({
            title: update.title,
            text: update.content,
            date: new Date(update.created_at).toISOString(),
            imageUrl: update.image_url,
          }))}
        />
      </main>
    </>
  );
}
