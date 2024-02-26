import { BrowserRouter as Router } from "react-router-dom"
import { AnimateRoutes } from "./components/animateRoutes/AnimateRoutes"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { ScrollToTop } from "./components/buttons/ScrollToTop"

import './App.css'

function App() {

  return (
      <Router>
        <Header/>
          <AnimateRoutes />
          <ScrollToTop  />
        <Footer/>
      </Router>
  )
}

export default App
