import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mobiles } from './Mobiles'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Signup } from './Signup'
import { Login } from './Login'
import ProductDetail from './ProductDetail'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
     
  <BrowserRouter>
  <Routes>
        
        <Route path="/" element={<Mobiles />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetail/:id" element={<ProductDetail/>} />
    
    </Routes>
  </BrowserRouter>
     
    </>
  )
}

export default App
