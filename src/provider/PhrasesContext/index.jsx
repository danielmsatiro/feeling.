import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";

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

  useEffect(() => {
    loadPhrases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPhrases = useCallback(async () => {
    try {
      const response = await api.get(
        `phrases?_embed=comments&_embed=users_who_like`
      );
      console.log(response.data);

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

  return (
    <PhraseContext.Provider
      value={{
        phrases,
        loadPhrases,
        searchPhrase,
        notFound,
        contentSearch,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};

export { usePhrases, PhraseProvider };
