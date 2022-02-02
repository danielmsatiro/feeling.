import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
import { useAuth } from "../AuthContext";
import { usePhrases } from "../PhrasesContext";
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
  const { user, accessToken } = useAuth();
  const [myComments, setMyComments] = useState([]);
  const { phrases } = usePhrases([]);
  const [frase, setFrase] = useState({});
  const [comments, setComments] = useState([]);
  const [fraseComments, setFraseComments] = useState([]);
  const toast = useToast()

  const getMyComments = useCallback(async () => {
    try{
    const response = await api.get(
        `comments?userId=${user && user.id}&_expand=phrase`
        )
        setMyComments(response)
    }
    catch (err) {
    console.log(err);
  }
  }, [])

  useEffect(() => {
    getMyComments();
  }, []);

  const deleteMyComments = (commentId) => {
    api
      .delete(`comments/${commentId}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        getMyComments();
      }).then(
        toast({
          title: 'Comentário deletado',
          description: "Fica ranquilo! Você apagou o que queria",
          status: 'info',
          duration: 3000,
          position: 'top-right'
        })
      )
  };

  const UpdateComment = (commentId, value, onClose) => {
    api
      .patch(`comments/${commentId}`, value, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        getMyComments();
      })
      .then(onClose).then(
        toast({
          title: 'Comentário alterado',
          description: "Fica ranquilo! Agora você disse o que queria.",
          status: 'success',
          duration: 3000,
          position: 'top-right'
        })
      )
  };

  const RandomPhrase = () => {
    const randomId = Math.floor(Math.random() * 97 + 1);
    const phrase = phrases.find((item) => item.id === randomId);
    if (phrase) {
      setFrase(phrase);
    }
  };

  const GetComments = useCallback(async () => {
    try {
      const response = await api.get(`comments?_expand=phrase&_expand=user`);
      setComments(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    GetComments();
    RandomPhrase();
    PhraseComments();
  }, [phrases]);

  const PhraseComments = (id) => {
    try {
      const comentario = comments.filter((item) => item.phraseId === id);
      console.log(comentario);
      setFraseComments(comentario);
    } catch (err) {
      console.log(err);
    }
  };

  const AddComment = useCallback(async (data) => {
    const id = data.phraseId;
    console.log(data.phraseId);
    try {
      const response = await api.post(`comments/`, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      PhraseComments(id);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        frase,
        myComments,
        fraseComments,
        deleteMyComments,
        UpdateComment,
        AddComment,
        PhraseComments,
        GetComments,
        RandomPhrase,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { useComments, CommentsProvider };
