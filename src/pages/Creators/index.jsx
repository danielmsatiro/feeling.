import { Flex, Text, useDisclosure } from "@chakra-ui/react";

import { CreatorsCard } from "./CreatorsCard";

import { useState } from "react";

import { motion } from "framer-motion";

import { creatorsInfo } from "../../utils/creatorsInfo";

import guilherme from "../../assets/guilherme.svg";
import guilhermepic from "../../assets/guilherme-pic.jpg";

const FlexMotion = motion(Flex);

export const Creators = () => {
  const [img, setImg] = useState(true);
  const { isOpen, onToggle } = useDisclosure();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  // Props {picture, avatar, name, role, description, github, linkedin}

  return (
    <FlexMotion
      flexDirection={["column", "column", "column", "row"]}
      alignItems="center"
      justifyContent={[
        "flex-start",
        "flex-start",
        "flex-start",
        "space-evenly",
      ]}
      h="100vh"
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      variants={variants}
    >
      <Flex alignItems="flex-start" flexDirection="column" m="20px 0">
        <Flex
          flexDirection={["row", "row", "row", "column"]}
          alignItems={["center", "center", "center", "flex-start"]}
        >
          <Text
            color="orange.500"
            fontSize={["4xl", "4xl", "4xl", "5xl"]}
            fontWeight="medium"
            mr={["10px", "10px", "10px", "20px"]}
          >
            feeling.{" "}
          </Text>
          <Text
            as="span"
            color="black"
            fontSize={["xl", "xl", "xl", "2xl"]}
            fontWeight="medium"
          >
            creators
          </Text>
        </Flex>
        <Flex w="300px" m="10px 0" flexDirection="column">
          <Text>
            Por trás de uma boa ideia, existem seus{" "}
            <Text as="span" fontWeight="semibold" color="orange.500">
              idealizadores
            </Text>
            . Conheça um pouco mais da equipe responsáveel pela criação da
            <Text as="span" fontWeight="semibold" color="orange.500">
              {" "}
              feeling.
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <CreatorsCard
          info={creatorsInfo[0]}
          state={img}
          isOpen={isOpen}
          onToggle={onToggle}
          setState={setImg}
        />
      </Flex>
    </FlexMotion>
  );
};
