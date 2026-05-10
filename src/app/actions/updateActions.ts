"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function requireUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return supabase;
}

async function uploadImage(
  supabase: Awaited<ReturnType<typeof createClient>>,
  image: File,
) {
  const fileExt = image.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from("update-images")
    .upload(fileName, image, {
      contentType: image.type,
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage
    .from("update-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

export async function createUpdate(formData: FormData) {
  const supabase = await requireUser();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const image = formData.get("image") as File | null;

  if (!title || !content) {
    throw new Error("Titel und Inhalt sind erforderlich.");
  }

  let imageUrl: string | null = null;

  if (image && image.size > 0) {
    imageUrl = await uploadImage(supabase, image);
  }

  const { error } = await supabase.from("updates").insert({
    title,
    content,
    published,
    image_url: imageUrl,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin");
}

export async function updateUpdate(id: string, formData: FormData) {
  const supabase = await requireUser();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const image = formData.get("image") as File | null;

  if (!title || !content) {
    throw new Error("Titel und Inhalt sind erforderlich.");
  }

  const updateData: {
    title: string;
    content: string;
    published: boolean;
    updated_at: string;
    image_url?: string;
  } = {
    title,
    content,
    published,
    updated_at: new Date().toISOString(),
  };

  if (image && image.size > 0) {
    updateData.image_url = await uploadImage(supabase, image);
  }

  const { error } = await supabase
    .from("updates")
    .update(updateData)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin");
}

export async function deleteUpdate(id: string) {
  const supabase = await requireUser();

  const { error } = await supabase.from("updates").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin");
}
