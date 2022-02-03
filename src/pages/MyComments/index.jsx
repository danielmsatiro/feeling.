import { Flex, Text, Heading, useDisclosure, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MyCommentCard } from "../../components/Card/MyCommentCard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useComments } from "../../provider/CommentsProvider";
import { ModalCard } from "../../components/Modal/ModalCard";
import { useAuth } from "../../provider/AuthContext";

export const MyComments = () => {
  const { myComments } = useComments();

  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(myComments);

  return (
    <Box>
      <Header />

      <Flex flexDirection="column" padding="0px 20px" maxW="800px" m="0 auto">
        <Flex w="100%">
          <Heading m="40px 0px">
            Comentários feitos por{" "}
            <Text as="abbr" color="orange.500">
              mim!
            </Text>
          </Heading>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          {myComments.length > 0 ? (
            myComments.map((comment) => (
              <Box key={comment.id} w="100%">
                <MyCommentCard
                  phrase={comment.commentText}
                  date={comment.date}
                  commentId={comment.id}
                  onOpenPhrase={onOpen}
                />
                <ModalCard
                  isOpen={isOpen}
                  onClose={onClose}
                  phrase={comment.phrase.phraseText}
                  author={comment.phrase.phraseAuthor}
                />
              </Box>
            ))
          ) : (
            <Heading fontSize="xl" fontWeight="light" alignSelf="flex-start">
              Você não possui comentários
            </Heading>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
