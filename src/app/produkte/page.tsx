import Image from "next/image";
import { siteImages } from "@/data/images";
import {
  additionalProducts,
  fruitSpreads,
  seasonalFruit,
  spiritProducts,
  wildProducts,
} from "@/data/products";
import { ProductList } from "@/components/ProductList";
import { RevealText } from "@/components/RevealText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spezialitäten aus Neufra",
  description:
    "Brände, Liköre, Honig, Fruchtaufstriche, Apfelsaft und weitere Spezialitäten der Talbrennerei Neufra.",
};

const productCards = [
  {
    title: "Edelbrände",
    text: "Feine Destillate aus Obst von Streuobstwiesen.",
    image: siteImages.products.spirits,
    href: "#braende",
  },
  {
    title: "Liköre",
    text: "Fruchtige Liköre in verschiedenen Sorten.",
    image: siteImages.products.liqueur,
    href: "#likoere",
  },
  {
    title: "Honig",
    text: "Honig aus eigener Imkerei.",
    image: siteImages.products.honey,
    href: "#honig",
  },
  {
    title: "Fruchtaufstriche",
    text: "Süße Aufstriche aus hochwertigen Früchten.",
    image: siteImages.products.jam,
    href: "#fruchtaufstriche",
  },
  {
    title: "Apfelsaft",
    text: "100 % naturtrüber Apfelsaft in der 5 l Bag-in-Box.",
    image: siteImages.products.juice,
    href: "#saefte",
  },
  {
    title: "Wildspezialitäten",
    text: "Fleisch und Wurst vom Damwild.",
    image: siteImages.products.wild,
    href: "#wild",
  },
];

const liqueurProducts = spiritProducts.filter((product) =>
  product.toLowerCase().includes("likör"),
);

const brandAndSpiritProducts = spiritProducts.filter(
  (product) => !product.toLowerCase().includes("likör"),
);

