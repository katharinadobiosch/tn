type UpdatePreview = {
  title: string;
  text: string;
};

type UpdatesPreviewProps = {
  updates: UpdatePreview[];
};

export function UpdatesPreview({ updates }: UpdatesPreviewProps) {
  return (
    <section className="bg-[#24231F] px-6 py-24 text-[#F7F4EE]">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#B8C0A6]">
            Aktuelles
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Neuigkeiten aus Hofladen und Brennerei.
          </h2>
        </div>

        <div className="divide-y divide-white/20">
          {updates.map((update) => (
            <article key={update.title} className="py-6 first:pt-0">
              <h3 className="font-serif text-2xl">{update.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{update.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
