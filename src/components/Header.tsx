import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-[#F7F4EE]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Talbrennerei Neufra Logo"
            width={160}
            height={80}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="hidden border border-[#1F2F20]/30 px-4 py-2 text-sm md:inline-block">
          Hofladen geöffnet
        </span>
      </div>
    </header>
  );
}
