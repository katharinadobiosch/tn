import Image from "next/image";
import { RevealText } from "@/components/RevealText";

const partners = [
  {
    name: "Bärenhof Gemüse",
    logo: "/partner/baerenhof-gemuese.png",
    url: "http://www.bärenhof-gemüse.de/",
  },
  {
    name: "Birkhof",
    logo: "/partner/birkhof.png",
    url: "http://www.gestuet-birkhof.com/",
  },
  {
    name: "Fink's Hofladen",
    logo: "/partner/finks-hofladen.png",
    url: "https://finks-hofladen.de/",
  },
  {
    name: "Herre Schröger",
    logo: "/partner/herre-schroeger.png",
    url: "https://herre-schroeger.de/",
  },
  {
    name: "Lautertal Eis",
    logo: "/partner/lauertal-eis.png",
    url: "https://www.lautertal-eis.blog/",
  },
  {
    name: "Spargelbauer Landerer",
    logo: "/partner/spargelbauer-landerer.png",
    url: "http://www.spargelbauer-landerer.de/",
  },
  {
    name: "Spross & Spore",
    logo: "/partner/spross-spore.png",
    url: "https://spross-spore.de/",
  },
  {
    name: "Wildhof Hildegrund",
    logo: "/partner/wildhof-hildegrund.jpeg",
    url: "https://wildhof-hildegrund.de/",
  },
];

export function PartnerSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-14 border-y border-[#1F2F20]/10 py-20 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
            Partner
          </p>

          <RevealText>
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Regionale Partner und befreundete Betriebe.
            </h2>
          </RevealText>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#555149]">
            Wir arbeiten mit ausgewählten Betrieben aus der Region zusammen und
            teilen den Anspruch an Qualität, Herkunft und ehrliche Herstellung.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group border-t border-[#1F2F20]/12 pt-6"
            >
              <div className="flex h-20 items-center">
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      width={220}
                      height={120}
                      className="max-h-16 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={220}
                    height={120}
                    className="max-h-16 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#526247]">
                {partner.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
