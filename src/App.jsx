import React from 'react'

import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

// hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "./Hooks/useAuthentication"

// pages 
import Home from "./Pages/Home/Home"
import SobreNos from "./Pages/SobreNos/SobreNos"
import FaleConosco from "./Pages/FaleConosco/FaleConosco"
import Reviews from "./Pages/Reviews/Reviews"

// components
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CadastroModal from "./Components/CadastroModal"
import LoginModal from "./Components/LoginModal"

// context
import { AuthProvider } from "./Context/AuthContext"

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Reviews' element={<Reviews />}></Route>
              <Route path='/SobreNos' element={<SobreNos />}></Route>
              <Route path='/FaleConosco' element={<FaleConosco />}></Route>
              <Route path='/CadastroModal' element={<CadastroModal />}></Route>
              <Route path='/LoginModal' element={<LoginModal />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App