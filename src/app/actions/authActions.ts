"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, setAdminSession } from "@/lib/auth";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw new Error("E-Mail oder Passwort ist falsch.");
  }

  await setAdminSession();

  redirect("/admin");
}

export async function logout() {
  await clearAdminSession();

  redirect("/login");
}
