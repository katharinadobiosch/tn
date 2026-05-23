import { RevealText } from "@/components/RevealText";

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
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#EAD6BD] before:h-px before:w-8 before:bg-[#B87935]">
            Aktuelles
          </p>

          <RevealText>
            <h2 className="font-serif text-4xl text-[#EAD6BD] md:text-5xl">
              Neuigkeiten aus Hofladen und Brennerei.
            </h2>
          </RevealText>
        </div>

        <div className="divide-y divide-[#B87935]/30">
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
