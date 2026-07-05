import Link from "next/link";
import { notFound } from "next/navigation";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import type { Update } from "@/types/update";
import { deleteUpdate, updateUpdate } from "@/app/actions/updateActions";

type EditUpdatePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditUpdatePage({ params }: EditUpdatePageProps) {
  const { id } = await params;

  await requireAdmin();

  const updates = (await sql`
  select *
  from updates
  where id = ${id}
  limit 1
`) as Update[];

  const update = updates[0];

  if (!update) {
    notFound();
  }

  const updateAction = updateUpdate.bind(null, update.id);
  const deleteAction = deleteUpdate.bind(null, update.id);

  return (
    <main className="bg-[#FAF9F6] px-6 py-24 text-[#24231F]">
      <section className="mx-auto max-w-3xl">
        <Link href="/admin" className="text-sm underline underline-offset-4">
          Zurück zur Übersicht
        </Link>

        <p className="mt-12 mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Admin
        </p>

        <h1 className="font-heading text-5xl">Beitrag bearbeiten</h1>

        <form action={updateAction} className="mt-12 space-y-6">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm">
              Titel
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={update.title}
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="content" className="mb-2 block text-sm">
              Inhalt
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              required
              defaultValue={update.content}
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="image" className="mb-2 block text-sm">
              Neues Bild hochladen
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />

            {update.image_url && (
              <p className="mt-2 text-sm text-[#555149]">
                Aktuell ist ein Bild hinterlegt.
              </p>
            )}
          </div>

          <label className="flex items-center gap-3 text-sm">
            <input
              name="published"
              type="checkbox"
              defaultChecked={update.published}
            />
            Beitrag veröffentlichen
          </label>

          <button
            type="submit"
            className="bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#2F432F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] active:bg-[#162417]"
          >
            Änderungen speichern
          </button>
        </form>

        <form
          action={deleteAction}
          className="mt-10 border-t border-[#24231F]/15 pt-8"
        >
          <button
            type="submit"
            className="border border-red-800 px-6 py-3 text-sm text-red-800"
          >
            Beitrag löschen
          </button>
        </form>
      </section>
    </main>
  );
}
