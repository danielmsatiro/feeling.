import { Flex, Text } from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";
import { SignupImage } from "./SignupImage";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();

  return (
    <Flex
      maxW="1000px"
      w={["250px", "300px", "95%", "90%"]}
      h={["100vh"]}
      margin="auto"
      flexDirection={["column"]}
    >
      <Flex
        onClick={() => history.push("/")}
        cursor="pointer"
        h={["150px"]}
        justifyContent={["center"]}
        alignItems="flex-end"
        pb="28px"
        pr="15px"
      >
        <Text
          color="orange.500"
          fontSize={["4xl", "4xl", "4xl", "5xl"]}
          textAlign="center"
          fontWeight="medium"
        >
          feeling.
        </Text>
      </Flex>
      <Flex justifyContent={["center"]} align={["center"]}>
        <SignupForm />
        <SignupImage />
      </Flex>
    </Flex>
  );
};
