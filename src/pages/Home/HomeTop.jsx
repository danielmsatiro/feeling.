import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import loving from "../../assets/loving.svg";
import clumsy from "../../assets/clumsy.svg";
import coffee from "../../assets/coffee.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const FlexMotion = motion(Flex);

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

export const HomeTop = () => {

  const history = useHistory()

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    threshold: 0,
  });

  const [ref3, inView3] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }

    if (inView2) {
      controls2.start("visible");
    }

    if (inView3) {
      controls3.start("visible");
    }
  }, [controls1, controls2, controls3, inView1, inView2, inView3]);

  return (
    <Flex flexDirection="column" id="#top">
      <FlexMotion
        ref={ref1}
        animate={controls1}
        initial="hidden"
        variants={squareVariants}
        bg="yellow.50"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="101vh"
        padding="35px"
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
          Lorem ipsulum dolum met isse <br />
          aham dat mar
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
      </FlexMotion>

      <FlexMotion
        bg="red.50"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        padding="35px"
        ref={ref2}
        animate={controls2}
        initial="hidden"
        variants={squareVariants}
      >
        <Image
          src={clumsy}
          alt="clumsy guy"
          w={["300px", "300px", "300px", "400px"]}
          mb="20px"
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
            fontSize={["3xl", "3xl", "3xl", "4xl"]}
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

      <FlexMotion
        position="relative"
        bg="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        ref={ref3}
        animate={controls3}
        initial="hidden"
        variants={squareVariants}
      >
        <Flex
          justifyContent="center"
          alignItems={["center", "center", "center", "flex-start"]}
          flexDirection={["column", "column", "column", "row"]}
          mb="50px"
        >
          <Flex flexDirection="column">
            <Text
              w="300px"
              mb="15px"
              fontSize={["3xl", "3xl", "3xl", "4xl"]}
              fontWeight="semibold"
            >
              Quem Somos?
            </Text>
            <Text w={["300px", "300px", "300px", "290px"]} mb="15px">
              <Text as="abbr" fontWeight="semibold" color="orange.500">
                feeling.{" "}
              </Text>
              é uma plataforma dedicada a deixar sua vida um pouco mais leve.
              Aqui você encontra motivação extra para seu dia a dia, através de
              citações de autores conhecidos ou não.
            </Text>
          </Flex>

          <Flex
            h="fit-content"
            w={["300px", "300px", "300px", "250px"]}
            flexDirection="column"
            justifyContent="center"
            bg="yellow.50"
            padding="20px 30px"
            mt={["20px", "0px"]}
            borderRadius="15px"
          >
            <Text mb="15px" fontStyle="italic">
              Patience and perseverance have a magical effect before which
              difficulties disappear and obstacles vanish.
            </Text>
            <Text color="orange.500" fontWeight="medium">
              John Adams
            </Text>
          </Flex>
        </Flex>

        <Image
          src={coffee}
          alt="man coffee"
          w={["300px", "300px", "300px", "450px"]}
        />
      </FlexMotion>
    </Flex>
  );
};
