import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useToast } from "@chakra-ui/react";

const CommentsContext = createContext({});

const useComments = () => {
  const context = useContext(CommentsContext);

  if (!context) {
    throw new Error("usePhrases must be used within an CommentsProvider");
  }
  return context;
};

const CommentsProvider = ({ children }) => {
  const [myComments, setMyComments] = useState([]);
  const toast = useToast();

  const getMyComments = async (userId, accessToken) => {
    if (!!accessToken) {
      try {
        const response = await api.get(
          `comments?userId=${userId}&_expand=phrase`,
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setMyComments(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteMyComments = (commentId, accessToken) => {
    api
      .delete(`comments/${commentId}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      /* .then((_) => {
        loadPhrases();
      }) */
      .then(
        toast({
          title: "Comentário deletado",
          description: "Fica tranquilo! Você apagou o que queria",
          status: "info",
          duration: 3000,
          position: "top-right",
        })
      );
  };

  const UpdateComment = (commentId, value, onClose, accessToken) => {
    api
      .patch(`comments/${commentId}`, value, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then(onClose)
      .then(
        toast({
          title: "Comentário alterado",
          description: "Fica tranquilo! Agora você disse o que queria.",
          status: "success",
          duration: 3000,
          position: "top-right",
        })
      );
  };

  const AddComment = async (data, accessToken) => {
    try {
      await api.post(`comments/`, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        myComments,
        getMyComments,
        deleteMyComments,
        UpdateComment,
        AddComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { useComments, CommentsProvider };
