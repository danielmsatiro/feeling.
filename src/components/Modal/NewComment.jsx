import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../provider/AuthContext";
import { useComments } from "../../provider/CommentsProvider";

export const NewComment = ({ isOpen, onClose, id }) => {
  const { user } = useAuth();
  const { /* frase, */ AddComment } = useComments();
  const [value, setValue] = useState({});

  const handleClick = () => {
    AddComment(value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent h="auto" w={["250px", "250px", "500px", "700px"]}>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h="50px"
          bg="yellow.200"
          borderTopRadius="lg"
        >
          <Text>Novo comentário</Text>
          <Text
            as="button"
            onClick={onClose}
            fontWeight="bold"
            color={["orange.500"]}
          >
            X
          </Text>
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
            Entre no debate:
          </Text>
          <Textarea
            textAlign="left"
            placeholder="Escreva aqui"
            _placeholder={{ color: "orange.500" }}
            bg="yellow.200"
            _focus={{ border: "2px", borderColor: "orange.500" }}
            onChange={(event) =>
              setValue({
                phraseId: id,
                userId: user.id,
                commentText: event.target.value,
              })
            }
            minH={150}
          />
        </ModalBody>
        <ModalFooter h={["100px"]} justifyContent="center">
          <Button
            type="submit"
            bg="orange.500"
            color="yellow.50"
            h="30px"
            w="200px"
            borderRadius="30px"
            onClick={() => handleClick()}
          >
            Postar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
