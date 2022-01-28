import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import swing from "../../assets/swing.svg";
import meditating from "../../assets/meditating.svg";

import { MdOutlineFavorite, MdOutlineFilterNone } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const DashboardContent = ({ name, frase, author }) => {
  const history = useHistory();
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex
        alignItems="center"
        justifyContent={["flex-start", "center", "center", "center"]}
        w={["320px", "100%", "100%", "100%"]}
        m={["30px", "0px", "0px", "0px"]}
      >
        <Image
          src={swing}
          alt="swing"
          display={["none", "block", "block", "block"]}
          boxSize={["300px", "300px", "450px", "550px"]}
        />

        <Heading size="3xl" fontWeight="medium" lineHeight="60px">
          <Text as="abbr" color="orange.500">
            Olá,
          </Text>{" "}
          <br />
          {name}
        </Heading>
      </Flex>

      <Flex justifyContent="center" alignItems="center" w="100%" mb="40px">
        <Flex
          w={["320px", "350px", "450px", "450px"]}
          bg="yellow.200"
          borderRadius="20px"
          padding="20px"
          flexDirection="column"
          minH="400px"
          justifyContent="space-between"
          border="2px solid"
        >
          <Flex
            w="100%"
            minH="250px"
            alignItems={["center", "flex-start", "flex-start", "flex-start"]}
            justifyContent={[
              "center",
              "space-between",
              "space-between",
              "space-between",
            ]}
            flexDirection={["column", "row", "row", "row"]}
            mb="20px"
          >
            <Heading
              fontSize={["xl", "2xl", "2xl", "2xl"]}
              fontWeight="light"
              w={["100%", "75%", "75%", "75%"]}
              lineHeight="50px"
            >
              {frase}
            </Heading>
            <Flex
              color="orange.500"
              display={["none", "block", "block", "block"]}
              cursor="pointer"
              _hover={{
                color: "yellow.500",
              }}
            >
              <MdOutlineFavorite size="30px" />
            </Flex>
          </Flex>

          <Flex
            color="orange.500"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={["column-reverse", "row", "row", "row"]}
          >
            <Flex
              mt="40px"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              onClick={() => history.push("/comments")}
            >
              <Flex
                display={["block", "none", "none", "none"]}
                cursor="pointer"
                _hover={{
                  color: "yellow.500",
                }}
              >
                <MdOutlineFavorite size="30px" />
              </Flex>
              <Flex
                mt={["20px", "-5px", "-5px", "-5px"]}
                cursor="pointer"
                _hover={{
                  color: "yellow.500",
                }}
              >
                <MdOutlineFilterNone size="20px" />
              </Flex>
            </Flex>

            <Heading size="lg" fontWeight="medium" mt="30px">
              {author}
            </Heading>
          </Flex>
        </Flex>

        <Image
          src={meditating}
          alt="swing"
          ml="-120px"
          display={["none", "block", "block", "block"]}
          boxSize={["300px", "200px", "250px", "350px"]}
        />
      </Flex>

      <Button
        m="10px"
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
        Quero outra!
      </Button>
    </Flex>
  );
};
