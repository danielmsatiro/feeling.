import { useDisclosure } from "@chakra-ui/react";
import { NewComment } from "../../components/Modal/NewComment";
import { FellasComments } from "./FellasComments";

export const Comments = () => {
  const {
    isOpen: isNewCommentOpen,
    onOpen: onNewCommentOpen,
    onClose: onNewCommentClose,
  } = useDisclosure();

  return (
    <>
      <NewComment
        isOpen={isNewCommentOpen}
        onClose={() => onNewCommentClose()}
      />

      <FellasComments onOpen={() => onNewCommentOpen()} />
    </>
  );
};
