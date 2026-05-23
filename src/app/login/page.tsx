import { login } from "@/app/actions/authActions";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF9F6] px-6 text-[#24231F]">
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
            className="bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#2F432F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20] active:bg-[#162417]"
          >
            Einloggen
          </button>
        </form>
      </section>
    </main>
  );
}
