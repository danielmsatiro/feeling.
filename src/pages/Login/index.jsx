import { Flex, Text } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginImage } from "./LoginImage";

import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  return (
    <Flex
      maxW="1500px"
      w={["300px", "400px", "100%", "90%"]}
      h={["100vh"]}
      margin="auto"
      flexDirection={["column"]}
      alignItems="center"
    >
      <Flex
        onClick={() => history.push("/")}
        cursor="pointer"
        h={["150px"]}
        justifyContent={["center"]}
        alignItems={["flex-end"]}
        pb="28px"
        pr="15px"
      >
        <Text
          color="orange.500"
          fontSize={["4xl", "4xl", "4xl", "5xl"]}
          fontWeight="medium"
        >
          feeling.
        </Text>
      </Flex>
      <Flex mt="20px" justifyContent={["space-between"]} align={["center"]}>
        <Flex>
          <LoginImage />
        </Flex>

        <LoginForm />
      </Flex>
    </Flex>
  );
};
