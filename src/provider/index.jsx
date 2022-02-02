import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { PhraseProvider } from "./PhrasesContext";
import { CommentsProvider } from "./CommentsProvider";

export const Provider = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <PhraseProvider>
          <CommentsProvider>
              {children}
          </CommentsProvider>
        </PhraseProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
