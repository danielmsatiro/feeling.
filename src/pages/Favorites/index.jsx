import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header";

import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";
import { MyFavPhrase } from "../../components/Card/MyFavPhrase";

import { motion } from "framer-motion";
import { useEffect } from "react";

const FlexMotion = motion(Flex);
const HeadingMotion = motion(Heading);

export const Favorites = () => {
  const { phrases, loadPhrases } = usePhrases();
  const { user } = useAuth();

  const myFavorites = phrases.filter((phrase) =>
    phrase.users_who_like.some((item) => item.userId === user.id)
  );

  useEffect(() => {
    loadPhrases();
  });

  return (
    <Box
      padding={[
        "0px 20px 40px 20px",
        "0px 40px 40px 40px",
        "0px 40px 40px 40px",
        "0px 40px 40px 40px",
      ]}
    >
      <Header />
      <Flex justifyContent="center">
        <HeadingMotion
          animate={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ x: -50, opacity: 0 }}
          m="40px 0px"
        >
          Frases{" "}
          <Text as="span" color="orange.500">
            Favoritas.
          </Text>
        </HeadingMotion>
      </Flex>

      <FlexMotion
        animate={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ y: 20, opacity: 0 }}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={["40px", "60px", "60px", "60px"]}
      >
        {/* {myFavorites.lenght > 0 ? ( */}
        {myFavorites.map((phrase) => (
          <MyFavPhrase phrase={phrase} key={phrase.id} />
        ))}
      </FlexMotion>
    </Box>
  );
};
