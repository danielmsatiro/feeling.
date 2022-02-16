import { Flex, Text, Tooltip, Link, Box } from "@chakra-ui/react";
import { MdModeEdit, MdRestoreFromTrash } from "react-icons/md";
import { useComments } from "../../provider/CommentsProvider";
import { useDisclosure } from "@chakra-ui/react";
import { EditComment } from "../../components/Modal/EditComment";
import { useAuth } from "../../provider/AuthContext";
import { useHistory } from "react-router";

export const MyCommentCard = ({
  comment,
  date,
  commentId,
  idPhrase,
  phrase,
}) => {
  const { getMyComments, deleteMyComments } = useComments();
  const { user, accessToken } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  return (
    <Flex
      w="90vw"
      maxW="700px"
      //minW="320px"
      m="5px 0"
      bg="yellow.200"
      padding="10px 20px"
      borderRadius="15px"
      border="solid 2px"
      borderColor="yellow.500"
      cursor="pointer"
      color="orange.500"
      justifyContent="space-between"
      _hover={{
        borderTop: "solid 1px",
        borderRight: "solid 1px",
        borderLeft: "solid 3px",
        borderBottom: "solid 4px",
        transition: "0.3s",
        borderColor: "yellow.500",
      }}
      css={{
        "&:not(:hover)": {
          transition: "0.3s",
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
              <br />
              <p>
                <strong>Frase: </strong> {phrase}
              </p>
            </>
          }
        >
          <Text>{comment}</Text>
        </Tooltip>

        <Text fontSize="xs">{date}</Text>
      </Flex>

      <Flex flexDirection="column" justifyContent="space-between" minW="65px">
        <Flex justifyContent="space-between">
          <Tooltip label={"Editar"}>
            <Box>
              <MdModeEdit size="1.3rem" onClick={onOpen} />
            </Box>
          </Tooltip>
          <Tooltip label={"Excluir"}>
            <Box>
              <MdRestoreFromTrash
                size="1.3rem"
                onClick={() => {
                  deleteMyComments(commentId, accessToken);
                  getMyComments(user.id, accessToken);
                }}
              />
            </Box>
          </Tooltip>
        </Flex>
        <Tooltip label={"Comentários da galera"}>
          <Link
            fontSize="xs"
            onClick={() => history.push(`/comments/${idPhrase}`)}
            mt="5px"
          >
            Comentários
          </Link>
        </Tooltip>
      </Flex>

      <EditComment
        isOpen={isOpen}
        onClose={onClose}
        comment={comment}
        commentId={commentId}
      />
    </Flex>
  );
};
