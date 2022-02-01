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
        textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        fontFamily={"Poppins"}
        fontWeight={"500"}
        fontSize={["3xl", "4xl", "5xl", "6xl"]}
        lineHeight={["32px", "32px", "64px", "96px"]}
        padding={["35px", "40px", "50px", "50px"]}
        textAlign={"center"}
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
          <FavoriteCard phrase={phrase} />
        ))}
      </Flex>
    </>
  );
};
