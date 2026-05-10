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

export default function ProduktePage() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Produkte
        </p>

        <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
          Brände, Liköre, Honig, Fruchtaufstriche und Saisonales.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          In unserer modernen Brennerei verarbeiten wir ausschließlich
          Obstsorten von Streuobstwiesen am Fuße der Schwäbischen Alb. Auf
          dieser Basis entstehen feinste Destillate und sortenreine
          Spezialitäten.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="relative min-h-[520px] overflow-hidden bg-[#D8D2C6]">
          <Image
            src={siteImages.products.hero}
            alt="Produkte der Talbrennerei Neufra"
            fill
            className="object-cover"
            priority
          />
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
