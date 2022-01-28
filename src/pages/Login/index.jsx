import { Flex, Text } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginImage } from "./LoginImage";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/AuthContext";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});
export const Login = () => {
  const { signIn } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const Sender = (data) => {
    signIn(data);
  };

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
        <LoginImage />
        <LoginForm
          sender={handleSubmit(Sender)}
          register={register}
          error={errors}
        />
      </Flex>
    </Flex>
  );
};
