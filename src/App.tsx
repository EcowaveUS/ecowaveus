import { BrowserRouter as Router } from "react-router-dom"
import { AnimateRoutes } from "./components/animateRoutes/AnimateRoutes"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { ScrollToTop } from "./components/buttons/ScrollToTop"

import './App.css'
import Roadmap from "./components/Roadmap"

function App() {

  return (
      <Router>
        <Header/>
          <AnimateRoutes />
          <ScrollToTop  />
          <Roadmap />
        <Footer/>
      </Router>
  )
}

export default App
