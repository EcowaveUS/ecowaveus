import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/themeConfig.ts";
import { Toaster } from "react-hot-toast";
import "./fonts.css";
import "./fonts-inter.css";
import "./fonts-avenir-next.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
