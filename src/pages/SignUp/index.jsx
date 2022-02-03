import { Flex, Text } from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";
import { SignupImage } from "./SignupImage";
import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const SignUp = () => {
  const history = useHistory();

  return (
    <FlexMotion
      flexDirection={["column"]}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      }}
      exit={{ x: -100, opacity: 0 }}
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
      <Flex justifyContent={["center"]} align={["center"]}>
        <SignupForm />
        <SignupImage />
      </Flex>
    </FlexMotion>
  );
};
