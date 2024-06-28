import AuroraHero from "./aurora-hero";
import CardsGroup from "./cards-group";
import { GlobalBusiness } from "./global-business";

export default function Home() {
  return (
    <div>
      <AuroraHero />
      <br className=" py-32" />
      <CardsGroup />
      <GlobalBusiness />
    </div>
  );
}
