import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { PhraseProvider } from "./PhrasesContext";

export const Provider = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <PhraseProvider>{children}</PhraseProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
