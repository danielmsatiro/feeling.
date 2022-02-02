import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
import { useAuth } from "../AuthContext";

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

  const getMyComments = () => {
    api
      .get(`comments?userId=${user.id}&_expand=phrase`)
      .then((res) => setMyComments(res.data));
  };

  useEffect(() => {
    getMyComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      });
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
      .then(onClose);
  };

  return (
    <CommentsContext.Provider
      value={{
        myComments,
        deleteMyComments,
        UpdateComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { useComments, CommentsProvider };
