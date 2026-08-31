"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

async function uploadImage(image: File) {
  const blob = await put(image.name, image, {
    access: "public",
    addRandomSuffix: true,
  });

  return blob.url;
}

export async function createUpdate(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const image = formData.get("image") as File | null;

  if (!title || !content) {
    throw new Error("Titel und Inhalt sind erforderlich.");
  }

  let imageUrl: string | null = null;

  if (image && image.size > 0) {
    imageUrl = await uploadImage(image);
  }

  await sql`
    insert into updates (title, content, published, image_url)
    values (${title}, ${content}, ${published}, ${imageUrl})
  `;

  revalidatePath("/aktuelles");

  redirect("/admin");
}

export async function updateUpdate(id: string, formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const image = formData.get("image") as File | null;

  if (!title || !content) {
    throw new Error("Titel und Inhalt sind erforderlich.");
  }

  if (image && image.size > 0) {
    const imageUrl = await uploadImage(image);

    await sql`
      update updates
      set
        title = ${title},
        content = ${content},
        published = ${published},
        image_url = ${imageUrl},
        updated_at = now()
      where id = ${id}
    `;
  } else {
    await sql`
      update updates
      set
        title = ${title},
        content = ${content},
        published = ${published},
        updated_at = now()
      where id = ${id}
    `;
  }

  revalidatePath("/aktuelles");

  redirect("/admin");
}

export async function deleteUpdate(id: string) {
  await requireAdmin();

  await sql`
    delete from updates
    where id = ${id}
  `;

  revalidatePath("/aktuelles");

  redirect("/admin");
}
