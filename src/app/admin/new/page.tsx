import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { createUpdate } from "@/app/actions/updateActions";

export default async function NewUpdatePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="bg-[#F7F4EE] px-6 py-24 text-[#24231F]">
      <section className="mx-auto max-w-3xl">
        <Link href="/admin" className="text-sm underline underline-offset-4">
          Zurück zur Übersicht
        </Link>

        <p className="mt-12 mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Admin
        </p>

        <h1 className="font-serif text-5xl">Neuer Beitrag</h1>

        <form action={createUpdate} className="mt-12 space-y-6">
          <div>
            <label htmlFor="image" className="mb-2 block text-sm">
              Bild
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />
          </div>
          <div>
            <label htmlFor="title" className="mb-2 block text-sm">
              Titel
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
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
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />
          </div>

          <label className="flex items-center gap-3 text-sm">
            <input name="published" type="checkbox" defaultChecked />
            Beitrag veröffentlichen
          </label>

          <button
            type="submit"
            className="bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#2F432F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] active:bg-[#162417]"
          >
            Beitrag speichern
          </button>
        </form>
      </section>
    </main>
  );
}
