import { Text, Box, IconButton, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MdQuestionAnswer } from "react-icons/md";
import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";
import { MyFavPhrase } from "../../components/Card/MyFavPhrase"
import { FavoriteCard } from "../../components/Card/FavoriteCard";

export const Favorites = () => {
  const { phrases } = usePhrases();
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
        justifyContent={""}
        flexWrap={"wrap"}
        gap={["40px", "60px", "60px", "60px"]}
      >
        {/* {myFavorites.lenght > 0 ? ( */}
        {myFavorites.map((phrase) => (
              <MyFavPhrase phrase={phrase}/>
        ))}
      </Flex>
    </Box>
  );
};

//RENDERIZAÇÃO CONDICIONAL
/* ) : (
<Text
fontSize="xl"
fontWeight="light"
textAlign={"center"}
padding={"0 5%"}
>
Você ainda não favoritou nenhuma frase.
</Text>
)} */

//CARD
        // <Flex
        //   key={phrase.id}
        //   justifyContent={["center", "space-between", "space-between", "space-between"]}
        //   gap={["40px", "60px", "60px", "60px"]}
        // >
        //   <Box
        //     w={["300px", "300px", "300px", "300px"]}
        //     h={["100%", "100%", "100%", "100%"]}
        //     bg="yellow.200"
        //     direction={"column"}
        //     align={"center"}
        //     borderRadius={"20px"}
        //     padding="10px"
        //   >
        //     <Flex justify={"flex-end"} margin={"10px 10px 0 0"}>
        //       <IconButton
        //         bg={"transparent"}
        //         w={["20px", "30px", "30px", "30px"]}
        //         h={["20px", "30px", "30px", "30px"]}
        //         color="orange.500"
        //         icon={<MdQuestionAnswer size="100%" />}
        //         aria-label="Ver Comentários"
        //         onClick={() => {
        //           //Abre aba de comentários
        //           deleteMyFavorite(phrase.id)
        //         }}
        //       />
        //     </Flex>
        //     <Text
        //       colorScheme={""}
        //       fontSize={["md", "lg", "lg", "xl"]}
        //       fontWeight={"300"}
        //       fontFamily={"Poppins"}
        //       lineHeight={["40px", "40px", "40px", "54px"]}
        //       textAlign={"left"}
        //       fontStyle={"normal"}
        //       padding={["10%", "7%", "7%", "6%"]}
        //     >
        //       <Box>{phrase.phraseText}</Box>
        //     </Text>
        //     <Text
        //       color="orange.500"
        //       fontWeight={"500"}
        //       fontSize={["md", "lg", "lg", "xl"]}
        //       lineHeight={["40px", "40px", "40px", "54px"]}
        //       textAlign={"right"}
        //       mr="15px"
        //       paddingBottom={"7%"}
        //     >
        //       <Box>{phrase.phraseAuthor}</Box>
        //     </Text>
        //   </Box>
        // </Flex>
