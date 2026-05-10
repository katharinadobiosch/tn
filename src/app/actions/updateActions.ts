"use server";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export async function createUpdate(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const image = formData.get("image") as File | null;

  let imageUrl: string | null = null;

  if (image && image.size > 0) {
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

    imageUrl = data.publicUrl;
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
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const image = formData.get("image") as File | null;

  let imageUrl: string | undefined;

  if (image && image.size > 0) {
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

    imageUrl = data.publicUrl;
  }

  const updateData: {
    title: string;
    content: string;
    published: boolean;
    image_url?: string;
    updated_at: string;
  } = {
    title,
    content,
    published,
    updated_at: new Date().toISOString(),
  };

  if (imageUrl) {
    updateData.image_url = imageUrl;
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
  const { error } = await supabase.from("updates").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin");
}
