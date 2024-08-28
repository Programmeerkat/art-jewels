import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Detail from "./pages/Detail"

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Navbar/>
        <Hero/>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path=":detail" element={<Detail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
