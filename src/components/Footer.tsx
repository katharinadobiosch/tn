import { siteInfo } from "@/data/site";
import { getOpeningHours } from "@/lib/siteSettings";

export async function Footer() {
  const openingHours = await getOpeningHours();

  return (
    <footer className="border-t border-[#1F2F20]/20 bg-white px-6 py-8 text-sm">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <strong>Öffnungszeiten</strong>
          <p>{openingHours}</p>
        </div>

        <div>
          <strong>Standort</strong>
          <p>{siteInfo.address}</p>
        </div>

        <div>
          <strong>Kontakt</strong>
          <p>{siteInfo.phone}</p>
          <a
            href={`mailto:${siteInfo.email}`}
            className="mt-1 block w-fit border-b border-transparent pb-0.5 transition-colors duration-200 hover:border-[#B87935] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
          >
            {siteInfo.email}
          </a>
        </div>

        <div>
          <strong>Folgen Sie uns</strong>

          <div className="mt-3 flex gap-3">
            <a
              href="https://www.instagram.com/talbrennerei_neufra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talbrennerei Neufra auf Instagram öffnen"
              className="flex h-9 w-9 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[#B87935] hover:bg-[#FAF9F6] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/p/Talbrennerei-Neufra-100070884354091/?locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talbrennerei Neufra auf Facebook öffnen"
              className="flex h-9 w-9 items-center justify-center border border-[#24231F]/20 text-[#24231F] transition-colors duration-200 hover:border-[#B87935] hover:bg-[#FAF9F6] hover:text-[#B87935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F2F20]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M14.5 8.5V7.2c0-.6.4-1 1-1h1.3V3.4c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.5-4 4.2v1.1H7.8v3.1h2.6V21h3.3v-9.4h2.7l.4-3.1h-3.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
