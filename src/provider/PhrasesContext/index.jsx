import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../../services/api";
import { useToast } from "@chakra-ui/react";

const PhraseContext = createContext({});

const usePhrases = () => {
  const context = useContext(PhraseContext);

  if (!context) {
    throw new Error("usePhrases must be used within an PhraseProvider");
  }
  return context;
};

const PhraseProvider = ({ children }) => {
  const [phrases, setPhrases] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [contentSearch, setContentSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [myComments, setMyComments] = useState([]);
  const toast = useToast();

  const loadPhrases = useCallback(async () => {
    try {
      const response = await api.get(
        `phrases?_embed=comments&_embed=users_who_like`
      );

      setPhrases(response.data);
    } catch (err) {}
  }, []);

  const searchPhrase = async (textOrAuthor) => {
    const responseText = await api.get(
      `phrases?phraseText_like=${textOrAuthor}&_embed=comments&_embed=users_who_like`
    );
    setContentSearch(textOrAuthor);

    if (!responseText.data.length) {
      setNotFound(true);
    } else {
      setNotFound(false);
      return setPhrases(responseText.data);
    }

    const responseAuthor = await api.get(
      `phrases?phraseAuthor_like=${textOrAuthor}&_embed=comments&_embed=users_who_like`
    );

    if (!!responseAuthor.data.length) {
      setNotFound(false);
      setPhrases(responseAuthor.data);
    }
  };

  const randomPhrase = () => {
    const random = Math.floor(Math.random() * phrases.length + 1);
    localStorage.setItem("@Feeling: randomId", random);
    return random;
  };

  const getMyFavoritePhrases = async (accessToken, userId) => {
    await api
      .get(`users_who_like?userId=${userId}&_expand=phrase`)
      .then((res) => setFavorites(res.data));
  };

  const addMyFavorite = (phraseIdGet, userIdGet, accessToken) => {
    const findPhrase = favorites.find((fav) => fav.phraseId === phraseIdGet);

    if (!findPhrase) {
      api
        .post(
          `users_who_like`,
          {
            userId: userIdGet,
            phraseId: phraseIdGet,
          },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((_) => {
          getMyFavoritePhrases(accessToken, userIdGet);
          loadPhrases();
        })
        .then(
          toast({
            title: "Adicionou aos meus favoritos",
            description: "Agora você tem mais uma frase no seu acervo",
            status: "info",
            duration: 3000,
            position: "top-right",
          })
        );
    }
  };

  const deleteMyFavorite = (phraseIdCard, userIdGet, accessToken) => {
    const IdFavorite = phrases[phraseIdCard - 1].users_who_like.find(
      ({ userId }) => userId === userIdGet
    )?.id;

    api
      .delete(`users_who_like/${IdFavorite}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        loadPhrases();
      })
      .then((_) => {
        getMyFavoritePhrases();
        loadPhrases();
      })
      .then(
        toast({
          title: "Excluido dos meus favoritos",
          description: "Agora você tem menos uma frase no seu acervo",
          status: "info",
          duration: 3000,
          position: "top-right",
        })
      );
  };

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

  const deleteMyComments = (userId, commentId, accessToken) => {
    api
      .delete(`comments/${commentId}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        loadPhrases();
        getMyComments(userId, accessToken);
        toast({
          title: "Comentário deletado",
          description: "Fica tranquilo! Você apagou o que queria",
          status: "info",
          duration: 3000,
          position: "top-right",
        });
      });
  };

  const UpdateComment = (userId, commentId, value, onClose, accessToken) => {
    api
      .patch(`comments/${commentId}`, value, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then(onClose)
      .then((_) => {
        loadPhrases();
        getMyComments(userId, accessToken);
        toast({
          title: "Comentário alterado",
          description: "Fica tranquilo! Agora você disse o que queria.",
          status: "success",
          duration: 3000,
          position: "top-right",
        });
      });
  };

  const AddComment = async (data, userId, accessToken) => {
    try {
      await api.post(`comments/`, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      loadPhrases();
      getMyComments(userId, accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PhraseContext.Provider
      value={{
        phrases,
        loadPhrases,
        searchPhrase,
        randomPhrase,
        notFound,
        contentSearch,
        addMyFavorite,
        deleteMyFavorite,
        myComments,
        getMyComments,
        deleteMyComments,
        UpdateComment,
        AddComment,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};

export { usePhrases, PhraseProvider };
