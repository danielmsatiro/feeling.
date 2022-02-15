import { Flex, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../../provider/AuthContext";

export const CommentCard = ({ comment, userId }) => {
  const { users } = useAuth();

  return (
    <Flex
      w={["300px", "320px", "600px", "750px"]}
      bg="yellow.200"
      borderRadius="15px"
      transition={["500ms"]}
      border="2px"
      borderColor="yellow.500"
      mt={["30px"]}
      flexDirection="column"
    >
      <Flex
        color="orange.500"
        bgColor="white"
        borderRadius="12px 12px 0 0"
        padding="10px"
        flexDirection={["row", "row", "row"]}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Heading size="md" fontWeight="medium" textAlign="left">
          {users?.find(({ id }) => id === userId).name}
        </Heading>
      </Flex>
      <Flex
        w="100%"
        padding="20px"
        flexDirection={["column", "row", "row", "row"]}
        alignItems={["center"]}
        justifyContent={["flex-start"]}
      >
        <Text
          fontWeight="light"
          fontSize="lg"
          w={["100%", "75%", "75%", "75%"]}
        >
          {comment}
        </Text>
      </Flex>
    </Flex>
  );
};
