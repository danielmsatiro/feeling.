import { Box, Flex, IconButton, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { MdOutlineFavorite, MdQuestionAnswer } from "react-icons/md";
import { ModalCard } from "../../components/Modal/ModalCard";
import { usePhrases } from "../../provider/PhrasesContext";
import { useAuth } from "../../provider/AuthContext";

export const SearchCard = ({ phrase }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {addMyFavorite} = usePhrases()
  const { user } = useAuth()

  return (
    <Flex
        key={phrase.id}
        w={["300px", "300px", "300px", "300px"]}
        h="250px"
        maxH="300px"
        bg="yellow.200"
        direction={"column"}
        borderRadius={"20px"}
        justifyContent="space-between"
    >
          <Flex 
            flexDirection="column"
          >
            <Text
                fontSize={["md", "lg", "lg", "xl"]}
                fontWeight={"light"}
                lineHeight="30px"
                textAlign={"left"}
                fontStyle={"normal"}
                padding={["10%", "7%", "7%", "6%"]}
                h="145px"
                minH="145px"
                whiteSpace="wrap" 
                overflow="hidden"   
                textOverflow="ellipsis"
                onClick={onOpen}
                cursor="pointer"
                _hover={{
                color:"orange.500"
                }}
            >
                {phrase.phraseText}
            </Text>
            <Text
                color="orange.500"
                fontWeight={"500"}
                fontSize={["md", "lg", "lg", "xl"]}
                lineHeight={["40px", "40px", "40px", "54px"]}
                textAlign={"left"}
                paddingBottom={"7%"}
                ml="15px"
                whiteSpace="nowrap" 
                overflow="hidden"   
                textOverflow="ellipsis"
            >
                {phrase.phraseAuthor}
            </Text>
        </Flex>

        <Flex
            bg="yellow.500"
            color="orange.500"
            borderRadius="0 0 20px 20px"
            h="40px"
            minH="40px"
            justifyContent="space-between"
            padding="0 20px"
            alignItems="center"
        >
            <MdOutlineFavorite 
                size="1.7rem" 
                cursor="pointer"
                onClick={() => {
                    addMyFavorite(
                      phrase.id,
                      user.id
                    )
                  }}
            />
            
            <MdQuestionAnswer size="1.7rem"/>
        </Flex>

        <ModalCard
            isOpen= {isOpen}
            onClose={onClose}
            phrase= {phrase.phraseText}
            author= {phrase.phraseAuthor}
        />
    </Flex>
  )
}