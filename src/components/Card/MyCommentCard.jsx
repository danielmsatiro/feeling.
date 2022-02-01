import { Flex, Text, Box } from "@chakra-ui/react"
import {MdModeEdit, MdRestoreFromTrash } from "react-icons/md"
import { api } from "../../services/api"
import { useDisclosure } from "@chakra-ui/react"

import {EditComment} from "../../components/Modal/EditComment"

export const MyCommentCard = ({phrase, date, commentId, onOpenPhrase, comment}) => {

    const deleteMyComments = () => {
        api.delete(`comments/${commentId}`)
    }

    const {
        isOpen, 
        onOpen,
        onClose, 
    } = useDisclosure()


    return (
        <Flex 
            w="90vw"
            maxW="700px"
            minW="320px"
            m="5px 0"
            bg="yellow.200"
            padding="10px 20px"
            borderRadius="15px"
            border="solid 2px"
            borderColor="orange.500"
            cursor="pointer"
            color="orange.500"
            justifyContent="space-between"
            minH="90px"
            _hover={{
                background: "orange.500",
                color: "white"
            }}
        >
            <Flex 
                flexDirection="column"
                color="black"
                justifyContent="space-between"
            >
                <Box>
                    <Text 
                        maxW="550px"
                        minW="220px"
                        w="100%"
                        whiteSpace="nowrap" 
                        overflow="hidden"   
                        textOverflow="ellipsis"
                        fontWeight="light"
                    >
                        {phrase}
                    </Text>
                </Box>                

                <Text fontSize="sm" fontWeight="semibold">{date}</Text>
            </Flex>

            <Flex flexDirection="column" justifyContent="space-between" minW="65px">
                <Flex justifyContent="space-between" >
                    <MdModeEdit size="1.3rem" onClick={onOpen}/>

                    <MdRestoreFromTrash size="1.3rem" onClick={() => deleteMyComments()}/>
                </Flex>

                <Text fontSize="xs" onClick={onOpenPhrase}>Ver a frase</Text>
            </Flex>

            <EditComment
                isOpen={isOpen}
                onClose={onClose}
                comment={phrase}
            />
        </Flex>
    )
}