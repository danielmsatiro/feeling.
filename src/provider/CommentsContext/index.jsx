import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
// import { useAuth } from "../AuthContext";
// import { usePhrases } from "../PhrasesContext";

const CommentsContext = createContext({});

const useComments = () => {
  const context = useContext(CommentsContext);

  if (!context) {
    throw new Error("useComments must be used within an CommentsProvider");
  }
  return context;
};

const CommentsProvider = ({ children }) => {
  // const { user, usuarios, GetUsers } = useAuth();
  // const { phrases } = usePhrases([]);
  const [comments, setComments] = useState([]);
  const [fraseComments, setFraseComments] = useState([]);
  // const [notFound, setNotFound] = useState(false);
  // const [contentNotFound, setcontentNotFound] = useState("");

  useEffect(() => {
    GetComments();
    // PhraseComments();
    // GetUsers();
  }, []);

  const GetComments = useCallback(async () => {
    try {
      const response = await api.get(`comments?_expand=phrase&_expand=user`);
      console.log(response.data);
      setComments(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // const Usuario = () => {
  //   try {
  //     const usuario = phrases.find
  //   } catch (error) {

  //   }
  // }
  // useEffect(() => GetUsers());

  const PhraseComments = (id) => {
    try {
      const comentario = comments.filter((item) => item.phraseId === id);
      console.log(comentario);
      setFraseComments(comentario);
    } catch (err) {
      console.log(err);
    }
  };

  const AddComment = (data) => {
    console.log(data);
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        fraseComments,
        GetComments,
        PhraseComments,
        AddComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { useComments, CommentsProvider };
