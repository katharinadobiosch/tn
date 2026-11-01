import { HeaderNavigation } from "@/components/HeaderNavigation";
import {
  getOpeningHoursSchedule,
  isShopOpenNow,
} from "@/lib/siteSettings";

export async function Header() {
  const openingHoursSchedule = await getOpeningHoursSchedule();
  const initialShopStatus = isShopOpenNow(openingHoursSchedule)
    ? "open"
    : "closed";

  return (
    <HeaderNavigation
      openingHoursSchedule={openingHoursSchedule}
      initialShopStatus={initialShopStatus}
    />
  );
}
