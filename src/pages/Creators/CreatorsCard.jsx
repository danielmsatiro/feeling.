import { Box, Flex, Image, Text, Collapse, Link, Icon } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ImageMotion = motion(Image);

export const CreatorsCard = ({ info, state, setState, isOpen, onToggle }) => (
  <Flex
    flexDirection="column"
    alignItems="flex-start"
    w="fit-content"
    m="10px 0"
    padding="10px"
    borderRadius="10px"
    bgColor="white"
  >
    <Box w={["300px", "340px", "340px", "550px"]}>
      <Flex alignItems="center">
        {state ? (
          <Image src={info.avatar} w="99.83px" h="100px" borderRadius="50%" />
        ) : (
          <ImageMotion
            src={info.picture}
            w="100px"
            h="100px"
            borderRadius="50%"
            initial="hidden"
            animate="visible"
            variants={variants}
          />
        )}

        <Flex w="100%" justifyContent="space-between" mb="10px">
          <Box padding="0 25px">
            <Text fontSize="lg" fontWeight="semibold">
              {info.name}
            </Text>
            <Text fontSize="sm" fontStyle="italic">
              {info.role}
            </Text>
            <Link
              fontSize="sm"
              color="orange.500"
              onClick={() => {
                setState(!state);
                onToggle();
              }}
            >
              ver {isOpen ? "menos" : "mais"}
            </Link>
          </Box>
          <Flex flexDirection={["column", "row", "row", "row"]}>
            <Link href={info.github} target="_blank" h="28px">
              <Icon
                as={FaGithubSquare}
                boxSize={7}
                opacity="0.5"
                _hover={{
                  opacity: "1",
                  transition: "1s",
                }}
                _active={{ boxShadow: "none" }}
              />
            </Link>
            <Link href={info.linkedin} target="_blank" h="28px">
              <Icon
                as={FaLinkedin}
                boxSize={7}
                opacity="0.5"
                _hover={{
                  opacity: "1",
                  transition: "1s",
                }}
                _active={{ boxShadow: "none" }}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen}>
        <Flex
          justifyContent="space-between"
          bgColor="yellow.200"
          padding="10px"
          borderRadius="10px"
          mt="10px"
        >
          <Text fontSize="xs">{info.description}</Text>
        </Flex>
      </Collapse>
    </Box>
  </Flex>
);
