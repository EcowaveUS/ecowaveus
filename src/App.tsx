import { BrowserRouter as Router } from "react-router-dom";
import { AnimateRoutes } from "./components/animateRoutes/AnimateRoutes";
// import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ScrollToTop } from "./components/buttons/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import Roadmap from "./components/Roadmap";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/themeConfig";
import { HeaderNew } from "./components/headerNew/HeaderNew";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Router>
          <HeaderNew />
          <AnimateRoutes />
          <ScrollToTop />
          <Roadmap />
          <Footer />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
