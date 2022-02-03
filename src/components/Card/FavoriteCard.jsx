import { Box, Flex, IconButton, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { MdOutlineFavorite, MdQuestionAnswer } from "react-icons/md";
import { ModalCard } from "../../components/Modal/ModalCard";
import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";

export const FavoriteCard = ({ phrase }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {addMyFavorite}= usePhrases()
  const { user } = useAuth()

  return (
    <Box
      key={phrase.id}
      w={["300px", "300px", "300px", "300px"]}
      h="100%"
      maxH="400px"
      bg="yellow.200"
      direction={"row"}
      borderRadius={"20px"}
    >
      <Flex justify={"flex-end"} margin={"10px 10px 0px 10px"}>
      <Tooltip label="Curta esse comentário" placement="bottom">
          <IconButton
            bg={"transparent"}
            w={["20px", "30px", "30px", "30px"]}
            h={["20px", "30px", "30px", "30px"]}
            color="orange.500"
            icon={<MdOutlineFavorite size="100%" />}
            aria-label="Ver Comentários"
            onClick={() => {
              addMyFavorite(
                phrase.id,
                user.id
              )
            }}
          />
        </Tooltip>
        <Tooltip label="Comentários da galera" placement="bottom">
          <IconButton
            bg={"transparent"}
            w={["20px", "30px", "30px", "30px"]}
            h={["20px", "30px", "30px", "30px"]}
            color="orange.500"
            icon={<MdQuestionAnswer size="100%" />}
            aria-label="Ver Comentários"
            onClick={() => {
              /*abre os comentários*/
            }}
          />
        </Tooltip>
      </Flex>
      <Text
        colorScheme={""}
        fontSize={["md", "lg", "lg", "xl"]}
        fontWeight={"300"}
        lineHeight={["30px", "30px", "30px", "30px"]}
        textAlign={"left"}
        fontStyle={"normal"}
        padding={["10%", "7%", "7%", "6%"]}
        h="200px"
        minH="200px"
        whiteSpace="wrap" 
        overflow="hidden"   
        textOverflow="ellipsis"
        onClick={onOpen}
        cursor="pointer"
        _hover={{
          color:"orange.500"
        }}
      >
        <Box>{phrase.phraseText}</Box>
      </Text>
      <Text
        color="orange.500"
        fontWeight={"500"}
        fontSize={["md", "lg", "lg", "xl"]}
        lineHeight={["40px", "40px", "40px", "54px"]}
        textAlign={"left"}
        paddingBottom={"7%"}
        ml="15px"
      >
        <Box>{phrase.phraseAuthor}</Box>
      </Text>

      <ModalCard
        isOpen= {isOpen}
        onClose={onClose}
        phrase= {phrase.phraseText}
        author= {phrase.phraseAuthor}
      />
    </Box>
  );
};
