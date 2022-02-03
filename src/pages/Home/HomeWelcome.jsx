import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

import loving from "../../assets/loving.svg";

import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

const FlexMotion = motion(Flex);

export const HomeWelcome = () => {
  const history = useHistory();

  return (
    <FlexMotion
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      exit={{ opacity: 0 }}
      bg="yellow.50"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="101vh"
    >
      <Text
        color="orange.500"
        fontSize={["4xl", "4xl", "4xl", "5xl"]}
        fontWeight="medium"
      >
        feeling.
      </Text>
      <Image
        src={loving}
        alt="loving guy"
        w={["300px", "300px", "300px", "400px"]}
        m="10px 0"
        draggable={false}
      />

      <Heading
        color="orange.500"
        as="h2"
        fontSize={["3xl", "3xl", "3xl", "4xl"]}
        fontWeight="medium"
      >
        Bem Vindo(a)!
      </Heading>

      <Text m="10px" textAlign="center" fontWeight="thin">
        A motivação necessária começa <br />
        com uma{" "}
        <Text as="span" fontWeight="medium">
          palavra
        </Text>
      </Text>

      <Button
        onClick={() => history.push("/login")}
        m="10px"
        display="flex"
        justifyContent="space-between"
        padding="0px 25px"
        bg="orange.500"
        color="white"
        borderRadius="12px"
        border="solid"
        borderColor="orange.500"
        h="30px"
        w="200px"
        fontWeight="medium"
        _hover={{
          background: "yellow.50",
          color: "orange.500",
          border: "solid orange.500",
        }}
      >
        login
        <MdOutlineKeyboardArrowRight size="1.5rem" />
      </Button>

      <Button
        onClick={() => history.push("/signup")}
        m="10px"
        display="flex"
        justifyContent="space-between"
        padding="0px 25px"
        bg="orange.500"
        color="white"
        borderRadius="12px"
        border="solid"
        borderColor="orange.500"
        h="30px"
        w="200px"
        fontWeight="medium"
        _hover={{
          background: "yellow.50",
          color: "orange.500",
          border: "solid orange.500",
        }}
      >
        <MdOutlineKeyboardArrowLeft size="1.5rem" />
        cadastro
      </Button>

      <FlexMotion
        color="orange.500"
        mt="40px"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity }}
      >
        <MdOutlineKeyboardArrowDown size={60} />
      </FlexMotion>
    </FlexMotion>
  );
};
