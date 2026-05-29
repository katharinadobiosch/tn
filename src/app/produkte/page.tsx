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
  },
  {
    title: "Liköre",
    text: "Fruchtige Liköre in verschiedenen Sorten.",
    image: siteImages.products.liqueur,
  },
  {
    title: "Honig",
    text: "Honig aus eigener Imkerei.",
    image: siteImages.products.honey,
  },
  {
    title: "Fruchtaufstriche",
    text: "Süße Aufstriche aus hochwertigen Früchten.",
    image: siteImages.products.jam,
  },
  {
    title: "Apfelsaft",
    text: "100 % naturtrüber Apfelsaft in der 5 l Bag-in-Box.",
    image: siteImages.products.juice,
  },
  {
    title: "Wildspezialitäten",
    text: "Fleisch und Wurst vom Damwild.",
    image: siteImages.products.wild,
  },
];

export default function ProduktePage() {
  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Produkte
        </p>
        <RevealText>
          <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Brände, Liköre, Honig, Fruchtaufstriche und Saisonales.
          </h1>
        </RevealText>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          In unserer modernen Brennerei verarbeiten wir ausschließlich
          Obstsorten von Streuobstwiesen am Fuße der Schwäbischen Alb. Auf
          dieser Basis entstehen feinste Destillate und sortenreine
          Spezialitäten.
        </p>
        <div className="mt-10 grid max-w-5xl gap-6 border-l border-[#B87935] pl-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#B87935]">
              Herkunft
            </p>
            <p className="mt-3 leading-7 text-[#555149]">
              Obst von Streuobstwiesen am Fuß der Schwäbischen Alb.
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

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Sortiment
        </p>
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {productCards.map((product) => (
            <article
              key={product.title}
              className="group flex h-full flex-col overflow-hidden border border-[#1F2F20]/10 bg-white transition-colors duration-200 hover:border-[#B87935]/60"
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
                <h2 className="font-serif text-3xl">{product.title}</h2>
                <p className="mt-4 leading-7 text-[#555149]">{product.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Brennerei
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Schnaps, Liköre & Spirituosen
          </h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Erhältlich in verschiedenen Abfüllgrößen. Saisonbedingt sind nicht
            immer alle Produkte verfügbar.
          </p>
        </div>

        <ProductList items={spiritProducts} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Eigene Imkerei
          </p>
          <h2 className="font-serif text-4xl">Honig</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Unser nach alter Tradition geschleuderter Honig stammt aus eigener
            Imkerei. Die Bienenvölker werden von erfahrenem und geschultem
            Personal überwacht und betreut.
          </p>
        </article>

        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Aus Früchten bester Qualität
          </p>
          <h2 className="font-serif text-4xl">Süße Fruchtaufstriche</h2>
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
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
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
        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Außerdem
          </p>
          <h2 className="font-serif text-4xl">Weitere Produkte</h2>

          <div className="mt-8">
            <ProductList items={additionalProducts} />
          </div>
        </article>

        <article id="damwild" className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Damwild
          </p>
          <h2 className="font-serif text-4xl">Wildspezialitäten</h2>
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
