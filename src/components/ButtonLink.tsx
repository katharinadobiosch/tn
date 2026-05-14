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
    primary: "bg-[#1F2F20] text-white hover:bg-[#2F432F] active:bg-[#162417]",
    secondary:
      "border border-[#1F2F20]/40 text-[#1F2F20] hover:border-[#1F2F20] hover:bg-[#1F2F20] hover:text-white active:bg-[#162417] active:text-white",
    dark: "border border-[#B8C0A6] text-[#B8C0A6] hover:bg-[#B8C0A6] hover:text-[#24231F] active:bg-white active:text-[#24231F]",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
