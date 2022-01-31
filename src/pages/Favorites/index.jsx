import { Text, Box, IconButton, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MdQuestionAnswer } from "react-icons/md";
import { api } from "../../services/api";
import { useState } from "react";

export const Favorites = () => {
  const [favorites, setFavorites] = useState(async () => {
    const response = await api.get(`/favorite`).then;
    setFavorites(response.data);
    console.log(favorites);
  }, []);


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
      >
        Frases Favoritas.
      </Text>
      <Flex>
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
            {/* {favorites.map((el) => {
              {
                el.phrase_text;
              }
            })} */}
            Suba o primeiro degrau com fé. Não é necessário que você veja a
            escada toda. Apenas dê o primeiro passo.
          </Text>
          <Text
            color="orange.500"
            fontWeight={"500"}
            fontSize={"4xl"}
            lineHeight={"54px"}
            textAlign={"center"}
          >
            {/* {favorites.map((el) => {
              {
                el.phrase_author;
              }
            })} */}
            Martin Luther King
          </Text>
        </Box>
      </Flex>
    </>
  );
};
