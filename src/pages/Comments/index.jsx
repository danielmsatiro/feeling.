import { useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { NewComment } from "../../components/Modal/NewComment";
import { FellasComments } from "./FellasComments";

export const Comments = () => {
  const {
    isOpen: isNewCommentOpen,
    onOpen: onNewCommentOpen,
    onClose: onNewCommentClose,
  } = useDisclosure();

  const params = useParams();

  return (
    <>
      <NewComment
        isOpen={isNewCommentOpen}
        onClose={() => onNewCommentClose()}
        id={Number(params.id)}
      />

      <FellasComments onOpen={() => onNewCommentOpen()} />
    </>
  );
};
