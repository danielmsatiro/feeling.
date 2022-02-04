import { Button, Flex, Image, Text, Icon, Skeleton } from "@chakra-ui/react";

import swing from "../../assets/swing.svg";

import { FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useComments } from "../../provider/CommentsProvider";
import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";

import { motion, AnimatePresence, useAnimation } from "framer-motion";

const FlexMotion = motion(Flex);
const TextMotion = motion(Text);

export const DashboardContent = ({ name }) => {
  const { phrases, loading, addMyFavorite } = usePhrases();
  const { user } = useAuth();
  const { RandomPhrase, randomId } = useComments();
  const history = useHistory();

  const frase = phrases.find(({ id }) => id === Number(randomId));

  const handleClick = () => {
    history.push(`/comments/${randomId}`);
    // PhraseComments(frase.id);
  };

  const controls = useAnimation();

  return (
    <FlexMotion
      animate={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, y: 50 }}
      flexDirection="column"
      alignItems="center"
      position="relative"
      h="100%"
    >
      <Flex
        flexDirection={["column", "row"]}
        alignItems="center"
        justifyContent="center"
        w={["320px", "100%", "100%", "100%"]}
        m={["30px", "0px", "0px", "0px"]}
      >
        <Image
          src={swing}
          alt="swing"
          boxSize={["110px", "250px", "250px", "300px"]}
          mr={["0px", "30px", "30px", "30px"]}
          draggable="false"
        />

        <Text
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          fontWeight="medium"
          color="orange.500"
        >
          Olá,
          <Text as="span" display={["inline", "block"]} color="black">
            {" "}
            {name}
          </Text>
        </Text>
      </Flex>
      <Flex>
        <Text
          w="fit-content"
          padding="3px"
          borderRadius="4px"
          fontSize="xs"
          textAlign="center"
          fontStyle="italic"
          bgColor="yellow.200"
        >
          Quer uma frase diferente? É pra já!
        </Text>
      </Flex>

      <Button
        m="20px 0"
        bg="orange.500"
        color="white"
        borderRadius="12px"
        border="solid"
        borderColor="orange.500"
        fontWeight="medium"
        _hover={{
          background: "yellow.50",
          color: "orange.500",
          border: "solid orange.500",
        }}
        onClick={() => {
          RandomPhrase();
          controls.start((i) => ({
            opacity: [0, 1],
            y: [15, 0],
            transition: {
              duration: 0.5,
            },
          }));
        }}
      >
        Quero outra!
      </Button>

      <Flex justifyContent="center" alignItems="center">
        <FlexMotion
          cunstom={0}
          animate={controls}
          w={["320px", "400px", "500px", "600px"]}
          bg="white"
          borderRadius="10px"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex
            borderRadius="10px 10px 0 0 "
            bgColor="yellow.200"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            padding="10px 15px"
          >
            <Flex h="fit-content">
              <Icon
                onClick={() => {
                  addMyFavorite(frase.id, user.id);
                }}
                as={FaHeart}
                fontSize="2xl"
                color="gray.300"
                _hover={{
                  color: "orange.500",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                css={{ "&:not(:hover)": { transition: "0.3s" } }}
              />
            </Flex>

            <Button
              onClick={handleClick}
              h="30px"
              fontSize="sm"
              fontWeight="medium"
              bg="white"
              color="yellow.500"
              border="solid 2px"
              borderRadius="12px"
              borderColor="yellow.500"
              _hover={{
                background: "yellow.500",
                color: "white",
              }}
            >
              comentar
            </Button>
          </Flex>
          <Skeleton isLoaded={!loading}>
            <FlexMotion padding="20px" flexDirection="column">
              <AnimatePresence exitBeforeEnter>
                <TextMotion fontSize={["md", "lg"]}>
                  {frase?.phraseText}
                </TextMotion>
              </AnimatePresence>
              <Text
                fontSize={["xl", "2xl"]}
                fontWeight="medium"
                mt="30px"
                color="orange.500"
              >
                {frase?.phraseAuthor}
              </Text>
            </FlexMotion>
          </Skeleton>
        </FlexMotion>
      </Flex>
    </FlexMotion>
  );
};
