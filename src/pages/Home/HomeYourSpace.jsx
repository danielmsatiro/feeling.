import { Flex, Image, Text } from "@chakra-ui/react";

import folders from "../../assets/folders.svg";
import heart from "../../assets/Loves.svg";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const ImageMotion = motion(Image);

export const HomeYourSpace = () => {
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
      flexDirection="column"
      justifyContent="center"
      position="relative"
      alignItems="center"
      bgColor="yellow.50"
    >
      <ImageMotion
        src={heart}
        w="80px"
        position="absolute"
        top="-10"
        draggable={false}
      />
      <Text
        w={["290px", "290px", "290px", "fit-content"]}
        fontSize={["2xl", "3xl", "3xl", "4xl"]}
        fontWeight="semibold"
      >
        Seu espaço, do{" "}
        <Text as="abbr" color="orange.500">
          seu jeito!
        </Text>
      </Text>
      <Text w={["300px", "300px", "300px", "fit-content"]} mt="15px">
        Aqui você pode guardar suas frases favoritas para lê-las quando quiser!
      </Text>
      <Image
        src={folders}
        w={["200px", "200px", "200px", "300px"]}
        mt="40px"
        draggable={false}
      />
    </FlexMotion>
  );
};
