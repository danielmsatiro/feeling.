import { Flex, Text, Box } from "@chakra-ui/react"
import {MdModeEdit, MdRestoreFromTrash } from "react-icons/md"
import { api } from "../../services/api"

export const MyCommentCard = ({phrase, date, commentId, onOpen}) => {

    const deleteMyComments = () => {
        api.delete(`comments/${commentId}`)
    }

    return (
        <Flex 
            w="100%"
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
                    <MdModeEdit size="1.3rem"/>

                    <MdRestoreFromTrash size="1.3rem" onClick={() => deleteMyComments()}/>
                </Flex>

                <Text fontSize="xs" onClick={onOpen}>Ver a frase</Text>
            </Flex>
        </Flex>
    )
}