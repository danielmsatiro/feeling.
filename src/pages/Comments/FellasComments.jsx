import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { PhraseCard } from "../../components/Card/PhraseCard";
import { CommentsList } from "../../components/Card/CommentsList";
import { Header } from "../../components/Header";
import jumping from "../../assets/jumping.svg";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePhrases } from "../../provider/PhrasesContext";
import { useState } from "react";

export const FellasComments = ({ onOpen }) => {
  /* const { fraseComments, PhraseComments, randomId } = useComments(); */
  const { phrases } = usePhrases();
  const params = useParams();
  const [frase, setFrase] = useState();

  useEffect(() => {
    setFrase(phrases.find(({ id }) => id === Number(params.id)));
  }, [phrases]);

  return (
    <>
      <Header />
      <Flex flexDirection="column" alignItems="center">
        <Flex
          w={["300px", "320px", "600px", "750px"]}
          h={["150px", "150px", "150px", "200px"]}
          justifyContent={["flex-start"]}
          alignItems={["center"]}
        >
          <Flex
            w={["300px", "320px", "100%", "100%"]}
            flexDirection="column"
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            fontWeight="medium"
            justifyContent={["space-between"]}
            alignItems={["center"]}
          >
            <Flex
              fontSize={["3xl"]}
              fontWeight="medium"
              flexWrap={["wrap"]}
              justifyContent={["flex-start"]}
              alignItems={["center"]}
            >
              <Text color="orange.500">
                Comentários{" "}
                <Text as="span" color="black">
                  da Galera
                </Text>
                <Text as="span" color="orange.500">
                  !
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={["0", "0", "600px", "750px"]}
          justify={["center", "center", "flex-end", "flex-end"]}
          pos="relative"
        >
          <Flex
            display={["none", "none", "flex", "flex"]}
            pos="absolute"
            top="0"
            left="0"
            zIndex={1}
          >
            <Image
              src={jumping}
              alt="jumping"
              h="auto"
              w={["0", "0", "400px", "450px"]}
            />
          </Flex>
          <Box>
            <PhraseCard
              author={frase?.phraseAuthor}
              frase={frase?.phraseText}
              pos="absolute"
              top={0}
              right="0"
              zIndex={0}
            />
          </Box>
        </Flex>
        <Button
          onClick={onOpen}
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
          Comentar
        </Button>

        {frase?.comments?.length > 0 && (
          <CommentsList array={frase?.comments} />
        )}
      </Flex>
    </>
  );
};
