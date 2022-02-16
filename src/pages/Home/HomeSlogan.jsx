import { Flex, Image, Text, Link } from "@chakra-ui/react";

import levitate from "../../assets/levitate.svg";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const ImageMotion = motion(Image);

export const HomeSlogan = () => {
  return (
    <>
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
        alignItems="center"
        bgColor="white"
      >
        <ImageMotion
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          src={levitate}
          w={["300px", "300px", "500px", "500px", "700px"]}
          mb="20px"
          draggable={false}
        />

        <Text
          w={["290px", "290px", "fit-content", "fit-content"]}
          fontSize={["2xl", "3xl", "3xl", "4xl"]}
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
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgColor="white"
          color="orange.500"
          padding="20px 0"
          fontSize="sm"
        >
          <Link href="#">voltar ao topo</Link>

          <Link
            href="https://github.com/danielmsatiro/feeling."
            target="_blank"
          >
            repositório
          </Link>
        </Flex>
      </FlexMotion>
    </>
  );
};
