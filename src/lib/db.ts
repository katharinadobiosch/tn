import { neon } from "@neondatabase/serverless";

console.log("DATABASE_URL exists:", Boolean(process.env.DATABASE_URL));

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const sql = neon(process.env.DATABASE_URL);
