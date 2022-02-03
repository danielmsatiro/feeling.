import { Text, Box, IconButton, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MdQuestionAnswer } from "react-icons/md";
import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";
import { FavoriteCard } from "../../components/Card/FavoriteCard";

export const Favorites = () => {
  const { phrases, deleteMyFavorite } = usePhrases();
  const { user } = useAuth();

  const myFavorites = phrases.filter((phrase) =>
    phrase.users_who_like.some((item) => item.userId === user.id)
  );

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
      <Text
        as="h1"
        fontFamily={"Poppins"}
        fontWeight={"500"}
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        lineHeight={["32px", "32px", "64px", "96px"]}
        padding={["35px 0px", "40px 0px", "50px 0px", "50px 0px"]}
        textAlign={"left"}
      >
        Frases{" "}
        <Text as="abbr" color="orange.500">
          Favoritas.
        </Text>
      </Text>

      <Flex
        justifyContent={"center"}
        gap={["40px", "60px", "60px", "60px"]}
        flexWrap={"wrap"}
      >
        {myFavorites.map((phrase) => (
          <FavoriteCard key={phrase.id} phrase={phrase} />
        ))}
      </Flex>
      {/* ) : (
<Text
fontSize="xl"
fontWeight="light"
textAlign={"center"}
padding={"0 5%"}
>
Você ainda não favoritou nenhuma frase.
</Text>
)} */}
    </Box>
  );
};
