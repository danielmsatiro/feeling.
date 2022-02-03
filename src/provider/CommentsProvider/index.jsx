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
/* import { useParams } from "react-router-dom"; */

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
  const { phrases, loadPhrases } = usePhrases([]);
  /* const [comments, setComments] = useState([]); */
  const [fraseComments, setFraseComments] = useState([]);
  const toast = useToast();

  const [randomId, setRandomId] = useState(() => {
    const randomId = localStorage.getItem("@Feeling: randomId");
    if (randomId) {
      return randomId;
    }
    return "";
  });

  const getMyComments = useCallback(async () => {
    try {
      const response = await api.get(
        `comments?userId=${user.id}&_expand=phrase`,
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
  }, []);

  useEffect(() => {
    getMyComments();
  }, [phrases]);

  const deleteMyComments = (commentId) => {
    api
      .delete(`comments/${commentId}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        loadPhrases();
      })
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

  const UpdateComment = (commentId, value, onClose) => {
    api
      .patch(`comments/${commentId}`, value, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        loadPhrases();
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

  const RandomPhrase = () => {
    const random = Math.floor(Math.random() * phrases.length + 1);
    setRandomId(random);
    localStorage.setItem("@Feeling: randomId", random);

    /* const phrase = phrases.find((item) => item.id === randomId);
    if (phrase) {
      setFrase(phrase);
    } */
  };

  if (!randomId) {
    RandomPhrase();
  }

  /* const GetComments = useCallback(async () => {
    try {
      const response = await api.get(`comments?_expand=phrase&_expand=user`);
      setComments(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
 */
  /* useEffect(() => {
    GetComments();
    // RandomPhrase();
    PhraseComments();
  }, [phrases]);
 */
  /* const PhraseComments = (id) => {
    try {
      const comentario = comments.filter((item) => item.phraseId === id);
      console.log(comentario);
      setFraseComments(comentario);
    } catch (err) {
      console.log(err);
    }
  };
 */
  const AddComment = useCallback(async (data) => {
    const id = data.phraseId;
    try {
      const response = await api.post(`comments/`, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      // PhraseComments(id);
      loadPhrases();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        myComments,
        fraseComments,
        deleteMyComments,
        UpdateComment,
        AddComment,
        /* PhraseComments, */
        /*  GetComments, */
        RandomPhrase,
        randomId,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { useComments, CommentsProvider };
