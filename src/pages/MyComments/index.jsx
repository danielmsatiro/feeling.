import { Flex, Text, Heading } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { MyCommentCard } from "../../components/Card/MyCommentCard"
import { Header } from "../../components/Header"
import { api } from "../../services/api"
import { useAuth } from "../../provider/AuthContext"

export const MyComments = () => {

    const {user} = useAuth()
    const commentId = 1

    const userId = 1
    const [myComments, setMyComments] = useState([])

    const getMyComments = () => {
        api.get(`comments?userId=${userId}&_expand=phrase`).then((res) => setMyComments(res.data))
    }

    useEffect(() => {
        getMyComments()
    }, [])

    console.log(myComments)

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
                            <MyCommentCard 
                                key={comment.id}
                                phrase={comment.commentText}
                                date={comment.date}
                                commentId={comment.id}
                            />
                        ))) :
                        (
                        <Heading>Você não possui comentários</Heading>
                        )
                    }
                </Flex>
            </Flex>

        </>
    )
} 