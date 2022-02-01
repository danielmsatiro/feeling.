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
        fontSize={"6xl"}
        lineHeight={"96px"}
        padding={"70px"}
      >
        Frases{" "}
        <Text as="abbr" color="orange.500">
          Favoritas.
        </Text>
      </Text>
      <Flex paddingLeft={"80px"}>
        <Box
          w="401px"
          h="595px"
          bg="yellow.200"
          direction={"column"}
          align={"center"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          borderRadius={"20px"}
        >
          <Flex justify={"flex-end"}>
            <IconButton
              bg={"transparent"}
              w={"40px"}
              h={"40px"}
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
            fontSize={"4xl"}
            fontWeight={"300"}
            fontFamily={"Poppins"}
            lineHeight={"54px"}
            textAlign={"center"}
            fontStyle={"normal"}
            padding={"30px"}
          >
            {myFavorites.map((phrase) => (
              <Box key={phrase.id}>{phrase.phraseText}</Box>
            ))}
          </Text>
          <Text
            color="orange.500"
            fontWeight={"500"}
            fontSize={"4xl"}
            lineHeight={"54px"}
            textAlign={"center"}
          >
            {myFavorites.map((phrase) => (
              <Box key={phrase.id}>{phrase.phraseAuthor}</Box>
            ))}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
