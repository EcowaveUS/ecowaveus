import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/themeConfig.ts";
import "./fonts.css";
import "./fonts-inter.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
