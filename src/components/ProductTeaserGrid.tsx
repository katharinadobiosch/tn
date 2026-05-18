import Link from "next/link";

type ProductCategory = {
  title: string;
  text: string;
  href: string;
};

type ProductTeaserGridProps = {
  categories: ProductCategory[];
};

export function ProductTeaserGrid({ categories }: ProductTeaserGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-8">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Sortiment
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Unsere Produkte</h2>
        </div>

        <Link
          href="/produkte"
          className="hidden border-b border-[#24231F] pb-1 text-sm transition-colors duration-200 hover:border-[#526247] hover:text-[#526247] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] md:block"
        >
          Alle Produkte ansehen
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="border border-[#24231F]/15 bg-[#EAD6BD]/15 p-8 transition-colors duration-200 hover:border-[#B87935]/60 hover:bg-[#EAD6BD]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
          >
            <span className="mb-6 block h-px w-10 bg-[#B87935]" />
            <h3 className="font-serif text-3xl">{category.title}</h3>
            <p className="mt-5 leading-7 text-[#555149]">{category.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
