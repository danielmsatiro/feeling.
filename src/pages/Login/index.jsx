import { Flex, Text } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginImage } from "./LoginImage";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/AuthContext";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});
export const Login = () => {
  const history = useHistory()
  const { signIn } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const Sender = (data) => {
    console.log(data);
    signIn(data);
  };

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
      <Flex 
        mt="20px" 
        justifyContent={["space-between"]} 
        align={["center"]}>
        <Flex>
          <LoginImage />
        </Flex>
        <Flex w={["300px", "300px", "350px", "400px"]}>
          <LoginForm
            sender={handleSubmit(Sender)}
            register={register}
            error={errors}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
