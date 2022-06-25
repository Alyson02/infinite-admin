import { createTheme, StylesProvider, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { corAviso, corPrimaria } from "./components/Ui/variaveis";

const theme = createTheme({
    palette: {
      primary: {
        main: `${corPrimaria}`
      },
      secondary: {
        main: `${corAviso}`
      },
    }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </StylesProvider>
    </React.StrictMode>
);
