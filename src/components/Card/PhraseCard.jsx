import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";

export const PhraseCard = ({ frase, author }) => {
  return (
    <Flex
      w={["300px", "320px", "450px", "450px"]}
      bg="yellow.200"
      borderRadius="20px"
      padding="20px"
      margin={["0 0 50px"]}
      flexDirection="column"
    >
      <Flex
        w="100%"
        minH="150px"
        flexDirection={["column", "row", "row", "row"]}
        alignItems={["center"]}
        justifyContent={["flex-start"]}
      >
        <Text
          fontSize={["xl", "2xl", "2xl", "2xl"]}
          fontWeight="light"
          w={["100%", "75%", "75%", "75%"]}
        >
          {frase}
        </Text>
      </Flex>
      <Flex
        color="orange.500"
        flexDirection={["row", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        minH="100px"
      >
        <Heading size="md" fontWeight="medium">
          {author}
        </Heading>
      </Flex>
    </Flex>
  );
};
