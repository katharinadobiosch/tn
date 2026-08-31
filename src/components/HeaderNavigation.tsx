"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteImages } from "@/data/images";
import {
  isNavigationItemActive,
  navigation,
} from "@/data/navigation";

type HeaderNavigationProps = {
  shopStatus: "open" | "closed";
};

const linkFocusClasses =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]";

export function HeaderNavigation({ shopStatus }: HeaderNavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="border-b border-neutral-200 bg-[#FAF9F6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={closeMobileMenu}
          className={linkFocusClasses}
        >
          <Image
            src={siteImages.logo}
            alt="Talbrennerei Neufra Logo"
            width={160}
            height={80}
            priority
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-10 text-sm md:flex">
          {navigation.map((item) => {
            const isActive = isNavigationItemActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors duration-200 hover:text-[#526247] ${linkFocusClasses} ${
                  isActive ? "font-medium text-[#526247]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <span className="hidden border border-[#1F2F20]/30 px-4 py-2 text-sm md:inline-block">
          Hofladen {shopStatus === "open" ? "geöffnet" : "geschlossen"}
        </span>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          className={`inline-flex h-11 w-11 items-center justify-center border border-[#1F2F20]/25 text-[#1F2F20] transition-colors duration-200 hover:border-[#B87935] hover:text-[#526247] ${linkFocusClasses} md:hidden`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            {isMobileMenuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="border-t border-[#1F2F20]/12 bg-white md:hidden"
        >
          <div className="mx-auto max-w-7xl divide-y divide-[#1F2F20]/10 px-6 py-2">
            {navigation.map((item) => {
              const isActive = isNavigationItemActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`block py-4 text-base transition-colors duration-200 hover:text-[#526247] ${linkFocusClasses} ${
                    isActive ? "font-medium text-[#526247]" : "text-[#1F2F20]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
