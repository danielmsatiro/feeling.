import { Flex, Text, Heading, useDisclosure, Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { MyCommentCard } from "../../components/Card/MyCommentCard"
import { Header } from "../../components/Header"
import { api } from "../../services/api"
import { useAuth } from "../../provider/AuthContext"
import { ModalCard } from "../../components/Card/ModalCard"

export const MyComments = () => {

    const {user} = useAuth()
    const [myComments, setMyComments] = useState([])

    const {isOpen, onOpen, onClose} = useDisclosure()

    const getMyComments = () => {
        api.get(`comments?userId=${user.id}&_expand=phrase`).then((res) => setMyComments(res.data))
    }

    useEffect(() => {
        getMyComments()
    }, [])

    return (
        <>
            <Header />

            <Flex flexDirection="column" padding="0px 20px">
                <Flex>
                    <Heading m="40px 0px">
                        Comentários feitos por <Text as="abbr" color="orange.500">mim!</Text>
                    </Heading>
                </Flex>

                <Flex flexDirection="column" alignItems="center">
                    {   myComments.length > 0 ? (
                        myComments.map((comment) => (
                            <Box 
                            key={comment.id} w="100%">
                            <MyCommentCard 
                                phrase={comment.commentphraseText}
                                date={comment.date}
                                commentId={comment.id}
                                onOpen={onOpen}
                            />
                            <ModalCard 
                                isOpen={isOpen} 
                                onClose={onClose} 
                                phrase={comment.phrase.phraseText}
                                author={comment.phrase.phraseAuthor}
                            />
                            </Box>
                        ))) :
                        (
                        <Heading fontSize="xl" fontWeight="light">Você não possui comentários</Heading>
                        )
                    }
                </Flex>
            </Flex>   
        </>
    )
} 