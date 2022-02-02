import { Flex } from "@chakra-ui/react";

import { HomeWelcome } from "./HomeWelcome";
import { HomeHardTimes } from "./HomeHardTimes";
import { HomeAbout } from "./HomeAbout";
import { HomeYourSpace } from "./HomeYourSpace";
import { HomeFindPeople } from "./HomeFindPeople";
import { HomeCreators } from "./HomeCreators";
import { HomeSlogan } from "./HomeSlogan";

export const Home = () => {
  return (
    <Flex flexDirection="column">
      <HomeWelcome />
      <HomeHardTimes />
      <HomeAbout />
      <HomeYourSpace />
      <HomeFindPeople />
      <HomeCreators />
      <HomeSlogan />
    </Flex>
  );
};
