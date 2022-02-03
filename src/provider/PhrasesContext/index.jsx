import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
import { useAuth } from "../AuthContext";
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
  const {accessToken, user} = useAuth()
  const toast = useToast()

  useEffect(() => {
    loadPhrases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPhrases = useCallback(async () => {
    try {
      const response = await api.get(
        `phrases?_embed=comments&_embed=users_who_like`
      );

      setPhrases(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const searchPhrase = useCallback(async (textOrAuthor) => {
    const responseText = await api.get(
      `phrases?phraseText_like=${textOrAuthor}`
    );
    setContentSearch(textOrAuthor);

    if (!responseText.data.length) {
      setNotFound(true);
    } else {
      setNotFound(false);
      return setPhrases(responseText.data);
    }

    const responseAuthor = await api.get(
      `phrases?phraseAuthor_like=${textOrAuthor}`
    );

    if (!!responseAuthor.data.length) {
      setNotFound(false);
      setPhrases(responseAuthor.data);
    }
  }, []);

  const addMyFavorite = (phraseIdGet, userIdGet) => {

    const findPhrase = (phrases[phraseIdGet - 1]
      .users_who_like
      .some(({userId}) => userId === user.id ) )
    console.log(findPhrase)

    if(!findPhrase){
      api
        .post(`users_who_like`, {
          userId: userIdGet,
          phraseId: phraseIdGet
        }, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          loadPhrases();
        }).then(
          toast({
            title: 'Adicionou aos meus favoritos',
            description: "Agora você tem mais uma frase no seu acervo",
            status: 'info',
            duration: 3000,
            position: 'top-right'
          })
        )
      }
  };

    const deleteMyFavorite = (phraseIdCard) => {
      const IdFavorite = phrases[phraseIdCard - 1]
        .users_who_like
        .find(({userId}) => userId === user.id )?.id        
      
      api
        .delete(`users_who_like/${IdFavorite}`, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          loadPhrases();
        })
        .then(
          toast({
            title: 'Excluido dos meus favoritos',
            description: "Agora você tem menos uma frase no seu acervo",
            status: 'info',
            duration: 3000,
            position: 'top-right'
          })
        )
    }  

    return (
      <PhraseContext.Provider
      value={{
        phrases,
        loadPhrases,
        searchPhrase,
        notFound,
        contentSearch,
        addMyFavorite,
        deleteMyFavorite
      }}
      >
      {children}
    </PhraseContext.Provider>
  );
};

export { usePhrases, PhraseProvider };
