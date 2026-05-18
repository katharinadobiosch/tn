import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  actions?: HeroAction[];
};

export function HeroSection({ eyebrow, title, text, image, actions }: HeroSectionProps) {
  return (
    <section className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#526247] before:h-px before:w-8 before:bg-[#B87935]">
          {eyebrow}
        </p>

        <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#555149]">{text}</p>
        {actions && (
          <div className="mt-8 flex gap-4">
            {actions.map((action, index) => (
              <ButtonLink key={index} href={action.href} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>

      <div className="relative min-h-[540px] overflow-hidden border border-[#B87935]/25 bg-[#D8D2C6] shadow-[18px_18px_0_rgba(234,214,189,0.35)]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover grayscale-[8%]"
        />
      </div>
    </section>
  );
}
