import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { PhraseCard } from "../../components/Card/PhraseCard";
import { CommentsList } from "../../components/Card/CommentsList";
import jumping from "../../assets/jumping.svg";

export const FellasComments = () => {
  const frases = [
    {
      id: "0",
      text: "Be kind whenever possible. It is always possible.",
      author: "Dalai Lama",
      comments: [],
      users_who_like: [],
    },
    {
      id: "1",
      text: "Talk doesn't cook rice.",
      author: "Chinese proverb",
      comments: [],
      users_who_like: [],
    },
    {
      id: "2",
      text: "He is able who thinks he is able.",
      author: "Buddha",
      comments: [],
      users_who_like: [],
    },
    {
      id: "3",
      text: "A goal without a plan is just a wish.",
      author: "Larry Elder",
      comments: [],
      users_who_like: [],
    },
  ];

  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex
        w={["300px", "320px", "600px", "750px"]}
        h={["150px", "150px", "150px", "200px"]}
        justifyContent={["flex-start"]}
        alignItems={["center"]}
      >
        <Flex
          w={["300px", "320px", "450px", "450px"]}
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          fontWeight="medium"
          flexWrap={["wrap"]}
          justifyContent={["flex-start"]}
          alignItems={["center"]}
        >
          <Text pr={["7px"]} color="orange.500">
            Comentários
          </Text>
          <Text>da Galera</Text>
          <Text color="orange.500">!</Text>
        </Flex>
      </Flex>
      <Flex
        w={["0", "0", "600px", "750px"]}
        justify={["center", "center", "flex-end", "flex-end"]}
        pos="relative"
      >
        <Flex
          display={["none", "none", "flex", "flex"]}
          pos="absolute"
          top="0"
          left="0"
          zIndex={1}
        >
          <Image
            src={jumping}
            alt="jumping"
            h="auto"
            w={["0", "0", "400px", "450px"]}
          />
        </Flex>
        <Box>
          <PhraseCard
            frase="Suba o primeiro degrau com fé. Não é necessário que você veja a
            escada toda. Apenas dê o primeiro passo."
            author="Martin Luther King"
            pos="absolute"
            top="0"
            right="0"
            zIndex={0}
          />
        </Box>
      </Flex>

      <CommentsList array={frases} />
    </Flex>
  );
};
