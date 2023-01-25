import { createTheme } from '@mui/material/styles';


export const themeMi = createTheme({
    palette: {
        primary: {
            main: "#c79a55",
        },
        secondary: {
            main: '#132f40',
        },
    },
    breakpoints: {
        values: {
            xxs: 0, // small phone
            xs: 300, // phone
            sm: 600, // tablets
            md: 900, // small laptop
            lg: 1200, // desktop
            xl: 1536 // large screens
        }
    },
    // typography: {
    //     fontFamily: 'Gilroy',
    // },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //         @font-face {
    //           font-family: 'Gilroy';
    //           font-style: normal;
    //           font-display: swap;
    //           font-weight: 500;
    //           src: local('Gilroy'), local('Gilroy-Regular'), url(${GilroyMediumWoff2}) format('woff');
    //           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //         }
    //       `,
    //     },
    // },
});
