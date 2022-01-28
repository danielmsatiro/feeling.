import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

import folders from "../../assets/folders.svg";
import selfie from "../../assets/selfie.svg";
import levitate from "../../assets/levitate.svg";
import heart from "../../assets/Loves.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FlexMotion = motion(Flex);

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

export const HomeBottom = () => {
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const [ref4, inView4] = useInView({
    threshold: 0,
  });

  const [ref5, inView5] = useInView({
    threshold: 0,
  });

  const [ref6, inView6] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }

    if (inView5) {
      controls5.start("visible");
    }

    if (inView6) {
      controls6.start("visible");
    }
  }, [controls4, controls5, controls6, inView4, inView5, inView6]);

  return (
    <>
      <FlexMotion
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgColor="yellow.50"
        ref={ref4}
        animate={controls4}
        initial="hidden"
        variants={squareVariants}
        position="relative"
      >
        <Image src={heart} w="80px" position="absolute" top="-10" />
        <Text
          w={["290px", "290px", "290px", "fit-content"]}
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          fontWeight="semibold"
        >
          Seu espaço, do{" "}
          <Text as="abbr" color="orange.500">
            seu jeito!
          </Text>
        </Text>
        <Text w={["300px", "300px", "300px", "fit-content"]} mt="15px">
          Aqui você pode guardar suas frases favoritas para lê-las quando
          quiser!
        </Text>
        <Image
          src={folders}
          w={["200px", "200px", "200px", "300px"]}
          mt="40px"
        />
      </FlexMotion>

      <FlexMotion
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
        ref={ref5}
        animate={controls5}
        initial="hidden"
        variants={squareVariants}
      >
        <Image
          src={selfie}
          h={["250px", "250px", "250px", "500px"]}
          mt="20px"
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
      <FlexMotion
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgColor="yellow.50"
        ref={ref6}
        animate={controls6}
        initial="hidden"
        variants={squareVariants}
      >
        <Image
          src={levitate}
          w={["300px", "300px", "500px", "500px", "700px"]}
          mb="20px"
        />

        <Text
          w={["290px", "290px", "fit-content", "fit-content"]}
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          fontWeight="semibold"
        >
          A{" "}
          <Text as="abbr" color="orange.500">
            feeling.
          </Text>{" "}
          quer te fazer{" "}
          <Text as="abbr" color="orange.500">
            flutuar!
          </Text>
        </Text>
      </FlexMotion>
      <Flex
        justifyContent="center"
        bgColor="yellow.50"
        color="orange.500"
        padding="20px 0"
        fontSize="sm"
      >
        <Link href="#top">voltar ao topo</Link>
        <Link m="0 20px">criadores</Link>
        <Link>repositório</Link>
      </Flex>
    </>
  );
};
