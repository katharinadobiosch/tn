import { HeroSection } from "@/components/HeroSection";
import { EditorialIntro } from "@/components/EditorialIntro";
import { ProductTeaserGrid } from "@/components/ProductTeaserGrid";
import { UpdatesPreview } from "@/components/UpdatesPreview";
import { updatesPreview } from "@/data/site";
import { siteImages } from "@/data/images";
import { PartnerSection } from "@/components/PartnerSection";
import { getOpenDaysOnly } from "@/lib/siteSettings";

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

export default async function Home() {
  const openingHours = await getOpenDaysOnly();

  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <HeroSection
        eyebrow="HOFLADEN · REGIONALE PRODUKTE · NEUFRA"
        title="Gutes aus der Region. Mitten in Neufra."
        text="In unserem Hofladen finden Sie hochwertiges Obst und Gemüse, Lebensmittel ausgewählter regionaler Erzeuger und Spezialitäten aus eigener Herstellung."
        image={siteImages.about.shop}
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

      <div className="bg-[#EAD6BD]/35">
        <EditorialIntro
          eyebrow="Der Hofladen"
          title="Ein kleiner Wochenmarkt unter einem Dach."
        >
          <p>
            Unser Hofladen bringt zusammen, was in der Region mit Sorgfalt
            angebaut, gebacken und hergestellt wird. So entsteht ein
            ausgewähltes, hochwertiges Sortiment für den täglichen Einkauf –
            persönlich zusammengestellt und direkt in Neufra.
          </p>

          <div className="divide-y divide-[#1F2F20]/12 border-y border-[#1F2F20]/12">
            <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
              <h3 className="font-heading text-xl text-[#1F2F20]">
                Frisch aus der Region
              </h3>
              <p className="text-base leading-7">
                Saisonales Obst und Gemüse von ausgewählten Erzeugern aus der
                Umgebung.
              </p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
              <h3 className="font-heading text-xl text-[#1F2F20]">
                Für jeden Tag
              </h3>
              <p className="text-base leading-7">
                Brot, Eier, Käse, Wurst, Gewürze und weitere gute Lebensmittel
                regionaler Betriebe.
              </p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
              <h3 className="font-heading text-xl text-[#1F2F20]">
                Von uns gemacht
              </h3>
              <p className="text-base leading-7">
                Liköre, Spirituosen, Honig, Fruchtaufstriche und Säfte aus
                eigener Herstellung.
              </p>
            </div>
          </div>

          <div className="grid gap-6 bg-[#FAF9F6]/80 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
                Hier finden Sie uns
              </p>
              <p className="mt-3 text-base leading-7 text-[#1F2F20]">
                Rathausstr. 15<br />
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
        </EditorialIntro>
      </div>

      <ProductTeaserGrid
        eyebrow="Aus eigener Herstellung"
        title="Und manches machen wir noch selbst."
        text="Die Wurzeln der Talbrennerei bleiben ein wichtiger Teil unseres Hofladens: eigene Spezialitäten, mit Erfahrung, guten Rohstoffen und viel Sorgfalt hergestellt."
        linkLabel="Alle eigenen Spezialitäten ansehen"
        categories={ownSpecialties}
      />

      <PartnerSection />

      <UpdatesPreview updates={updatesPreview} />
    </main>
  );
}
