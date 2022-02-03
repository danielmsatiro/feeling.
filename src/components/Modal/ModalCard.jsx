import { Flex, Modal, ModalContent, ModalOverlay, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {MdOutlineClear} from "react-icons/md"
import { api } from "../../services/api"

export const ModalCard = ({phrase, author, isOpen, onClose, phraseId}) => {

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            isCentered={true}
        >
            <ModalOverlay/>
            <ModalContent 
                display="flex"
                w="280px" 
                flexDirection="column" 
                bg="yellow.200"
                p="20px"
                borderRadius="15px"
            >
                    <Flex 
                        alignSelf="flex-end" 
                        color="orange.500"
                        onClick={onClose}
                        cursor="pointer"
                    >
                        <MdOutlineClear size="1.5rem"/>
                    </Flex>

                    <Text m="20px 0px">
                        {phrase}
                    </Text>

                    <Text color="orange.500"> 
                        {author}
                    </Text>
            </ModalContent>
        </Modal>
    )
}