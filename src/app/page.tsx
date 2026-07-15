import { HeroSection } from "@/components/HeroSection";
import { EditorialIntro } from "@/components/EditorialIntro";
import { ProductTeaserGrid } from "@/components/ProductTeaserGrid";
import { UpdatesPreview } from "@/components/UpdatesPreview";
import { homeIntro, productCategories, updatesPreview } from "@/data/site";
import { siteImages } from "@/data/images";
import { PartnerSection } from "@/components/PartnerSection";
import { siteInfo } from "@/data/site";

// export default function Home() {
//   return (
//     <main className="bg-[#FAF9F6] text-[#24231F]">
//       <HeroSection
//         eyebrow={homeIntro.eyebrow}
//         title={homeIntro.title}
//         text={homeIntro.text}
//         image={siteImages.hero}
//         variant="dark"
//         actions={[
//           { label: "Produkte entdecken", href: "/produkte" },
//           {
//             label: "Kontakt aufnehmen",
//             href: "/kontakt",
//             variant: "secondary",
//           },
//         ]}
//       />

//       <EditorialIntro title="Von Streuobstwiesen, Hofladen und echter Handarbeit.">
//         <p>
//           Die Talbrennerei Neufra verbindet traditionelle Verarbeitung mit
//           regionalen Rohstoffen. Aus Obst, Honig und weiteren Produkten
//           entstehen Spezialitäten, die eng mit der Umgebung und den Jahreszeiten
//           verbunden sind.
//         </p>
//         <p>
//           Neben Bränden und Likören gibt es im Hofladen auch Honig,
//           Fruchtaufstriche, Apfelsaft, Wildspezialitäten und saisonale Produkte.
//         </p>
//       </EditorialIntro>

//       <ProductTeaserGrid categories={productCategories} />

//       <PartnerSection />

//       <UpdatesPreview updates={updatesPreview} />
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1F2F20] px-6 py-12 text-[#FAF9F6]">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#EAD6BD]">
            Talbrennerei Neufra
          </p>

          <h1 className="font-heading text-5xl leading-[1.05] md:text-7xl">
            Unsere neue Website entsteht gerade.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#F3EFE8]">
            Wir überarbeiten aktuell unseren Internetauftritt. Schon bald finden
            Sie hier wieder Informationen zu unserem Hofladen, unseren
            regionalen Spezialitäten und unseren Verkostungen.
          </p>

          <div className="mt-10 border-t border-white/20 pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#EAD6BD]">
              Bis dahin erreichen Sie uns unter
            </p>
            <a
              href="mailto:info@talbrennerei-neufra.de"
              className="mt-3 inline-block text-xl underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
            >
              info@talbrennerei-neufra.de
            </a>
            <br />
            <a
              href={`tel:${siteInfo.phone.replaceAll(" ", "")}`}
              className="mt-3 inline-block text-xl underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
            >
              {siteInfo.phone}
            </a>{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
