import { login } from "@/app/actions/authActions";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F4EE] px-6 text-[#24231F]">
      <section className="w-full max-w-md">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Admin
        </p>

        <h1 className="font-serif text-5xl">Einloggen</h1>

        <form action={login} className="mt-10 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1F2F20] px-6 py-3 text-sm text-white"
          >
            Einloggen
          </button>
        </form>
      </section>
    </main>
  );
}
