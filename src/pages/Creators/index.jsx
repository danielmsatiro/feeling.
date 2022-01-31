import {
  Box,
  Flex,
  Image,
  Text,
  Collapse,
  useDisclosure,
  Link,
  Icon,
} from "@chakra-ui/react";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { useState } from "react";

import { motion } from "framer-motion";

import guilherme from "../../assets/guilherme.svg";
import guilhermepic from "../../assets/guilherme-pic.jpg";

const ImageMotion = motion(Image);

export const Creators = () => {
  const [init, setInit] = useState(true);
  const { isOpen, onToggle } = useDisclosure();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      alignItems="center"
      justifyContent={[
        "flex-start",
        "flex-start",
        "flex-start",
        "space-evenly",
      ]}
      h="100vh"
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
        <Flex w="300px" m="10px 0">
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

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        w="fit-content"
        padding="10px"
        borderRadius="10px"
        bgColor="white"
      >
        <Flex flexDirection="column" w={["300px", "340px", "340px", "550px"]}>
          <Flex alignItems="center">
            {init ? (
              <Image src={guilherme} w="99.83px" h="100px" borderRadius="50%" />
            ) : (
              <ImageMotion
                src={guilhermepic}
                w="100px"
                h="100px"
                borderRadius="50%"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
            )}

            <Flex flexDirection="column" alignItems="center" mb="10px">
              <Box padding="0 25px">
                <Text fontSize="lg" fontWeight="semibold">
                  Guilherme Couto
                </Text>
                <Text fontSize="sm" fontStyle="italic">
                  Tech Leader
                </Text>
                <Link
                  fontSize="sm"
                  color="orange.500"
                  onClick={() => {
                    setInit(!init);
                    onToggle();
                  }}
                >
                  ver {isOpen ? "menos" : "mais"}
                </Link>
              </Box>
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
              <Text w={["70%", "75%", "80%", "80%"]} fontSize="xs">
                Tenho 26 anos, gosto de café expresso, dias ensolarados e de
                projetos que fazem a diferença.
              </Text>
              <Flex flexDirection="row">
                <Link
                  href="https://github.com/GuiCoutoSt"
                  target="_blank"
                  mr="5px"
                >
                  <Icon
                    as={FaGithubSquare}
                    boxSize={7}
                    opacity="0.5"
                    _hover={{
                      opacity: "1",
                      transition: "0.5s",
                    }}
                    _active={{ boxShadow: "none" }}
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/guilhermecoutodev"
                  target="_blank"
                >
                  <Icon
                    as={FaLinkedin}
                    boxSize={7}
                    opacity="0.5"
                    _hover={{
                      opacity: "1",
                      transition: "0.5s",
                    }}
                    _active={{ boxShadow: "none" }}
                  />
                </Link>
              </Flex>
            </Flex>
          </Collapse>
        </Flex>
      </Flex>
    </Flex>
  );
};
