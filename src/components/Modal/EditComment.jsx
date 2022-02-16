import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../provider/AuthContext";
import { usePhrases } from "../../provider/PhrasesContext";

export const EditComment = ({ isOpen, onClose, comment, commentId }) => {
  const [editedComment, setEditedComment] = useState({ commentText: "" });
  const { loadPhrases, UpdateComment } = usePhrases();
  const { user, accessToken } = useAuth();

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent h="auto" w={["300px", "300px", "500px", "auto"]}>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h="50px"
          bg="yellow.200"
          borderTopRadius="lg"
        >
          <Text>Editar Comentário</Text>
          <ModalCloseButton onClick={onClose} color={["orange.500"]} />
        </ModalHeader>
        <ModalBody
          minH="200px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt={50}
        >
          <Text w="100%" textAlign="left" fontWeight="bold" pb={2}>
            Mude suas palavras:
          </Text>
          <Textarea
            resize="none"
            textAlign="left"
            placeholder="Escreva aqui"
            _placeholder={{ color: "orange.500" }}
            bg="yellow.200"
            _focus={{ border: "2px", borderColor: "orange.500" }}
            onChange={(event) =>
              setEditedComment({ commentText: event.target.value })
            }
            defaultValue={comment}
            minH={150}
          />
        </ModalBody>
        <ModalFooter h={["100px"]} justifyContent="center">
          <Button
            bg="orange.500"
            color="yellow.50"
            h="30px"
            w="200px"
            borderRadius="30px"
            onClick={() => {
              UpdateComment(
                user.id,
                commentId,
                editedComment,
                onClose,
                accessToken
              );
            }}
          >
            Postar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
