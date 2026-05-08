export default function VerkostungPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Verkostung
        </p>

        <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
          Brennerstüble, Verkostungen und Feiern in Neufra.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#555149]">
          In schwäbisch gemütlicher Atmosphäre können Sie Schnaps- und
          Likörverkostungen genießen oder das Brennerstüble für Feiern mieten.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Verkostung
          </p>
          <h2 className="font-serif text-4xl">Gemeinsam genießen.</h2>

          <p className="mt-6 leading-7 text-[#555149]">
            Zusammen mit Freunden, Kollegen oder Gruppen verbringen Sie schöne
            Stunden im Brennerstüble.
          </p>

          <ul className="mt-8 space-y-3 text-[#555149]">
            <li>Junggesellenabschiede</li>
            <li>Seniorenausflüge</li>
            <li>Vereins- oder Betriebsausflüge</li>
          </ul>
        </article>

        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Vermietung
          </p>
          <h2 className="font-serif text-4xl">Location Brennerstüble.</h2>

          <p className="mt-6 leading-7 text-[#555149]">
            Das moderne, gut ausgestattete Brennerstüble bietet für ca. 60
            Personen Platz zum Feiern und Tanzen. Parkmöglichkeiten sind vor dem
            Haus vorhanden, alle Eingänge und Toiletten sind barrierefrei.
          </p>

          <p className="mt-8 border-t border-[#24231F]/15 pt-6 text-lg">
            Preis Vermietung: <strong>350,00 EUR</strong> inkl. MwSt. und
            Endreinigung.
          </p>
        </article>
      </section>
    </main>
  );
}
