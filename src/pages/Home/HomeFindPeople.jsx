import { Flex, Image, Box, Text } from "@chakra-ui/react";

import selfie from "../../assets/selfie.svg";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const HomeFindPeople = () => {
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
      h="100vh"
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
      ]}
      justifyContent="center"
      alignItems="center"
      bgColor="white"
    >
      <Image
        src={selfie}
        h={["250px", "250px", "250px", "500px"]}
        mt="20px"
        draggable={false}
      />
      <Box padding={[null, null, null, "50px"]}>
        <Text
          w={["290px", "290px", "290px", "400px"]}
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          fontWeight="semibold"
        >
          <Text as="abbr" color="orange.500">
            Encontre pessoas
          </Text>{" "}
          como você!
        </Text>

        <Text w={["300px", "300px", "300px", "400px"]} mt="15px">
          Participe de discussões sobre as citações que mais gostar. Você pode
          encontrar pessoas bem parecidas com você!
        </Text>
      </Box>
    </FlexMotion>
  );
};
