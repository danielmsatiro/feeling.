import { Text, Box, IconButton, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MdQuestionAnswer } from "react-icons/md";
import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";

export const Favorites = () => {
  const { phrases } = usePhrases();
  const { user } = useAuth();

  const myFavorites = phrases.filter((phrase) =>
    phrase.users_who_like.some((item) => item.userId === user.id)
  );

  return (
    <>
      <Header />
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
        Frases{" "}
        <Text as="abbr" color="orange.500">
          Favoritas.
        </Text>
      </Text>

      {/* {myFavorites.lenght > 0 ? ( */}
      {myFavorites.map((phrase) => (
        <Flex
          key={phrase.id}
          justifyContent={"center"}
          gap={["40px", "60px", "60px", "60px"]}
        >
          <Box
            w={["85%", "400px", "401px", "504px"]}
            h={["100%", "100%", "100%", "100%"]}
            bg="yellow.200"
            direction={"column"}
            align={"center"}
            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
            borderRadius={"20px"}
          >
            <Flex justify={"flex-end"} margin={"10px 10px 0 0"}>
              <IconButton
                bg={"transparent"}
                w={["30px", "35px", "40px", "40px"]}
                h={["30px", "35px", "40px", "40px"]}
                color="orange.500"
                icon={<MdQuestionAnswer size="100%" />}
                aria-label="Ver Comentários"
                onClick={() => {
                  /*abre os comentários*/
                }}
              />
            </Flex>
            <Text
              colorScheme={""}
              fontSize={["2xl", "3xl", "3xl", "4xl"]}
              fontWeight={"300"}
              fontFamily={"Poppins"}
              lineHeight={["40px", "40px", "40px", "54px"]}
              textAlign={"center"}
              fontStyle={"normal"}
              padding={["10%", "7%", "7%", "6%"]}
            >
              <Box>{phrase.phraseText}</Box>
            </Text>
            <Text
              color="orange.500"
              fontWeight={"500"}
              fontSize={["2xl", "3xl", "3xl", "4xl"]}
              lineHeight={["40px", "40px", "40px", "54px"]}
              textAlign={"center"}
              paddingBottom={"7%"}
            >
              <Box>{phrase.phraseAuthor}</Box>
            </Text>
          </Box>
        </Flex>
      ))}
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
    </>
  );
};
