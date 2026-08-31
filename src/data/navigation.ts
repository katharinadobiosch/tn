export const navigation = [
  { label: "Hofladen", href: "/hofladen" },
  { label: "Produkte", href: "/produkte" },
  { label: "Verkostung", href: "/verkostung" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Aktuelles", href: "/aktuelles" },
  { label: "Kontakt", href: "/kontakt" },
];

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
