import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Categories from './Components/Categories'
import CarouselHome from './Components/CarouselHome'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      {/* <Navbar/>
      <CarouselHome/>
      <Product/>
      <Categories/>
      <About/>
      <Contact/> */}
<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<CarouselHome/>}/>
<Route path="/products" element={<Product/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

<Footer/>

</BrowserRouter>

    </>
  )
}

export default App;