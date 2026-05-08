import { HeroSection } from "@/components/HeroSection";
import { EditorialIntro } from "@/components/EditorialIntro";
import { ProductTeaserGrid } from "@/components/ProductTeaserGrid";
import { UpdatesPreview } from "@/components/UpdatesPreview";
import { homeIntro, productCategories, updatesPreview } from "@/data/site";

export default function Home() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <HeroSection
        eyebrow={homeIntro.eyebrow}
        title={homeIntro.title}
        text={homeIntro.text}
        image="/images/hero.jpg"
      />

      <EditorialIntro title="Von Streuobstwiesen, Hofladen und echter Handarbeit.">
        <p>
          Die Talbrennerei Neufra verbindet traditionelle Verarbeitung mit
          regionalen Rohstoffen. Aus Obst, Honig und weiteren Produkten
          entstehen Spezialitäten, die eng mit der Umgebung und den Jahreszeiten
          verbunden sind.
        </p>
        <p>
          Neben Bränden und Likören gibt es im Hofladen auch Honig,
          Fruchtaufstriche, Apfelsaft, Wildspezialitäten und saisonale Produkte.
        </p>
      </EditorialIntro>

      <ProductTeaserGrid categories={productCategories} />

      <UpdatesPreview updates={updatesPreview} />
    </main>
  );
}
