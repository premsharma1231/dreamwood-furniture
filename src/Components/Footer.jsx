import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {

return (

<footer className="bg-[#4E342E] text-[#FFF8F0] px-4 sm:px-6 md:px-10 py-12">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

{/* LEFT SECTION */}
<div>

<h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
DreamWood Furniture
</h2>

<p className="text-sm leading-6 text-gray-300">
We design premium quality traditional furniture crafted with precision and durability. 
We also provide furniture repair and custom furniture solutions.
Our motto is customer satisfaction.
</p>

{/* ICONS */}
<div className="flex items-center gap-4 mt-6">

<a href="tel:+919876543210"
className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
<Phone size={16}/>
</a>

<a href="mailto:dreamwoodfurniture@gmail.com?subject=Furniture Inquiry"
className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
<Mail size={16}/>
</a>

<a href="https://www.instagram.com/dreamwoodudaipur/"
className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
<FaInstagram size={16}/>
</a>

<a href="https://www.youtube.com/@Dreamwoodfurnitureudp"
className="p-2 bg-white text-[#4e342e] rounded-full hover:scale-110 transition">
<FaYoutube size={16}/>
</a>

</div>

</div>

{/* QUICK LINKS */}
<div>

<h3 className="text-lg font-semibold mb-4">
Quick Links
</h3>

<ul className="space-y-2 text-gray-300 text-sm">

<li><NavLink to="/" className="hover:text-white transition">Home</NavLink></li>
<li><NavLink to="/products" className="hover:text-white transition">Products</NavLink></li>
<li><NavLink to="/about" className="hover:text-white transition">About</NavLink></li>
<li><NavLink to="/contact" className="hover:text-white transition">Contact</NavLink></li>

</ul>

</div>

{/* SERVICES */}
<div>

<h3 className="text-lg font-semibold mb-4">
Our Services
</h3>

<ul className="space-y-2 text-gray-300 text-sm">

<li>Traditional Furniture</li>
<li>Custom Furniture</li>
<li>Furniture Repair</li>
<li>Hotel Furniture</li>
<li>School Furniture</li>

</ul>

</div>

{/* CONTACT */}
<div>

<h3 className="text-lg font-semibold mb-4">
Contact Us
</h3>

<div className="space-y-3 text-gray-300 text-sm">

<a href="tel:+919879959544" className="flex items-center gap-2 hover:text-white transition">
<Phone size={16}/>+91 9879959544
</a>

<a href="mailto:info@dreamwoodfurniture.in" className="flex items-center gap-2 hover:text-white transition">
<Mail size={16}/>info@dreamwoodfurniture.in
</a>

<a 
href="https://maps.app.goo.gl/HS7CPAnzwV5MWuCE6" 
target="_blank" 
rel="noopener noreferrer"
className="flex items-center gap-2 hover:text-white transition"
>
<MapPin size={16}/>Udaipur, Rajasthan
</a>

</div>

</div>

</div>

{/* BOTTOM */}
<div className="border-t border-[#6D4C41] mt-10 pt-5 text-center text-xs sm:text-sm text-gray-300">
© {new Date().getFullYear()} DreamWood Furniture. All Rights Reserved.
</div>

</footer>
)
}

export default Footer;