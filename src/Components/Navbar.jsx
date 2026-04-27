import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function Navbar() {

const [open, setOpen] = useState(false);

return (

<div className="bg-[#4e342e] text-white shadow-md relative">

{/* TOP BAR */}
<div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">

  {/* LOGO */}
  <NavLink
    to="/"
    className="text-xl sm:text-2xl md:text-3xl font-bold font-serif tracking-wide bg-gradient-to-b from-[#f5deb3] to-[#c8a165] bg-clip-text text-transparent"
  >
    DREAM WOOD
  </NavLink>

  {/* DESKTOP MENU */}
  <ul className="hidden lg:flex items-center gap-10 font-serif">

   <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
  `relative transition duration-300 ${
    isActive
      ? "text-[#D7CCC8]"
      : "text-white hover:text-[#D7CCC8]"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D7CCC8] after:w-0 hover:after:w-full after:transition-all`
}
  >
    HOME
  </NavLink>
</li>

<li>
  <NavLink
    to="/products"
    className={({ isActive }) =>
  `relative transition duration-300 ${
    isActive
      ? "text-[#D7CCC8]"
      : "text-white hover:text-[#D7CCC8]"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D7CCC8] after:w-0 hover:after:w-full after:transition-all`
}
  >
    PRODUCTS
  </NavLink>
</li>

<li>
  <NavLink
    to="/about"
    className={({ isActive }) =>
  `relative transition duration-300 ${
    isActive
      ? "text-[#D7CCC8]"
      : "text-white hover:text-[#D7CCC8]"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D7CCC8] after:w-0 hover:after:w-full after:transition-all`
}
  >
    ABOUT
  </NavLink>
</li>

<li>
  <NavLink
    to="/contact"
    className={({ isActive }) =>
  `relative transition duration-300 ${
    isActive
      ? "text-[#D7CCC8]"
      : "text-white hover:text-[#D7CCC8]"
  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D7CCC8] after:w-0 hover:after:w-full after:transition-all`
}
  >
    CONTACT
  </NavLink>
</li>

    <li className="flex gap-3 ml-4">

      <a href="tel:+919876543210" className="p-2 bg-white text-[#4e342e] rounded-full">
        <Phone size={16}/>
      </a>

      <a href="mailto:info@dreamwoodfurniture.in" className="p-2 bg-white text-[#4e342e] rounded-full">
        <Mail size={16}/>
      </a>

      <a href="https://www.instagram.com/dreamwoodudaipur/" className="p-2 bg-white text-[#4e342e] rounded-full">
        <FaInstagram size={16}/>
      </a>

      <a href="https://www.youtube.com/@Dreamwoodfurnitureudp" className="p-2 bg-white text-[#4e342e] rounded-full">
        <FaYoutube size={16}/>
      </a>

    </li>
  </ul>

  {/* HAMBURGER BUTTON */}
  <div className="lg:hidden">
    <button onClick={() => setOpen(!open)}>
      {open ? <X size={28}/> : <Menu size={28}/>}
    </button>
  </div>

</div>

{/* MOBILE MENU */}
<div
  className={`md:hidden absolute top-full left-0 w-full bg-[#3e2723] overflow-hidden transition-all duration-500 ease-in-out ${
    open ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
  }`}
>

  <div className="flex flex-col items-center gap-5 font-serif text-lg">

    <NavLink to="/" onClick={() => setOpen(false)} className="hover:scale-105 transition">HOME</NavLink>
    <NavLink to="/products" onClick={() => setOpen(false)} className="hover:scale-105 transition">PRODUCTS</NavLink>
    <NavLink to="/about" onClick={() => setOpen(false)} className="hover:scale-105 transition">ABOUT</NavLink>
    <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:scale-105 transition">CONTACT</NavLink>

    {/* ICONS */}
    <div className="flex justify-center gap-4 mt-4">

      <a href="tel:+919876543210" className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
        <Phone size={16}/>
      </a>

      <a href="mailto:info@dreamwoodfurniture.in" className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
        <Mail size={16}/>
      </a>

      <a href="https://www.instagram.com/dreamwoodudaipur/" className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
        <FaInstagram size={16}/>
      </a>

      <a href="https://www.youtube.com/@Dreamwoodfurnitureudp" className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
        <FaYoutube size={16}/>
      </a>

    </div>

  </div>
</div>

</div>

)

}

export default Navbar;