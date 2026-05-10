import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Update } from "@/types/update";

export default async function AdminPage() {
  const { data: updates, error } = await supabase
    .from("updates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="bg-[#F7F4EE] px-6 py-24 text-[#24231F]">
      <section className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center justify-between gap-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
              Admin
            </p>
            <h1 className="font-serif text-5xl">Neuigkeiten verwalten</h1>
          </div>

          <Link
            href="/admin/new"
            className="bg-[#1F2F20] px-6 py-3 text-sm text-white"
          >
            Neuer Beitrag
          </Link>
        </div>

        {!updates?.length && (
          <p className="border-t border-[#24231F]/15 pt-8 text-[#555149]">
            Noch keine Beiträge vorhanden.
          </p>
        )}

        <div className="divide-y divide-[#24231F]/15">
          {updates?.map((update: Update) => (
            <article
              key={update.id}
              className="flex items-start justify-between gap-8 py-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#526247]">
                  {update.published ? "Veröffentlicht" : "Entwurf"}
                </p>

                <h2 className="mt-3 font-serif text-3xl">{update.title}</h2>

                <p className="mt-3 max-w-2xl text-[#555149]">
                  {update.content}
                </p>
              </div>

              <div className="flex shrink-0 gap-4 text-sm">
                <Link
                  href={`/admin/${update.id}`}
                  className="underline underline-offset-4"
                >
                  Bearbeiten
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
