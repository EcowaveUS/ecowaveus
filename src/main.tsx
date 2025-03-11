import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import { StrictMode } from "react";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/themeConfig.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
