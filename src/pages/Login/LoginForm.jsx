import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ControlledInput } from "../../components/Input/ControlledInput";
import dancing from "../../assets/dancing-1.png";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const history = useHistory();
  return (
    <Flex
      maxW="1500px"
      w={["300px", "400px", "100%", "90%"]}
      h={["100vh"]}
      margin="auto"
      flexDirection={["column"]}
    >
      <Flex h={["150px"]} justifyContent={["center"]} align={["center"]}>
        <Text
          color="orange.500"
          fontSize={["6xl", "6xl", "7xl", "8xl"]}
          textAlign="center"
        >
          feeling.
        </Text>
      </Flex>
      <Flex h="100%" justifyContent={["space-between"]} align={["center"]}>
        <Box display={["none", "none", "block", "block"]}>
          <Image
            src={dancing}
            alt="dancing"
            h="auto"
            w={["0", "0", "400px", "800px"]}
          />
        </Box>
        <Box as="form" w={["300px", "300px", "350px", "400px"]}>
          <Flex h={["80px"]} justifyContent={["flex-start"]} align={["center"]}>
            <Text fontSize={["3xl", "3xl", "4xl", "5xl"]}>login.</Text>
          </Flex>

          <ControlledInput
            h={["50px", "50px", "50px", "60px"]}
            placeholder="Email"
            name="email"
          />

          <ControlledInput
            h={["50px", "50px", "50px", "60px"]}
            placeholder="Senha"
            name="password"
          />
          <Flex h={["80px"]} alignItems={["center"]}>
            <Button
              w={["100%"]}
              h={["50px", "50px", "50px", "60px"]}
              pr="4.5rem"
              bg="orange.500"
              color="yellow.50"
              borderRadius="30px"
              padding="0"
              onClick={() => history.push("/")}
            >
              entrar
            </Button>
          </Flex>
          <Flex
            justifyContent={["center"]}
            fontSize={["14px", "14px", "13px", "16px"]}
          >
            <Text paddingRight="5px">Não tem uma conta?</Text>
            <Text
              as="button"
              color="orange.500"
              fontWeight="bold"
              onClick={() => history.push("/signup")}
            >
              Cadastre-se
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
