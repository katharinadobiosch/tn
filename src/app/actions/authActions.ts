"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, setAdminSession } from "@/lib/auth";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw new Error("Benutzername oder Passwort ist falsch.");
  }

  await setAdminSession();

  redirect("/admin");
}

export async function logout() {
  await clearAdminSession();

  redirect("/login");
}
