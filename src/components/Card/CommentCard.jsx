import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";

export const CommentCard = ({ comment, autor }) => {
  return (
    <Flex
      w={["300px", "320px", "450px", "450px"]}
      bg="yellow.200"
      borderRadius="20px"
      padding="20px"
      mt={["30px"]}
      flexDirection="column"
    >
      <Flex
        color="orange.500"
        flexDirection={["row", "row", "row"]}
        alignItems="center"
        justifyContent="flex-start"
        minH="100px"
      >
        <Flex
          as="button"
          cursor="pointer"
          fontSize={["30px", "40px", "25px", "30px"]}
          w={["50px"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          // onClick={salir}
        >
          <MdQuestionAnswer />
        </Flex>
        <Heading size="md" fontWeight="medium" textAlign="left">
          {autor}
        </Heading>
      </Flex>
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
          {comment}
        </Text>
      </Flex>
    </Flex>
  );
};
