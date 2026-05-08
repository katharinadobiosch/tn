type EditorialIntroProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function EditorialIntro({
  eyebrow,
  title,
  children,
}: EditorialIntroProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        {eyebrow && (
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#526247]">
            {eyebrow}
          </p>
        )}

        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#555149]">
        {children}
      </div>
    </section>
  );
}
