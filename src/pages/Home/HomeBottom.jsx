import { Span } from "./styles";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

import Folders from "../../assets/folders.svg";
import Selfie from "../../assets/selfie.svg";
import Levitate from "../../assets/levitate.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FlexMotion = motion(Flex);

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

export const HomeBottom = () => {
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
    <>
      <FlexMotion
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgColor="yellow.50"
        ref={ref1}
        animate={controls1}
        initial="hidden"
        variants={squareVariants}
      >
        <Text
          w={["290px", "290px", "290px", "fit-content"]}
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          fontWeight="semibold"
        >
          Seu espaço, do{" "}
          <Span display="inline" color="orange.500">
            seu jeito!
          </Span>
        </Text>
        <Text w={["300px", "300px", "300px", "fit-content"]} mt="15px">
          Aqui você pode guardar suas frases favoritas para lê-las quando
          quiser!
        </Text>
        <Image
          src={Folders}
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
        ref={ref2}
        animate={controls2}
        initial="hidden"
        variants={squareVariants}
      >
        <Image
          src={Selfie}
          h={["250px", "250px", "250px", "500px"]}
          mt="20px"
        />
        <Box padding={[null, null, null, "50px"]}>
          <Text
            w={["290px", "290px", "290px", "400px"]}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
            fontWeight="semibold"
          >
            <Span>Encontre pessoas</Span> como você!
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
        ref={ref3}
        animate={controls3}
        initial="hidden"
        variants={squareVariants}
      >
        <Image
          src={Levitate}
          w={["300px", "300px", "500px", "500px", "700px"]}
          mb="20px"
        />

        <Text
          w={["290px", "290px", "fit-content", "fit-content"]}
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          fontWeight="semibold"
        >
          A{" "}
          <Span display="inline" color="orange.500">
            feeling.
          </Span>{" "}
          quer te fazer <Span>flutuar!</Span>
        </Text>
      </FlexMotion>
      <Flex
        justifyContent="center"
        bgColor="yellow.50"
        color="orange.500"
        padding="20px 0"
        fontSize="sm"
      >
        <Link>voltar ao topo</Link>
        <Link m="0 20px">criadores</Link>
        <Link>repositório</Link>
      </Flex>
    </>
  );
};
