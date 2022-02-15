import { Flex, Heading, Text } from "@chakra-ui/react";
import { usePhrases } from "../../provider/PhrasesContext";
import { MyFavPhrase } from "../../components/Card/MyFavPhrase";

export const GridSearch = () => {
  const { phrases, notFound, contentSearch } = usePhrases();

  return (
    <>
      <Flex justifyContent="center" m="0 20px">
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
        m="0 20px"
      >
        {/* {myFavorites.lenght > 0 ? ( */}
        {phrases.map((phrase) => (
          <MyFavPhrase key={phrase.id} phrase={phrase} />
        ))}
      </Flex>
    </>
  );
};
