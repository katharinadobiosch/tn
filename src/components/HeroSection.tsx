import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { RevealText } from "@/components/RevealText";

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
  variant?: "light" | "dark";
};

export function HeroSection({
  eyebrow,
  title,
  text,
  image,
  actions,
  variant = "light",
}: HeroSectionProps) {
  const isDark = variant === "dark";

  const sectionClasses = isDark
    ? "bg-[#1F2F20] text-[#FAF9F6]"
    : "bg-transparent text-[#24231F]";

  const eyebrowClasses = isDark
    ? "text-[#EAD6BD] before:bg-[#B87935]"
    : "text-[#526247] before:bg-[#B87935]";

  const bodyClasses = isDark ? "text-[#E8E1D3]" : "text-[#555149]";
  const imageFrameClasses = isDark
    ? "relative min-h-[460px] md:min-h-[560px]"
    : "relative min-h-[540px] overflow-hidden border border-[#B87935]/25 bg-[#D8D2C6] shadow-[18px_18px_0_rgba(234,214,189,0.35)]";

  return (
    <section className={sectionClasses}>
      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p
            className={`mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] before:h-px before:w-8 ${eyebrowClasses}`}
          >
            {eyebrow}
          </p>

          <RevealText>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] md:text-7xl">
              {title}
            </h1>
          </RevealText>

          <p className={`mt-8 max-w-xl text-lg leading-8 ${bodyClasses}`}>
            {text}
          </p>
          {actions && (
            <div className="mt-8 flex flex-wrap gap-4">
              {actions.map((action, index) => (
                <ButtonLink
                  key={index}
                  href={action.href}
                  variant={
                    isDark
                      ? action.variant === "secondary"
                        ? "dark"
                        : "light"
                      : action.variant
                  }
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>

        {isDark ? (
          <div className={imageFrameClasses}>
            <div className="absolute inset-x-5 bottom-[-18px] top-8 bg-[#EAD6BD]/20" />
            <div className="absolute bottom-6 left-[-16px] top-[-16px] w-1/2 border-l border-t border-[#B87935]/55" />
            <div className="relative h-full min-h-[460px] overflow-hidden border border-[#EAD6BD]/18 bg-[#2B3A28] shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:min-h-[560px]">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover saturate-[0.92] contrast-[1.03]"
              />
            </div>
          </div>
        ) : (
          <div className={imageFrameClasses}>
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover grayscale-[8%]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
