import { HeaderNavigation } from "@/components/HeaderNavigation";
import { getShopStatus } from "@/lib/siteSettings";

export async function Header() {
  const shopStatus = await getShopStatus();

  return <HeaderNavigation shopStatus={shopStatus} />;
}
