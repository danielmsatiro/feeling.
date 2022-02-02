import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { PhraseProvider } from "./PhrasesContext";
import { CommentsProvider } from "./CommentsProvider";

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <PhraseProvider>
        <CommentsProvider>
          <ChakraProvider resetCSS theme={theme}>
            {children}
          </ChakraProvider>
        </CommentsProvider>
      </PhraseProvider>
    </AuthProvider>
  );
};
