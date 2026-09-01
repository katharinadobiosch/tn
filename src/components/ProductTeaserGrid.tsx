import Link from "next/link";
import { RevealText } from "@/components/RevealText";

type ProductCategory = {
  title: string;
  text: string;
  href: string;
};

type ProductTeaserGridProps = {
  categories: ProductCategory[];
  eyebrow?: string;
  title?: string;
  text?: string;
  linkLabel?: string;
};

export function ProductTeaserGrid({
  categories,
  eyebrow = "Sortiment",
  title = "Unsere Produkte",
  text,
  linkLabel = "Alle Produkte ansehen",
}: ProductTeaserGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 talbrennerei-product-teaser-grid talbrennerei-home-own-specialties md:pb-32 md:pt-32">
      <div className="mb-12 flex items-end justify-between gap-8">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            {eyebrow}
          </p>
          <RevealText direction="right">
            <h2 className="font-heading text-4xl md:text-5xl">
              {title}
            </h2>
          </RevealText>
          {text && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149]">
              {text}
            </p>
          )}
        </div>

        <Link
          href="/produkte"
          className="hidden border-b border-[#24231F] pb-1 text-sm transition-colors duration-200 hover:border-[#526247] hover:text-[#526247] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] md:block"
        >
          {linkLabel}
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="border-t border-[#1F2F20]/18 bg-transparent p-8 transition-colors duration-200 hover:border-[#B87935]/70 hover:bg-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
          >
            <span className="mb-6 block h-px w-10 bg-[#B87935]" />
            <h3 className="font-heading text-3xl">{category.title}</h3>
            <p className="mt-5 leading-7 text-[#555149]">{category.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
