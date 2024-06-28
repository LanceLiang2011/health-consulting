import AuroraHero from "./home-components/aurora-hero";
import CardsGroup from "./home-components/cards-group";
import { GlobalBusiness } from "./home-components/global-business";
import Services from "./home-components/services";
import TeamMembers from "./home-components/team-members";

export default function Home() {
  return (
    <div>
      <AuroraHero />
      <br className=" py-32" />
      <CardsGroup />
      <GlobalBusiness />
      <Services />
      <TeamMembers />
    </div>
  );
}
