import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components.jsx/Header'
import Footer from './Components.jsx/Footer'
import Blog from './Components.jsx/Blog'
import Contact from './Components.jsx/Contact'
import Pricing from './Components.jsx/Pricing'
import Aiproduct from './Components.jsx/Aiproduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/blogs' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
                <Route path='/aiproduct' element={<Aiproduct />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
