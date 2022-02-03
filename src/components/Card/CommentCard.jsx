import { Flex, Heading, Text } from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";
import { useAuth } from "../../provider/AuthContext";

export const CommentCard = ({ comment, userId }) => {
  const { users } = useAuth();

  return (
    <Flex
      w={["300px", "320px", "600px", "750px"]}
      bg="yellow.200"
      borderRadius="20px"
      transition={["500ms"]}
      _hover={{ border: "2px", borderColor: "orange.500" }}
      padding="20px"
      mt={["30px"]}
      flexDirection="column"
    >
      <Flex
        color="orange.500"
        flexDirection={["row", "row", "row"]}
        alignItems="center"
        justifyContent="flex-start"
        minH="50px"
      >
        <Flex
          as="button"
          cursor="pointer"
          fontSize={["30px", "40px", "25px", "30px"]}
          w={["50px"]}
          justifyContent={["center"]}
          alignItems={["center"]}
          // onClick={}
        >
          <MdQuestionAnswer />
        </Flex>
        <Heading size="md" fontWeight="medium" textAlign="left">
          {users.find(({ id }) => id === userId).name}
        </Heading>
      </Flex>
      <Flex
        w="100%"
        minH="80px"
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
