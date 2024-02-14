import React from 'react'
import Header from './Comp/Header'
import Footer from './Comp/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
