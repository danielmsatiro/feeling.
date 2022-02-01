import { Button, Flex, Text } from "@chakra-ui/react";
import { Entrada } from "../../components/Input/ControlledInput";
import { useHistory } from "react-router-dom";

export const LoginForm = ({ sender, register, error }) => {
  const history = useHistory();

  return (
    <>
      <Flex
        as="form"
        onSubmit={sender}
        flexDirection="column"
        h="300px"
        justifyContent="space-between"
      >
        <Flex h={["80px"]} justifyContent={["flex-start"]} align={["center"]}>
          <Text fontSize="4xl" fontWeight="light">
            login.
          </Text>
        </Flex>

        <Entrada
          w="300px"
          placeholder="Email"
          name="email"
          errors={error}
          {...register("email")}
        />

        <Entrada
          type="password"
          w="300px"
          placeholder="Senha"
          name="password"
          errors={error}
          {...register("password")}
        />
        <Flex h={["80px"]} alignItems={["center"]}>
          <Button
            type="submit"
            display="flex"
            justifyContent="center"
            padding="0px 25px"
            bg="orange.500"
            color="white"
            borderRadius="12px"
            border="solid"
            borderColor="orange.500"
            h="30px"
            w="300px"
            fontWeight="medium"
            _hover={{
              background: "yellow.50",
              color: "orange.500",
              border: "solid orange.500",
            }}
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
      </Flex>
    </>
  );
};
