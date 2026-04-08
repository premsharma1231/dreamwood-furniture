import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

function Navbar() {

return (

<div className="flex items-center justify-between bg-[#4e342e] text-white px-10 py-4 shadow-md">

<NavLink to="/" className="text-3xl font-bold font-serif tracking-wider bg-gradient-to-r from-[#E6CCB2] via-[#D2B48C] to-[#A47551] 
bg-clip-text text-transparent hover:scale-110 hover:tracking-widest transition-all duration-500">DREAM WOOD</NavLink>

<ul className="flex items-center gap-10 text-md font-serif list-none font-medium">

<li><NavLink to="/" className={({isActive}) =>
isActive ? "text-gray-400 scale-110 transition duration-300" : "hover:scale-110 hover:text-gray-400 transition duration-300"}>HOME</NavLink></li>

<li><NavLink to="/products" className={({isActive}) => 
isActive ? "text-gray-400 scale-110 transition duration-300" : "hover:scale-110 hover:text-gray-400 transition duration-300"}>PRODUCTS</NavLink></li>

<li><NavLink to="/about" className={({isActive}) => 
isActive ? "text-gray-400 scale-110 transition duration-300" : "hover:scale-110 hover:text-gray-400 transition duration-300"}>ABOUT</NavLink></li>

<li><NavLink to="/contact" className={({isActive}) => 
isActive ? "text-gray-400 scale-110 transition duration-300" : "hover:scale-110 hover:text-gray-400 transition duration-300"}>CONTACT</NavLink></li>

<li className="flex items-center gap-4 ml-4">
<a href="tel:+919876543210"
className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition flex items-center justify-center w-9 h-9">
<Phone size={18}/>
</a>


<a href="mailto:dreamwoodfurniture@gmail.com?subject=Furniture Inquiry"
className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition flex items-center justify-center w-9 h-9">
<Mail size={18}/>
</a>

</li></ul>

</div>

)

}

export default Navbar;