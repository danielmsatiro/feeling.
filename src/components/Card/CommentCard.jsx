import {
  Box,
  Flex,
  Heading,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { MdModeEdit, MdRestoreFromTrash } from "react-icons/md";
import { useAuth } from "../../provider/AuthContext";
import { useComments } from "../../provider/CommentsProvider";
import { usePhrases } from "../../provider/PhrasesContext";
import { EditComment } from "../Modal/EditComment";

export const CommentCard = ({ comment, commentId, userId }) => {
  const { users, user, accessToken } = useAuth();
  const { deleteMyComments, getMyComments } = useComments();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loadPhrases } = usePhrases();

  return (
    <Flex
      w={["300px", "320px", "600px", "750px"]}
      bg="yellow.200"
      borderRadius="15px"
      transition={["500ms"]}
      border="2px"
      borderColor="yellow.500"
      mt={["30px"]}
      flexDirection="column"
    >
      <Flex
        color="orange.500"
        bgColor="white"
        borderRadius="12px 12px 0 0"
        padding="10px"
        flexDirection={["row", "row", "row"]}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Heading size="md" fontWeight="medium" textAlign="left" flex={1}>
          {users?.find(({ id }) => id === userId)?.name}
        </Heading>
        {/* userId is the owner of the comment and user.id
          is the logged user */}
        {user.id === userId && (
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
                    loadPhrases();
                  }}
                />
              </Box>
            </Tooltip>
          </Flex>
        )}
      </Flex>
      <Flex
        w="100%"
        padding="20px"
        flexDirection={["column", "row", "row", "row"]}
        alignItems={["center"]}
        justifyContent={["flex-start"]}
      >
        <Text
          fontWeight="light"
          fontSize="lg"
          w={["100%", "75%", "75%", "75%"]}
        >
          {comment}
        </Text>
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
