import Image from "next/image";
import Link from "next/link";

type UpdatePreview = {
  title: string;
  text: string;
  date?: string;
  imageUrl?: string | null;
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
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
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
            <article
              key={`${update.title}-${update.date ?? ""}`}
              className="grid gap-6 py-8 first:pt-0 sm:grid-cols-[180px_1fr]"
            >
              {update.imageUrl && (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F6]/10">
                  <Image
                    src={update.imageUrl}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 180px, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className={update.imageUrl ? "" : "sm:col-span-2"}>
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

                <p className="mt-3 leading-7 text-[#FAF9F6]/80">
                  {update.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
