import { Button, Flex, Text, Link } from "@chakra-ui/react";
import { Entrada } from "../../components/Input/ControlledInput";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../provider/AuthContext";

import { Link as HDLink } from "react-router-dom";

export const LoginForm = () => {
  const signInSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { signIn } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const sender = (data) => {
    signIn(data);
  };

  return (
    <>
      <Flex
        as="form"
        onSubmit={handleSubmit(sender)}
        flexDirection="column"
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
          error={errors.email?.message}
          register={register}
        />

        <Entrada
          w="300px"
          type="password"
          placeholder="Senha"
          name="password"
          error={errors.password?.message}
          register={register}
        />

        <Button
          type="submit"
          alignSelf="center"
          padding="0px 25px"
          bg="orange.500"
          color="white"
          borderRadius="12px"
          border="solid"
          borderColor="orange.500"
          h="30px"
          w="fit-content"
          m="10px"
          fontWeight="medium"
          _hover={{
            background: "yellow.50",
            color: "orange.500",
            border: "solid orange.500",
          }}
        >
          entrar
        </Button>

        <Flex
          justifyContent={["center"]}
          fontSize={["14px", "14px", "13px", "16px"]}
        >
          <Text fontSize="sm">
            Não tem uma conta?
            <Link
              as={HDLink}
              color="orange.500"
              fontWeight="semibold"
              to="/signup"
            >
              {" "}
              Cadastre-se
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
