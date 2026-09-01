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
    ? "bg-[#526247] text-[#FAF9F6]"
    : "bg-transparent text-[#24231F]";

  const eyebrowClasses = isDark
    ? "text-[#EAD6BD] before:bg-[var(--page-accent)]"
    : "text-[#526247] before:bg-[var(--page-accent)]";

  const bodyClasses = isDark ? "text-[#E8E1D3]" : "text-[#555149]";
  const containerClasses = isDark
    ? "mx-auto grid max-w-[96rem] items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 md:gap-16 md:px-10 lg:min-h-[max(760px,calc(100svh-7rem))] lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-12 lg:py-16 xl:gap-16"
    : "mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]";
  const titleClasses = isDark
    ? "max-w-[9.5ch] font-heading text-[3.75rem] font-bold leading-[0.9] tracking-[-0.025em] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.5rem] 2xl:text-[9rem]"
    : "max-w-3xl font-heading text-5xl leading-[1.02] md:text-7xl";
  const imageFrameClasses = isDark
    ? "relative min-h-[340px] overflow-hidden sm:min-h-[460px] md:min-h-[560px] lg:min-h-[620px] xl:min-h-[720px]"
    : "relative min-h-[540px] overflow-hidden border border-[#B87935]/25 bg-[#D8D2C6] shadow-[18px_18px_0_rgba(234,214,189,0.35)]";

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <div>
          <p
            className={`mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] before:h-px before:w-8 ${eyebrowClasses}`}
          >
            {eyebrow}
          </p>

          <RevealText>
            <h1 className={titleClasses}>{title}</h1>
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
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover object-[48%_center] saturate-[0.92] contrast-[1.03]"
            />
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
