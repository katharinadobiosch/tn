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
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Spezialitäten · Saisonales · Neufra
        </p>
        <RevealText>
          <h1 className="max-w-5xl font-heading text-5xl leading-tight md:text-7xl">
            Unsere Spezialitäten aus Neufra.
          </h1>
        </RevealText>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          Neben unserem regionalen Hofladen bleibt die eigene Herstellung ein
          wichtiger Teil der Talbrennerei. Entdecken Sie unsere Brände, Liköre,
          Honig, Fruchtaufstriche und weitere Spezialitäten aus Neufra.
        </p>
        <p className="mt-5 max-w-2xl border-l border-[#B87935] pl-6 leading-7 text-[#555149]">
          Ergänzt wird das Sortiment durch saisonales Obst und ausgewählte
          regionale Produkte. Die Verfügbarkeit kann je nach Saison variieren.
        </p>
        <div className="mt-10 grid max-w-5xl gap-6 border-l border-[#B87935] pl-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Herkunft
            </p>
            <p className="mt-3 leading-7 text-[#555149]">
              <p className="mt-3 leading-7 text-[#555149]">
                Ausgewählte Zutaten und Produkte mit Bezug zur Region.
              </p>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Handwerk
            </p>
            <p className="mt-3 leading-7 text-[#555149]">
              Verarbeitung mit Sorgfalt, Erfahrung und traditioneller
              Brennkunst.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Saison
            </p>
            <p className="mt-3 leading-7 text-[#555149]">
              Viele Produkte sind saisonal und je nach Verfügbarkeit erhältlich.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#526247] px-6 py-24 text-[#FAF9F6]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
              Sortiment
            </p>
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Unsere Spezialitäten im Überblick
            </h2>
          </div>

          <nav aria-label="Produktkategorien">
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {productCards.map((product) => (
                <a
                  key={product.title}
                  href={product.href}
                  className="group flex h-full flex-col overflow-hidden border border-[#EAD6BD]/20 bg-[#FAF9F6] text-[#24231F] transition-colors duration-200 hover:border-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAD6BD]"
                >
                  <div className="relative h-72 overflow-hidden bg-[#D8D2C6]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
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

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article
          id="braende"
          className="scroll-mt-8 border-t border-[#24231F]/15 pt-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Brennerei
          </p>
          <h2 className="font-heading text-4xl leading-tight">
            Brände und Spirituosen aus eigener Herstellung
          </h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Erhältlich in verschiedenen Abfüllgrößen. Saisonbedingt sind nicht
            immer alle Produkte verfügbar.
          </p>
          <div className="mt-8">
            <ProductList items={brandAndSpiritProducts} />
          </div>
        </article>

        <article
          id="likoere"
          className="scroll-mt-8 border-t border-[#24231F]/15 pt-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Aus der Talbrennerei
          </p>
          <h2 className="font-heading text-4xl leading-tight">
            Liköre aus Neufra
          </h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Liköre in verschiedenen Sorten und Abfüllgrößen.
          </p>
          <div className="mt-8">
            <ProductList items={liqueurProducts} />
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article
          id="honig"
          className="scroll-mt-8 border-t border-[#24231F]/15 pt-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Eigene Imkerei
          </p>
          <h2 className="font-heading text-4xl">Honig aus eigener Imkerei</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Unser nach alter Tradition geschleuderter Honig stammt aus eigener
            Imkerei. Die Bienenvölker werden von erfahrenem und geschultem
            Personal überwacht und betreut.
          </p>
        </article>

        <article
          id="fruchtaufstriche"
          className="scroll-mt-8 border-t border-[#24231F]/15 pt-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Aus Früchten bester Qualität
          </p>
          <h2 className="font-heading text-4xl">
            Fruchtaufstriche aus eigener Herstellung
          </h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Unsere Fruchtaufstriche werden mit Sorgfalt hergestellt und sind in
            verschiedenen Größen und Varianten erhältlich.
          </p>

          <div className="mt-8">
            <ProductList items={fruitSpreads} />
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Saisonales
          </p>
          <h2 className="font-heading text-4xl leading-tight md:text-5xl">
            Obst der Saison
          </h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Gerne können Sie uns kontaktieren und anfragen, welche Obstsorten
            aktuell verfügbar sind.
          </p>
        </div>

        <ProductList items={seasonalFruit} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article
          id="saefte"
          className="scroll-mt-8 border-t border-[#24231F]/15 pt-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Außerdem
          </p>
          <h2 className="font-heading text-4xl">
            Naturtrüber Apfelsaft und weitere Produkte
          </h2>

          <div className="mt-8">
            <ProductList items={additionalProducts} />
          </div>
        </article>

        <article
          id="wild"
          className="scroll-mt-8 border-t border-[#24231F]/15 pt-10"
        >
          <span id="damwild" className="block scroll-mt-8" aria-hidden="true" />
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Damwild
          </p>
          <h2 className="font-heading text-4xl">Wildspezialitäten</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            In unserem Damwild-Gehege auf der Alb leben ca. 35 Tiere in
            extensiver, natürlicher Haltungsform. Das kurzfaserige, fettarme
            Fleisch mit feinem Wildgeschmack ist besonders saftig.
          </p>

          <div className="mt-8">
            <ProductList items={wildProducts} />
          </div>
        </article>
      </section>
    </main>
  );
}
