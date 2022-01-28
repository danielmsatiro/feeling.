import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Entrada } from "../../components/Input/ControlledInput";
import { useHistory } from "react-router-dom";

export const SignupForm = ({ sender, register, error }) => {
  const history = useHistory();

  return (
    <>
      <Flex
        as="form"
        w={["300px", "300px", "350px", "400px"]}
        onSubmit={sender}
        flexDirection="column"
        h="400px"
        justifyContent="space-between"
        // paddingLeft={["", "", "50px", ""]}
      >
        <Flex h={["80px"]} justifyContent={["flex-start"]} align={["center"]}>
          <Text  
            fontSize="4xl"
            fontWeight="light"
          >sign up.</Text>
        </Flex>

        <Entrada
          w="300px"
          placeholder="Email"
          name="email"
          errors={error}
          {...register("email")}
        />
        <Entrada
          w="300px"
          placeholder="Nome"
          name="name"
          errors={error}
          {...register("name")}
        />

        <Entrada
          w="300px"
          type="password"
          placeholder="Senha"
          name="password"
          errors={error}
          {...register("password")}
        />
        <Entrada
          w="300px"
          type="password"
          placeholder="Confirme sua Senha"
          name="confirm_password"
          errors={error}
          {...register("confirm_password")}
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
            cadastrar
          </Button>
        </Flex>
        <Flex
          justifyContent={["center"]}
          fontSize={["14px", "14px", "13px", "16px"]}
          w="300px"
        >
          <Text paddingRight="5px">Já possui uma conta? Faça</Text>
          <Text
            as="button"
            color="orange.500"
            fontWeight="bold"
            onClick={() => history.push("/login")}
          >
            Login
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
