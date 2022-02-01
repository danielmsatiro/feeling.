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
  const [contentNotFound, setcontentNotFound] = useState("");

  useEffect(() => {
    loadPhrases();
  }, []);

  const loadPhrases = useCallback(async () => {
    try {
      const response = await api.get(`phrases`);
      setPhrases(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const searchPhrase = useCallback(async (textOrAuthor) => {
    const responseText = await api.get(`phrases?text_like=${textOrAuthor}`);

    if (!responseText.data.length) {
      setcontentNotFound(textOrAuthor);
      setNotFound(true);
    } else {
      setNotFound(false);
      return setPhrases(responseText.data);
    }

    const responseAuthor = await api.get(`phrases?author_like=${textOrAuthor}`);

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
        contentNotFound,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};

export { usePhrases, PhraseProvider };
