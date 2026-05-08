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
  const variants = {
    primary: "bg-[#1F2F20] text-white",
    secondary: "border border-[#1F2F20] text-[#1F2F20]",
    dark: "border border-[#B8C0A6] text-[#B8C0A6]",
  };

  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 text-sm ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
