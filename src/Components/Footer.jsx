import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {

return (

<footer className="bg-[#4E342E] text-[#FFF8F0] px-10 py-10">

<div className="grid md:grid-cols-4 gap-10">

<div>

<h2 className="text-2xl font-serif font-bold mb-4">
DreamWood Furniture
</h2>

<p className="text-sm leading-6 text-gray-300">
We design premium quality traditional furniture crafted with precision and durability. 
We also provide furniture repair and custom furniture solutions.
Our motto is customer satisfaction.
</p>

</div>

<div className="ml-20">

<h3 className="text-lg font-semibold mb-4">
Quick Links
</h3>

<ul className="space-y-2 text-gray-300">

<li>
<NavLink to="/" className="hover:text-white">
Home
</NavLink>
</li>

<li>
<NavLink to="/products" className="hover:text-white">
Products
</NavLink>
</li>

<li>
<NavLink to="/about" className="hover:text-white">
About
</NavLink>
</li>

<li>
<NavLink to="/contact" className="hover:text-white">
Contact
</NavLink>
</li>
</ul>
</div>
<div>

<h3 className="text-lg font-semibold mb-4">
Our Services
</h3>

<ul className="space-y-2 text-gray-300">

<li>Traditional Furniture</li>
<li>Custom Furniture</li>
<li>Furniture Repair</li>
<li>Hotel Furniture</li>
<li>School Furniture</li>

</ul>

</div>

<div className="">

<h3 className="text-lg font-semibold mb-4">
Contact Us
</h3>

<div className="space-y-3 text-gray-300">

<a href="tel:+919879959544" className="flex items-center gap-2 hover:text-white">
<Phone size={18}/>+91 9879959544</a>

<a href="mailto:dreamwoodfurniture@gmail.com" className="flex items-center gap-2 hover:text-white">
<Mail size={18}/>dreamwoodfurniture@gmail.com</a>


<div className="flex items-center gap-2"><MapPin size={18}/>Udaipur, Rajasthan</div>

</div>
</div>
</div>

<div className="border-t border-[#6D4C41] mt-10 pt-5 text-center text-sm text-gray-300">
© {new Date().getFullYear()} DreamWood Furniture. All Rights Reserved.
</div>


</footer>
)
}

export default Footer;