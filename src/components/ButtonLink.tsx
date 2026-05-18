import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]";

  const variants = {
    primary: "bg-[#1F2F20] text-white hover:bg-[#B87935] active:bg-[#8F5C29]",
    secondary:
      "border border-[#1F2F20]/40 text-[#1F2F20] hover:border-[#B87935]/70 hover:bg-[#EAD6BD]/35 active:border-[#8F5C29] active:bg-[#EAD6BD]/55",
    dark: "border border-[#B8C0A6] text-[#B8C0A6] hover:bg-[#B8C0A6] hover:text-[#24231F] active:bg-white active:text-[#24231F]",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
