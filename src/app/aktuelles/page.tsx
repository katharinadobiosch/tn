import Image from "next/image";
import { RevealText } from "@/components/RevealText";
import { supabase } from "@/lib/supabase";
import type { Update } from "@/types/update";

export default async function AktuellesPage() {
  const { data: updates, error } = await supabase
    .from("updates")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="bg-[#FAF9F6] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Aktuelles
        </p>
        <RevealText>
          <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Neuigkeiten aus Hofladen und Brennerei.
          </h1>
        </RevealText>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          Hier finden Sie aktuelle Hinweise zu saisonalen Produkten,
          Verfügbarkeiten, Öffnungszeiten und Veranstaltungen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {!updates?.length && (
          <p className="border-t border-[#24231F]/15 pt-10 text-[#555149]">
            Aktuell gibt es noch keine Neuigkeiten.
          </p>
        )}

        <div className="grid gap-10">
          {updates?.map((update: Update) => (
            <article
              key={update.id}
              className="grid gap-8 border-t border-[#24231F]/15 pt-10 md:grid-cols-[0.55fr_1fr]"
            >
              <div className="relative min-h-[260px] overflow-hidden bg-[#D8D2C6]">
                {update.image_url ? (
                  <Image
                    src={update.image_url}
                    alt={update.title}
                    fill
                    className="object-cover grayscale-[8%]"
                  />
                ) : (
                  <div className="flex h-full min-h-[260px] items-center justify-center text-sm uppercase tracking-[0.2em] text-[#777064]">
                    Kein Bild
                  </div>
                )}
              </div>

              <div>
                <time className="text-xs uppercase tracking-[0.22em] text-[#526247]">
                  {new Date(update.created_at).toLocaleDateString("de-DE")}
                </time>

                <h2 className="mt-4 font-serif text-4xl">{update.title}</h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555149]">
                  {update.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
