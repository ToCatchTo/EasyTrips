import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#003580",
            light: "#0071C2",
        },
        secondary: {
            main: "#FEBB02",
        },
        background: {
            default: "#F5F5F5", // Light gray background
            paper: "#FFFFFF",
        },
        text: {
            primary: "#262626",
            secondary: "#0071C2",
        },
    },
});

export default theme;
