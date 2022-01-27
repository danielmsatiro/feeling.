import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

export const Providers = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};
