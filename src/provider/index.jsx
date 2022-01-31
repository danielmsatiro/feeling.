import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { PhraseProvider } from "./PhrasesContext";

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <PhraseProvider>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </PhraseProvider>
    </AuthProvider>
  );
};
