import { Flex, Text } from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";
import { SignupImage } from "./SignupImage";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../provider/AuthContext";
import { useHistory } from "react-router-dom";

const signInSchema = yup.object().shape({
  name: yup.string().required("E-mail obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup.string().required("Senha obrigatória"),
});
export const SignUp = () => {
  const history = useHistory()
  const { signUp } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const Sender = (data) => {
    signUp(data);
  };

  return (
    <Flex
      maxW="1000px"
      w={["250px", "300px", "95%", "90%"]}
      h={["100vh"]}
      margin="auto"
      flexDirection={["column"]}
    >
      <Flex 
        onClick={() => history.push("/")}
        cursor="pointer"
        h={["150px"]} 
        justifyContent={["center"]} 
        alignItems="flex-end" 
        pb="28px" 
        pr="15px"
      >
        <Text
          color="orange.500"
          fontSize={["4xl", "4xl", "4xl", "5xl"]}
          textAlign="center"
          fontWeight="medium"
        >
          feeling.
        </Text>
      </Flex>
      <Flex 
        justifyContent={["center"]} 
        align={["center"]}>
        <SignupForm
          sender={handleSubmit(Sender)}
          register={register}
          error={errors}
        />
        <SignupImage />
      </Flex>
    </Flex>
  );
};
