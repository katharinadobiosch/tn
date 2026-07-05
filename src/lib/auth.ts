import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "tn_admin_session";

export async function requireAdmin() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!process.env.ADMIN_SESSION_TOKEN) {
    throw new Error("ADMIN_SESSION_TOKEN is not set");
  }

  if (session !== process.env.ADMIN_SESSION_TOKEN) {
    redirect("/login");
  }
}

export async function setAdminSession() {
  const cookieStore = await cookies();

  if (!process.env.ADMIN_SESSION_TOKEN) {
    throw new Error("ADMIN_SESSION_TOKEN is not set");
  }

  cookieStore.set(SESSION_COOKIE, process.env.ADMIN_SESSION_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE);
}