export default function ProduktePage() {
  return (
    <main
      className="bg-[#FAF9F6] text-[#24231F] talbrennerei-produkte"
      style={{ "--page-accent": "#7A3B2E" } as React.CSSProperties}
    >
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:pb-24 md:pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Spezialitäten · Saisonales · Neufra
        </p>

        <RevealText>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight md:text-7xl">
            Unsere Spezialitäten aus Neufra.
          </h1>
        </RevealText>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149] md:mt-8">
          Neben unserem regionalen Hofladen bleibt die eigene Herstellung ein
          wichtiger Teil der Talbrennerei. Entdecken Sie unsere Brände, Liköre,
          Honig, Fruchtaufstriche und weitere Spezialitäten aus Neufra.
        </p>

        <p className="mt-4 max-w-2xl border-l border-[var(--page-accent)] pl-5 leading-7 text-[#555149] md:mt-5 md:pl-6">
          Ergänzt wird das Sortiment durch saisonales Obst und ausgewählte
          regionale Produkte. Die Verfügbarkeit kann je nach Saison variieren.
        </p>

        <div className="mt-10 grid max-w-5xl gap-8 md:mt-14 md:grid-cols-3 md:gap-14">
          <div>
            <span className="mb-4 block h-px w-10 bg-[var(--page-accent)] md:mb-5" />
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Herkunft
            </p>
            <p className="mt-3 leading-7 text-[#555149] md:mt-4">
              Eigene Spezialitäten und ausgewählte regionale Produkte.
            </p>
          </div>

          <div>
            <span className="mb-4 block h-px w-10 bg-[var(--page-accent)] md:mb-5" />
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Handwerk
            </p>
            <p className="mt-3 leading-7 text-[#555149] md:mt-4">
              Verarbeitung mit Sorgfalt, Erfahrung und traditioneller
              Brennkunst.
            </p>
          </div>

          <div>
            <span className="mb-4 block h-px w-10 bg-[var(--page-accent)] md:mb-5" />
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Saison
            </p>
            <p className="mt-3 leading-7 text-[#555149] md:mt-4">
              Viele Produkte sind saisonal und je nach Verfügbarkeit erhältlich.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#526247] px-6 py-12 text-[#FAF9F6] talbrennerei-produkte-category-navigation md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
              Aus eigener Herstellung
            </p>

            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Unsere eigenen Spezialitäten
            </h2>
          </div>

          <nav aria-label="Produktkategorien">
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {productCards.map((product) => (
                <a
                  key={product.title}
                  href={product.href}
                  className="group flex h-full flex-col overflow-hidden bg-[#FAF9F6] text-[#24231F] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAD6BD]"
                >
                  <div className="relative h-64 overflow-hidden bg-[#D8D2C6] md:h-72">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-3xl">{product.title}</h3>

                    <p className="mt-4 leading-7 text-[#555149]">
                      {product.text}
                    </p>

                    <span
                      className="mt-6 text-sm text-[#526247]"
                      aria-hidden="true"
                    >
                      Zur Auswahl ↓
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-6 py-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-14">
          <article id="braende" className="scroll-mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Brennerei
            </p>

            <h2 className="font-heading text-4xl leading-tight">
              Brände und Spirituosen aus eigener Herstellung
            </h2>

            <p className="mt-5 leading-7 text-[#555149] md:mt-6">
              Erhältlich in verschiedenen Abfüllgrößen. Saisonbedingt sind nicht
              immer alle Produkte verfügbar.
            </p>

            <div className="mt-6 md:mt-8">
              <ProductList items={brandAndSpiritProducts} />
            </div>
          </article>

          <article id="likoere" className="scroll-mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Aus der Talbrennerei
            </p>

            <h2 className="font-heading text-4xl leading-tight">
              Liköre aus Neufra
            </h2>

            <p className="mt-5 leading-7 text-[#555149] md:mt-6">
              Liköre in verschiedenen Sorten und Abfüllgrößen.
            </p>

            <div className="mt-6 md:mt-8">
              <ProductList items={liqueurProducts} />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#EAD6BD]/35 px-6 py-16 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-14">
          <article id="honig" className="scroll-mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Eigene Imkerei
            </p>

            <h2 className="font-heading text-4xl">Honig aus eigener Imkerei</h2>

            <p className="mt-5 leading-7 text-[#555149] md:mt-6">
              Unser nach alter Tradition geschleuderter Honig stammt aus eigener
              Imkerei. Die Bienenvölker werden von erfahrenem und geschultem
              Personal überwacht und betreut.
            </p>
          </article>

          <article id="fruchtaufstriche" className="scroll-mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Aus Früchten bester Qualität
            </p>

            <h2 className="font-heading text-4xl">
              Fruchtaufstriche aus eigener Herstellung
            </h2>

            <p className="mt-5 leading-7 text-[#555149] md:mt-6">
              Unsere Fruchtaufstriche werden mit Sorgfalt hergestellt und sind
              in verschiedenen Größen und Varianten erhältlich.
            </p>

            <div className="mt-6 md:mt-8">
              <ProductList items={fruitSpreads} />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-6 py-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-14">
          <article id="saefte" className="scroll-mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Außerdem
            </p>

            <h2 className="font-heading text-4xl">
              Naturtrüber Apfelsaft und weitere Produkte
            </h2>

            <div className="mt-6 md:mt-8">
              <ProductList items={additionalProducts} />
            </div>
          </article>

          <article id="wild" className="scroll-mt-8">
            <span
              id="damwild"
              className="block scroll-mt-8"
              aria-hidden="true"
            />

            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Damwild
            </p>

            <h2 className="font-heading text-4xl">Wildspezialitäten</h2>

            <p className="mt-5 leading-7 text-[#555149] md:mt-6">
              In unserem Damwild-Gehege auf der Alb leben ca. 35 Tiere in
              extensiver, natürlicher Haltungsform. Das kurzfaserige, fettarme
              Fleisch mit feinem Wildgeschmack ist besonders saftig.
            </p>

            <div className="mt-6 md:mt-8">
              <ProductList items={wildProducts} />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#EAD6BD]/35 px-6 py-12 talbrennerei-produkte-hofladen-sortiment md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
              Im Hofladen
            </p>

            <h2 className="font-heading text-4xl leading-tight text-[#1F2F20] md:text-5xl">
              Regionales und Saisonales für den täglichen Einkauf
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#555149] md:mt-6">
              Zum Sortiment gehören regionales Obst und Gemüse sowie Brot, Eier,
              Gewürze, Wurst, Käse und weitere regionale Lebensmittel. Das
              Angebot richtet sich nach Saison und Verfügbarkeit.
            </p>

            <ul className="mt-8 border-y border-[#1F2F20]/15 text-lg text-[#1F2F20] md:mt-10">
              <li className="border-b border-[#1F2F20]/15 py-4">
                Regionales Obst und Gemüse
              </li>
              <li className="border-b border-[#1F2F20]/15 py-4">
                Brot und Eier
              </li>
              <li className="border-b border-[#1F2F20]/15 py-4">
                Gewürze, Wurst und Käse
              </li>
              <li className="py-4">Weitere regionale Lebensmittel</li>
            </ul>
          </div>

          <figure>
            <div className="grid grid-cols-12 items-start gap-4">
              <div className="relative col-span-7 min-h-64 overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] shadow-[12px_12px_0_rgba(82,98,71,0.12)] md:min-h-96">
                <Image
                  src={siteImages.products.apples}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 35vw, 58vw"
                  className="object-cover"
                />
              </div>

              <div className="relative col-span-5 mt-8 min-h-48 overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] md:mt-12 md:min-h-64">
                <Image
                  src={siteImages.products.carrots}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 24vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="relative col-span-5 -mt-6 min-h-44 overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] md:-mt-8 md:min-h-60">
                <Image
                  src={siteImages.products.flour}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 24vw, 40vw"
                  className="object-cover object-[0%_1%]"
                />
              </div>

              <div className="relative col-span-7 min-h-56 overflow-hidden border border-[#B87935]/20 bg-[#D8D2C6] shadow-[12px_12px_0_rgba(184,121,53,0.12)] md:min-h-80">
                <Image
                  src={siteImages.products.shopTea}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 35vw, 58vw"
                  className="object-cover object-[0%_1%]"
                />
              </div>
            </div>

            <figcaption className="mt-5 max-w-xl text-sm leading-6 text-[#555149] md:mt-6">
              Das aktuelle Angebot richtet sich nach Saison und Verfügbarkeit.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 talbrennerei-produkte-seasonal md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Im Hofladen · Saisonales
          </p>

          <h2 className="font-heading text-4xl leading-tight md:text-5xl">
            Obst der Saison
          </h2>

          <p className="mt-5 leading-7 text-[#555149] md:mt-6">
            Gerne können Sie uns kontaktieren und anfragen, welche Obstsorten
            aktuell verfügbar sind.
          </p>
        </div>

        <ProductList items={seasonalFruit} />
      </section>
    </main>
  );
}
