import Link from "next/link";

type UpdatePreview = {
  title: string;
  text: string;
  date?: string;
};

type UpdatesPreviewProps = {
  updates: UpdatePreview[];
};

export function UpdatesPreview({ updates }: UpdatesPreviewProps) {
  if (!updates.length) {
    return null;
  }

  return (
    <section className="bg-[#526247] px-6 py-24 text-[#FAF9F6] talbrennerei-updates-preview">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
            Aktuelles
          </p>

          <h2 className="font-heading text-4xl text-[#FAF9F6] md:text-5xl">
            Neuigkeiten aus Hofladen und Brennerei.
          </h2>

          <Link
            href="/aktuelles"
            className="mt-8 inline-block border-b border-[#FAF9F6]/50 pb-1 text-sm transition-colors duration-200 hover:border-[#FAF9F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FAF9F6]"
          >
            Alle Neuigkeiten ansehen
          </Link>
        </div>

        <div className="divide-y divide-[#B87935]/30">
          {updates.map((update) => (
            <article key={update.title} className="py-6 first:pt-0">
              {update.date && (
                <time
                  dateTime={update.date}
                  className="text-xs uppercase tracking-[0.22em] text-[#EAD6BD]"
                >
                  {new Date(update.date).toLocaleDateString("de-DE")}
                </time>
              )}

              <h3 className="mt-3 font-heading text-2xl text-[#FAF9F6]">
                {update.title}
              </h3>

              <p className="mt-3 leading-7 text-[#FAF9F6]/80">{update.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
