import { Flex, Image, Text } from "@chakra-ui/react";

import clumsy from "../../assets/clumsy.svg";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const HomeHardTimes = () => {
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
      bg="red.50"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Image
        src={clumsy}
        alt="clumsy guy"
        w={["250px", "300px", "300px", "400px"]}
        mb="20px"
        draggable={false}
      />

      <Flex
        flexDirection={["column", "column", "column", "row"]}
        alignItems="flex-start"
        maxW="500px"
      >
        <Text
          w={["300px", "300px", "300px", "400px"]}
          mr={["", "", "", "15px"]}
          mb={["15px", "15px", "15px", ""]}
          fontSize={["2xl", "3xl", "3xl", "4xl"]}
          fontWeight="semibold"
        >
          A vida <br />
          nem sempre é
          <Text as="abbr" color="orange.500">
            {" "}
            fácil...
          </Text>
        </Text>

        <Text w={["300px", "300px", "300px", "400px"]} fontWeight="semibold">
          Sabemos que a vida pode oferecer dificuldades em certos momentos.
          Encontre aqui{" "}
          <Text as="abbr" color="orange.500">
            um jeito novo de se motivar
          </Text>{" "}
          e vencer seus desafios!
        </Text>
      </Flex>
    </FlexMotion>
  );
};
