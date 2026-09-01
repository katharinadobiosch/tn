import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Talbrennerei Neufra.",
};

const sectionClassName = "border-t border-[#1F2F20]/15 pt-10";

const headingClassName = "font-heading text-3xl leading-tight text-[#1F2F20]";

const subheadingClassName = "font-heading text-xl text-[#1F2F20]";

const textClassName = "mt-4 leading-7 text-[#1F2F20]/75";

export default function DatenschutzPage() {
  return (
    <main className="talbrennerei-datenschutz">
      <section className="bg-[#FAF9F6] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#526247]">
            Rechtliches
          </p>

          <h1 className="font-heading text-4xl leading-tight text-[#1F2F20] md:text-5xl">
            Datenschutz
          </h1>

          <div className="mt-12 max-w-3xl space-y-14">
            <section className={sectionClassName}>
              <h2 className={headingClassName}>
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className={`mt-8 ${subheadingClassName}`}>
                Allgemeine Hinweise
              </h3>

              <p className={textClassName}>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>2. Verantwortliche Stelle</h2>

              <p className={textClassName}>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>

              <address className="mt-5 not-italic leading-7 text-[#1F2F20]/75">
                Talbrennerei Neufra
                <br />
                Talstr. 25
                <br />
                72419 Neufra
                <br />
                Deutschland
                <br />
                <br />
                Telefon:{" "}
                <a
                  href="tel:+497574935301"
                  className="underline decoration-[#1F2F20]/30 underline-offset-4 transition-colors hover:text-[#526247]"
                >
                  +49 7574 935301
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@talbrennerei-neufra.de"
                  className="underline decoration-[#1F2F20]/30 underline-offset-4 transition-colors hover:text-[#526247]"
                >
                  info@talbrennerei-neufra.de
                </a>
              </address>

              <p className={textClassName}>
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten
                entscheidet.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>3. Hosting</h2>

              <p className={textClassName}>
                Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
                Website werden technisch erforderliche Daten verarbeitet, die
                für die Bereitstellung und Sicherheit der Website notwendig
                sind.
              </p>

              <p className={textClassName}>
                Dabei können insbesondere IP-Adresse, Datum und Uhrzeit des
                Zugriffs, aufgerufene Seite beziehungsweise Datei,
                Browserinformationen, Betriebssystem und technische
                Verbindungsdaten verarbeitet werden.
              </p>

              <p className={textClassName}>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO. Unser berechtigtes Interesse besteht in der sicheren,
                stabilen und technisch einwandfreien Bereitstellung dieser
                Website.
              </p>

              <p className={textClassName}>
                Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
                91723, USA.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>4. Server- und Zugriffsdaten</h2>

              <p className={textClassName}>
                Beim Besuch unserer Website werden durch den Hosting-Anbieter
                automatisch Informationen erfasst. Diese Daten sind technisch
                erforderlich, damit die Website an Ihr Endgerät ausgeliefert
                werden kann und um die Sicherheit und Stabilität des Angebots zu
                gewährleisten.
              </p>

              <p className={textClassName}>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen oder
                eine Nutzung zur Erstellung von Nutzerprofilen erfolgt durch uns
                nicht.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>5. Cookies</h2>

              <p className={textClassName}>
                Die öffentlich zugänglichen Bereiche dieser Website verwenden
                nach aktuellem Stand keine Cookies zu Werbe-, Tracking- oder
                Analysezwecken.
              </p>

              <h3 className={`mt-8 ${subheadingClassName}`}>
                Administrationsbereich
              </h3>

              <p className={textClassName}>
                Für den geschützten Administrationsbereich wird ein technisch
                notwendiges Session-Cookie verwendet. Dieses Cookie dient
                ausschließlich dazu, eine erfolgreiche Anmeldung am
                Administrationsbereich während der Nutzung der Website
                aufrechtzuerhalten.
              </p>

              <p className={textClassName}>
                Die Verwendung dieses Cookies ist für die Funktion des
                Administrationsbereichs erforderlich. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>
                6. Datenbank und Administrationsbereich
              </h2>

              <p className={textClassName}>
                Für die Verwaltung von Website-Inhalten, beispielsweise
                Öffnungszeiten und Neuigkeiten, wird eine Datenbank verwendet.
                Die Datenbank wird über den Dienst Neon bereitgestellt.
              </p>

              <p className={textClassName}>
                In dieser Datenbank werden die für den Betrieb der Website
                erforderlichen Inhalts- und Verwaltungsdaten gespeichert. Eine
                öffentliche Nutzerregistrierung oder das Anlegen von
                Kundenkonten findet auf dieser Website nicht statt.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>7. Speicherung von Bildern</h2>

              <p className={textClassName}>
                Bilder für Neuigkeiten und andere Inhalte können über den
                geschützten Administrationsbereich hochgeladen werden. Für die
                technische Speicherung dieser Dateien wird Vercel Blob
                verwendet.
              </p>

              <p className={textClassName}>
                Es sollten über diesen Bereich ausschließlich Bilder und Inhalte
                veröffentlicht werden, für deren Veröffentlichung die
                erforderlichen Rechte vorliegen.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>8. Kontaktaufnahme</h2>

              <p className={textClassName}>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die
                von Ihnen übermittelten Angaben einschließlich der von Ihnen
                angegebenen Kontaktdaten zum Zweck der Bearbeitung Ihrer Anfrage
                und für mögliche Anschlussfragen verarbeitet.
              </p>

              <p className={textClassName}>
                Erfolgt Ihre Anfrage im Zusammenhang mit einem Vertrag oder
                einer vorvertraglichen Maßnahme, ist Art. 6 Abs. 1 lit. b DSGVO
                die Rechtsgrundlage. In allen anderen Fällen erfolgt die
                Verarbeitung auf Grundlage unseres berechtigten Interesses an
                einer sachgerechten Bearbeitung Ihrer Anfrage gemäß Art. 6 Abs.
                1 lit. f DSGVO.
              </p>

              <p className={textClassName}>
                Die übermittelten Daten werden gelöscht, sobald der Zweck ihrer
                Speicherung entfällt und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>
                9. Links zu sozialen Netzwerken
              </h2>

              <p className={textClassName}>
                Auf unserer Website befinden sich Links zu unseren Auftritten
                bei Instagram und Facebook. Dabei handelt es sich ausschließlich
                um externe Links.
              </p>

              <p className={textClassName}>
                Beim bloßen Besuch unserer Website wird dadurch keine Verbindung
                zu den Servern dieser sozialen Netzwerke hergestellt. Erst wenn
                Sie einen solchen Link anklicken, verlassen Sie unsere Website
                und es gelten die Datenschutzbestimmungen des jeweiligen
                Anbieters.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>10. Ihre Rechte</h2>

              <p className={textClassName}>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf Auskunft über Ihre gespeicherten
                personenbezogenen Daten, deren Herkunft und Empfänger sowie den
                Zweck der Datenverarbeitung.
              </p>

              <p className={textClassName}>
                Darüber hinaus können Ihnen insbesondere Rechte auf
                Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit und Widerspruch gegen die Verarbeitung
                zustehen.
              </p>

              <p className={textClassName}>
                Sofern eine Verarbeitung auf Ihrer Einwilligung beruht, können
                Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>
                11. Beschwerderecht bei einer Aufsichtsbehörde
              </h2>

              <p className={textClassName}>
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
                personenbezogenen Daten gegen die Datenschutz-Grundverordnung
                verstößt, steht Ihnen ein Beschwerderecht bei einer zuständigen
                Datenschutzaufsichtsbehörde zu.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>
                12. Aktualität dieser Datenschutzerklärung
              </h2>

              <p className={textClassName}>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                wenn sich die Website, die eingesetzten Dienste oder die
                gesetzlichen Anforderungen ändern.
              </p>

              <p className="mt-4 text-sm text-[#1F2F20]/55">
                Stand: September 2026
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
