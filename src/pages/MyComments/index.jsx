import { Flex, Text, Heading, useDisclosure, Box } from "@chakra-ui/react";
import { MyCommentCard } from "../../components/Card/MyCommentCard";
import { Header } from "../../components/Header";
import { useComments } from "../../provider/CommentsProvider";
import { ModalCard } from "../../components/Modal/ModalCard";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const HeadingMotion = motion(Heading);

export const MyComments = () => {
  const { myComments } = useComments();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Header />

      <Flex flexDirection="column" alignItems="center" m="0 20px">
        <HeadingMotion
          animate={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ x: -50, opacity: 0 }}
          m="40px 0px"
        >
          Comentários feitos por{" "}
          <Text as="span" color="orange.500">
            mim!
          </Text>
        </HeadingMotion>

        <FlexMotion
          animate={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ x: 50, opacity: 0 }}
          flexDirection="column"
          alignItems="center"
        >
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
        </FlexMotion>
      </Flex>
    </Box>
  );
};
