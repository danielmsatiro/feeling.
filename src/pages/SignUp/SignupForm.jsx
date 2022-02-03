import { Button, Flex, Text, Link } from "@chakra-ui/react";
import { Entrada } from "../../components/Input/ControlledInput";
import { Link as HDLink } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/AuthContext";

export const SignupForm = () => {
  const signInSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Escreva seu nome"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup.string().required("Confirme sua senha"),
  });

  const { signUp } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const sender = (data) => {
    signUp(data);
  };

  return (
    <>
      <Flex
        as="form"
        onSubmit={handleSubmit(sender)}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex
          w={["100%"]}
          h={["80px"]}
          justifyContent={["flex-start"]}
          align={["center"]}
        >
          <Text fontSize="4xl" fontWeight="light">
            sign up.
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
          placeholder="Nome"
          name="name"
          error={errors.name?.message}
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
        <Entrada
          w="300px"
          type="password"
          placeholder="Confirme sua Senha"
          name="confirm_password"
          error={errors.confirm_password?.message}
          register={register}
        />

        <Button
          type="submit"
          alignSelf="center"
          padding="15px"
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
          cadastrar
        </Button>

        <Flex
          justify={["center"]}
          align={["center"]}
          fontSize={["14px", "14px", "13px", "16px"]}
          w="300px"
        >
          <Text fontSize="sm">
            Já possui uma conta? Faça{" "}
            <Link
              as={HDLink}
              to="/login"
              color="orange.500"
              fontWeight="semibold"
            >
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
