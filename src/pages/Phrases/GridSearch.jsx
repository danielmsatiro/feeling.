import { Flex, Heading, Text } from "@chakra-ui/react";
import { usePhrases } from "../../provider/PhrasesContext";
import { SearchCard } from "../../components/Card/SearchCard";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const GridSearch = () => {
  const { phrases, notFound, contentSearch } = usePhrases();

  return (
    <FlexMotion
      animate={{ y: [50, 0], opacity: [0, 1] }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ y: 50, opacity: 0 }}
      flexDirection="column"
    >
      <Flex justifyContent="center">
        <Heading m="40px 0px" textAlign={"left"}>
          Pesquisando por:{" "}
          {!contentSearch ? (
            <Text as="abbr" color="orange.500">
              todas as frases...
            </Text>
          ) : (
            <Text as="abbr" color="orange.500">
              "{contentSearch}"
            </Text>
          )}
        </Heading>
      </Flex>
      {notFound && (
        <Text textAlign={"center"}>
          Não foram encontradas conrrespondências
        </Text>
      )}
      <Flex
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={["40px", "60px", "60px", "60px"]}
      >
        {/* {myFavorites.lenght > 0 ? ( */}
        {phrases.map((phrase) => (
          <SearchCard key={phrase.id} phrase={phrase} />
        ))}
      </Flex>
    </FlexMotion>
  );
};
