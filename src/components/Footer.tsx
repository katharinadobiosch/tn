import { siteInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F7F4EE] px-6 py-10 text-sm">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <strong>Öffnungszeiten</strong>
          <p>{siteInfo.openingHours}</p>
        </div>

        <div>
          <strong>Standort</strong>
          <p>{siteInfo.address}</p>
        </div>

        <div>
          <strong>Kontakt</strong>
          <p>{siteInfo.phone}</p>
          <p>{siteInfo.email}</p>
        </div>

        <div>
          <strong>Folgen Sie uns</strong>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
}
