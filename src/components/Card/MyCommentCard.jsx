import { Flex, Text, Tooltip, Link, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EditComment } from "../../components/Modal/EditComment";
import { useAuth } from "../../provider/AuthContext";
import { useHistory } from "react-router";
import { usePhrases } from "../../provider/PhrasesContext";

import { motion, useAnimation } from "framer-motion";

const FlexMotion = motion(Flex);

export const MyCommentCard = ({
  comment,
  date,
  commentId,
  idPhrase,
  phrase,
}) => {
  const { deleteMyComments } = usePhrases();
  const { user, accessToken } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const controls = useAnimation();

  return (
    <FlexMotion
      animate={controls}
      flexDirection={["column", "row"]}
      w="90vw"
      maxW="700px"
      m="5px 0"
      bg="white"
      padding="10px 20px"
      borderRadius="15px"
      border="solid 2px"
      borderColor="black"
      cursor="pointer"
      color="orange.500"
      justifyContent="space-between"
      _hover={{
        transition: "0.2s",
        borderColor: "black",
        transform: "translate(3px, -3px)",
        boxShadow: "-5px 5px black",
      }}
      css={{
        "&:not(:hover)": {
          transition: "0.2s",
        },
      }}
    >
      <Flex flexDirection="column" color="black" justifyContent="space-between">
        <Tooltip
          label={
            <>
              <p>
                <strong>Comentário: </strong> {comment}
              </p>
              <p>
                <strong>Frase: </strong> {phrase}
              </p>
            </>
          }
          placement={"top"}
        >
          <Text
            maxW="550px"
            minW="220px"
            w="100%"
            mb="15px"
            fontStyle="italic"
            isTruncated
            fontWeight="light"
          >
            {comment}
          </Text>
        </Tooltip>

        <Text fontSize="xs">{date}</Text>

        <Link
          fontSize="xs"
          color="orange.500"
          onClick={() => history.push(`/comments/${idPhrase}`)}
        >
          Ir para comentários da Galera
        </Link>
      </Flex>

      <Flex flexDirection="column" justifyContent="space-between" minW="65px">
        <Flex flexDirection="column">
          <Button
            onClick={onOpen}
            h="30px"
            m="5px 0"
            fontSize="xs"
            color="black"
            bgColor="white"
            border="2px solid"
            borderColor="black"
            _hover={{ bgColor: "black", color: "white" }}
          >
            Editar
          </Button>
          <Button
            onClick={() => {
              deleteMyComments(user.id, commentId, accessToken);
              controls.start((i) => ({
                opacity: [1, 0],
                x: [0, 20],
                transition: {
                  duration: 0.5,
                },
              }));
            }}
            h="30px"
            fontSize="xs"
            color="red.400"
            bgColor="white"
            border="2px solid"
            borderColor="red.400"
            _hover={{ bgColor: "red.400", color: "white" }}
          >
            Excluir
          </Button>
        </Flex>
      </Flex>

      <EditComment
        isOpen={isOpen}
        onClose={onClose}
        comment={comment}
        commentId={commentId}
      />
    </FlexMotion>
  );
};
