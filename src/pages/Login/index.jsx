import { Flex, Text } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginImage } from "./LoginImage";

import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const Login = () => {
  const history = useHistory();
  return (
    <Flex h="100vh" w="100vw" justifyContent="center" alignItems="flex-start">
      <FlexMotion
        animate="visible"
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: 100, opacity: 0 },
        }}
        exit={{ x: 100, opacity: 0 }}
        flexDirection="column"
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
        <Flex mt="20px" justifyContent={["space-between"]} align={["center"]}>
          <Flex>
            <LoginImage />
          </Flex>

          <LoginForm />
        </Flex>
      </FlexMotion>
    </Flex>
  );
};
