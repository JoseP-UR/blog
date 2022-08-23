import { extendTheme } from '@chakra-ui/react'

// example theme
export const theme = {
    config: {
        blogTitle: 'Jose Paulo Urives Rosa',
        avatar: 'https://i.pravatar.cc/300',
        downloadButton: true,
        initialColorMode: 'light',
        useSystemColorMode: false,
        header: {
            menu: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About',
                    path: '/about'
                },
            ]
        }
    },
    fonts: {
    },
    colors:{
    },
    fontSizes: {
    },
    fontWeights: {
    },
    lineHeights: {
    },
    letterSpacings: {
    },
};

export default extendTheme(theme);