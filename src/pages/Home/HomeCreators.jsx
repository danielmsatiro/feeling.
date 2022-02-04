import { Flex, Text, useDisclosure } from "@chakra-ui/react";

import { CreatorsCard } from "./CreatorsCard";
import { creatorFinder } from "../../utils/creatorsInfo";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

export const HomeCreators = () => {
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();
  const { isOpen: isOpen4, onToggle: onToggle4 } = useDisclosure();
  const { isOpen: isOpen5, onToggle: onToggle5 } = useDisclosure();

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
      flexDirection={["column", "column", "column", "row"]}
      alignItems="center"
      justifyContent="center"
      padding="30px 0"
    >
      <FlexMotion
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        alignItems="flex-start"
        flexDirection="column"
        m="10px 0"
        mr={["0", "0", "0", "20px"]}
      >
        <Flex
          flexDirection={["row", "row", "row", "column"]}
          alignItems={["center", "center", "center", "flex-start"]}
        >
          <Text
            color="orange.500"
            fontSize={["3xl", "3xl", "3xl", "4xl"]}
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
            . Conheça um pouco mais da equipe responsável pela criação da
            <Text as="span" fontWeight="semibold" color="orange.500">
              {" "}
              feeling.
            </Text>
          </Text>
        </Flex>
      </FlexMotion>
      <FlexMotion
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        flexDirection="column"
        margin="10px 0"
      >
        <CreatorsCard
          info={creatorFinder(1)}
          isOpen={isOpen1}
          onToggle={onToggle1}
        />
        <CreatorsCard
          info={creatorFinder(2)}
          isOpen={isOpen2}
          onToggle={onToggle2}
        />
        <CreatorsCard
          info={creatorFinder(3)}
          isOpen={isOpen3}
          onToggle={onToggle3}
        />
        <CreatorsCard
          info={creatorFinder(4)}
          isOpen={isOpen4}
          onToggle={onToggle4}
        />
        <CreatorsCard
          info={creatorFinder(5)}
          isOpen={isOpen5}
          onToggle={onToggle5}
        />
      </FlexMotion>
    </FlexMotion>
  );
};
