export default function ImpressumPage() {
  return (
    <main>
      <section className="bg-[#FAF9F6] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#526247]">
            Rechtliches
          </p>

          <h1 className="font-heading text-4xl leading-tight text-[#1F2F20] md:text-5xl">
            Impressum
          </h1>

          <div className="mt-12 max-w-2xl border-t border-[#1F2F20]/15 pt-8">
            <h2 className="font-heading text-2xl text-[#1F2F20]">
              Anbieterkennzeichnung
            </h2>

            <p className="mt-4 leading-7 text-[#1F2F20]/75">
              Die Angaben gemäß § 5 DDG werden derzeit ergänzt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
