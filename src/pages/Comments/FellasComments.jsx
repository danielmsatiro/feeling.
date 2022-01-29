import { Flex, Text } from "@chakra-ui/react";
import { PhraseCard } from "../../components/Card/PhraseCard";
import { CommentsList } from "../../components/Card/CommentsList";

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
        w={["300px", "320px", "450px", "450px"]}
        h={["150px"]}
        fontSize={["3xl"]}
        fontWeight="medium"
        justifyContent={["flex-start"]}
        alignItems={["center"]}
      >
        <Flex
          w={["300px", "320px", "450px", "450px"]}
          fontSize={["3xl"]}
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
      <PhraseCard
        frase="Suba o primeiro degrau com fé. Não é necessário que você veja a
            escada toda. Apenas dê o primeiro passo."
        author="Martin Luther King"
      />
      <CommentsList array={frases} />
    </Flex>
  );
};
