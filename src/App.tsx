import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from "./utils/Layout"
import { AnimateRoutes } from "./components/animateRoutes/AnimateRoutes"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"

import './App.css'

function App() {

  return (
      <Router>
        <Header/>
          <AnimateRoutes />
        <Footer/>
      </Router>
  )
}

export default App
