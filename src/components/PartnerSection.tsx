import Image from "next/image";
import { RevealText } from "@/components/RevealText";

const partners = [
  {
    name: "Bärenhof Gemüse",
    logo: "/images/partner/baerenhof-gemuese.png",
    url: "http://www.bärenhof-gemüse.de/",
  },
  {
    name: "Birkhof",
    logo: "/images/partner/birkhof.png",
    url: "http://www.gestuet-birkhof.com/",
  },
  {
    name: "Fink's Hofladen",
    logo: "/images/partner/finks-hofladen.png",
    url: "https://finks-hofladen.de/",
  },
  {
    name: "Herre Schröger",
    logo: "/images/partner/herre-schroeger.png",
    url: "https://herre-schroeger.de/",
  },
  {
    name: "Lautertal Eis",
    logo: "/images/partner/lauertal-eis.png",
    url: "https://www.lautertal-eis.blog/",
  },
  {
    name: "Spargelbauer Landerer",
    logo: "/images/partner/spargelbauer-landerer.png",
    url: "http://www.spargelbauer-landerer.de/",
  },
  {
    name: "Spross & Spore",
    logo: "/images/partner/spross-spore.png",
    url: "https://spross-spore.de/",
  },
  {
    name: "Wildhof Hildegrund",
    logo: "/images/partner/wildhof-hildegrund.jpeg",
    url: "https://wildhof-hildegrund.de/",
  },
];

export function PartnerSection() {
  return (
    <section className="px-6 py-16 talbrennerei-partner-section md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
              Partner
            </p>

            <RevealText>
              <h2 className="max-w-xl font-heading text-5xl leading-[1.02] text-[#1F2F20] md:text-6xl">
                Regionale Partner und befreundete Betriebe.
              </h2>
            </RevealText>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#555149]">
              Wir arbeiten mit ausgewählten Betrieben aus der Region zusammen
              und teilen den Anspruch an Qualität, Herkunft und ehrliche
              Herstellung.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-16 sm:grid-cols-3 lg:gap-x-14 lg:gap-y-20">
            {partners.map((partner) => (
              <article key={partner.name} className="group">
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
                >
                  <div className="flex h-28 items-center justify-start">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      width={240}
                      height={140}
                      className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#526247]">
                    {partner.name}
                  </p>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
