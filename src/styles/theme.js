import {extendTheme, theme as ChakraTheme} from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        orange: {
            500: '#EC6226',
        },
        yellow: {
            500:  '#FFB433',
            200:  '#FDEBAA',
            50:   '#FFF7D9'
        },
        red:{
            600: '#df1245',
            50:  '#FAD6C7'
        },
        green: {
            600: '#168821',
        },
        fonts: {
            heading: 'Poppins',
            body: 'Poppins',
        },
        fontSizes: {
            xs:     '0.75rem',
            sm:     '0.875rem',
            md:     '1rem',
            lg:     '1.125rem',
            xl:     '1.25rem',
            '2xl':  '1.5rem',
            '3xl':  '1.875rem',
            '4xl':  '2.25rem',
            '5xl':  '3rem',
            '6xl':  '3.75rem',
            '7xl':  '4.5rem',
            '8xl':  '6rem',
            '9xl':  '8rem',
        },
        styles: {
            global: {
                bg: '#FFF7D9',
                color: 'black',
            }
        }
    }
})