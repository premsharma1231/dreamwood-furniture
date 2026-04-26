import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Categories from './Components/Categories'
import CarouselHome from './Components/CarouselHome'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Admin from "./Components/Admin";
import Loader from "./Components/Loader";


// 🔥 Separate component (IMPORTANT)
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // ⏱️ 0.5 sec delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}

      <Navbar />

      <Routes>
        <Route path="/" element={<CarouselHome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </>
  );
}


// 🔥 Main App
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;