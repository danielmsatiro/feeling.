import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Entrada } from "../../components/Input/ControlledInput";
import { useHistory } from "react-router-dom";

export const LoginForm = ({ sender, register, error }) => {
  const history = useHistory();

  return (
    <>
      <Box as="form" w={["300px", "300px", "350px", "400px"]} onSubmit={sender}>
        <Flex h={["80px"]} justifyContent={["flex-start"]} align={["center"]}>
          <Text fontSize={["3xl", "3xl", "4xl", "5xl"]}>login.</Text>
        </Flex>

        <Entrada
          placeholder="Email"
          name="email"
          errors={error}
          {...register("email")}
        />

        <Entrada
          type="password"
          placeholder="Senha"
          name="password"
          errors={error}
          {...register("password")}
        />
        <Flex h={["80px"]} alignItems={["center"]}>
          <Button
            type="submit"
            w={["100%"]}
            h={["50px", "50px", "50px", "60px"]}
            pr="4.5rem"
            bg="orange.500"
            color="yellow.50"
            borderRadius="30px"
            padding="0"
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
    </>
  );
};
