import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"

export const Providers = ({children}) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}