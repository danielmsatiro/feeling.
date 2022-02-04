import { Flex, Text } from "@chakra-ui/react";

export const PhraseCard = ({ frase, author }) => {
  return (
    <Flex
      w={["300px", "320px", "350px", "450px"]}
      bg="yellow.200"
      borderRadius="20px"
      padding="20px"
      margin={["0 0 50px"]}
      flexDirection="column"
    >
      <Flex
        w="100%"
        minH={["150px", "150px", "200px", "300px"]}
        flexDirection={["column", "row", "row", "row"]}
        alignItems={["center"]}
        justifyContent={["flex-start", "flex-start", "flex-end", "flex-end"]}
      >
        <Text
          fontSize={["lg", "xl", "xl", "2xl"]}
          fontWeight="light"
          w={["100%", "75%", "75%", "75%"]}
          textAlign={["left", "left", "right", "right"]}
        >
          {frase}
        </Text>
      </Flex>
      <Flex
        color="orange.500"
        alignItems="center"
        justifyContent={["center", "center", "flex-end", "flex-end"]}
        minH="100px"
      >
        <Text fontSize={["lg", "xl", "xl", "2xl"]} fontWeight="medium">
          {author}
        </Text>
      </Flex>
    </Flex>
  );
};
