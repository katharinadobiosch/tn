import Image from "next/image";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
};

export function HeroSection({ eyebrow, title, text, image }: HeroSectionProps) {
  return (
    <section className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#526247]">
          {eyebrow}
        </p>

        <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#555149]">{text}</p>
      </div>

      <div className="relative min-h-[540px] overflow-hidden bg-[#D8D2C6]">
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
