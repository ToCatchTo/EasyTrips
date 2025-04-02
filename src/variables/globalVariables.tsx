import { createTheme } from "@mui/material";

export const colors = {
    background: '#F5F5DC',
    primary: '#265C75',
    primaryDarker: '#193D4D',
    secondary: '#B34C37',
    secondaryDarker: '#9C4230',
    text: '#F5F5DC',
    textReverse: '#23282f',
    componentBackground: '#E9E9E9'
}

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 480,
            sm: 640,
            md: 960,
            lg: 1280,
            xl: 1500,
        },
    },
});