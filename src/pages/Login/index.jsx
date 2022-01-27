import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { ControlledInput } from "../../components/Input/ControlledInput";
import { PasswordInput } from "../../components/Input/PasswordInput";

export const Login = () => {
  return (
    <Flex
      as="form"
      w={["300px"]}
      h={["500px"]}
      margin="auto"
      flexDirection={["column"]}
    >
      <Flex h={["150px"]} justifyContent={["center"]} align={["center"]}>
        <Text color="orange.500" fontSize={["6xl"]} textAlign="center">
          feeling.
        </Text>
      </Flex>
      <Flex h={["80px"]} justifyContent={["flex-start"]} align={["center"]}>
        <Text fontSize={["3xl"]}>login.</Text>
      </Flex>

      <ControlledInput placeholder="Email" name="email" />

      <ControlledInput placeholder="Senha" name="password" />
      <Flex h={["80px"]} alignItems={["center"]}>
        <Button
          w={["100%"]}
          h={["50px"]}
          pr="4.5rem"
          bg="orange.500"
          color="yellow.50"
          borderRadius="30px"
          padding="0"
        >
          entrar
        </Button>
      </Flex>
    </Flex>
  );
};
