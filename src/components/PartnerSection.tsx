import Image from "next/image";
import { RevealText } from "@/components/RevealText";

const partners = [
  {
    name: "Bärenhof Gemüse",
    logo: "/partner/baerenhof-gemuese.png",
  },
  {
    name: "Birkhof",
    logo: "/partner/birkhof.png",
  },
  {
    name: "Fink's Hofladen",
    logo: "/partner/finks-hofladen.png",
  },
  {
    name: "Herre Schröger",
    logo: "/partner/herre-schroeger.png",
  },
  {
    name: "Lautertal Eis",
    logo: "/partner/lauertal-eis.png",
  },
  {
    name: "Spargelbauer Landerer",
    logo: "/partner/spargelbauer-landerer.png",
  },
  {
    name: "Spross & Spore",
    logo: "/partner/spross-spore.png",
  },
];

export function PartnerSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B87935] before:h-px before:w-8 before:bg-[#B87935]">
          Partner
        </p>

        <RevealText>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Regionale Partner und befreundete Betriebe.
          </h2>
        </RevealText>

        <p className="mt-6 text-lg leading-8 text-[#555149]">
          Wir arbeiten mit ausgewählten Betrieben aus der Region zusammen und
          teilen den Anspruch an Qualität, Herkunft und ehrliche Herstellung.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <article
            key={partner.name}
            className="flex min-h-40 items-center justify-center border border-[#24231F]/15 bg-white/40 p-8 transition-colors duration-200 hover:border-[#B87935]/60 hover:bg-[#EAD6BD]/25"
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} Logo`}
              width={220}
              height={120}
              className="max-h-24 w-auto object-contain"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
