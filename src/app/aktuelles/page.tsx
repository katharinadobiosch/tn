import Image from "next/image";
import { updates } from "@/data/updates";

export default function AktuellesPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Aktuelles
        </p>

        <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
          Neuigkeiten aus Hofladen und Brennerei.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          Hier finden Sie aktuelle Hinweise zu saisonalen Produkten,
          Verfügbarkeiten, Öffnungszeiten und Veranstaltungen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10">
          {updates.map((update) => (
            <article
              key={update.id}
              className="grid gap-8 border-t border-[#24231F]/15 pt-10 md:grid-cols-[0.55fr_1fr]"
            >
              <div className="relative min-h-[260px] overflow-hidden bg-[#D8D2C6]">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover grayscale-[8%]"
                />
              </div>

              <div>
                <time className="text-xs uppercase tracking-[0.22em] text-[#526247]">
                  {new Date(update.date).toLocaleDateString("de-DE")}
                </time>

                <h2 className="mt-4 font-serif text-4xl">{update.title}</h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149]">
                  {update.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
