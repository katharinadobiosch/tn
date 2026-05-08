export default function UeberUnsPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#24231F]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
          Über uns
        </p>

        <h1 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
          Aus Streuobstwiesen, Wald und handwerklicher Verarbeitung.
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Die Geschichte der Talbrennerei beginnt mit einer Streuobstwiese.
        </h2>

        <div className="space-y-6 text-lg leading-8 text-[#555149]">
          <p>
            Im Jahr 2008 kaufte Firmengründer Detlef Zamzow zusammen mit seiner
            Ehefrau Annemarie seine erste Streuobstwiese in Dettingen/Erms.
            Schnell war sein Interesse geweckt und nach und nach kamen weitere
            Grundstücke dazu.
          </p>

          <p>
            Heute bewirtschaftet das Unternehmen rund 15 Hektar eigene
            Obstwiesen und Wälder. Durch den reichlichen Ertrag an Obst musste
            schnell eine Lösung zur Weiterverarbeitung gefunden werden.
          </p>

          <p>
            Mit der Gründung einer Brennerei mit Direktvermarktung am Ende der
            Talstraße in Neufra/Hohenzollern entstand die Talbrennerei.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2">
        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Kreislauf
          </p>
          <h2 className="font-serif text-4xl">Nichts wird verschwendet.</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Produkte erster Klasse werden als Tafelobst im Hofladen vermarktet.
            Das übrige Obst kommt in die hauseigene Brennerei zur
            Weiterverarbeitung oder wird im familieneigenen Damwild-Gehege
            verfüttert.
          </p>
        </article>

        <article className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Handarbeit
          </p>
          <h2 className="font-serif text-4xl">Schonende Ernte von Hand.</h2>
          <p className="mt-6 leading-7 text-[#555149]">
            Die Obstbäume und Plantagen werden mit Begeisterung und Engagement
            gepflegt. Die Ernte erfolgt mit geschultem Auge und schonend von
            Hand.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="border-t border-[#24231F]/15 pt-10">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#526247]">
            Im Haus
          </p>
          <h2 className="font-serif text-4xl">Außerdem bei uns</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="bg-white/40 p-8">
              <h3 className="font-serif text-3xl">Home made by Uli Keck</h3>
              <p className="mt-4 text-[#555149]">Deko für Ihr Zuhause.</p>
            </article>

            <article className="bg-white/40 p-8">
              <h3 className="font-serif text-3xl">Sabine Daikeler</h3>
              <p className="mt-4 text-[#555149]">Motorsägenschnitzereien.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
