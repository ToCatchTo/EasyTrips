import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>aaa</Box>
    </ThemeProvider>
  );
}

export default App;