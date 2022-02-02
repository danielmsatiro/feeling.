import { Flex, Text } from "@chakra-ui/react";
import { FavoriteCard } from "../../components/Card/FavoriteCard";
import { useAuth } from "../../provider/AuthContext";
import { usePhrases } from "../../provider/PhrasesContext";

export const GridSearch = () => {
  const { phrases, notFound, contentSearch } = usePhrases();
  const { user } = useAuth();

  return (
    <>
      <Text
        as="h1"
        fontFamily={"Poppins"}
        fontWeight={"500"}
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        lineHeight={["32px", "32px", "64px", "96px"]}
        padding={["35px", "40px", "50px", "50px"]}
        textAlign={"left"}
      >
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
      </Text>
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
          <FavoriteCard key={phrase.id} phrase={phrase} />
        ))}
      </Flex>
    </>
  );
};
