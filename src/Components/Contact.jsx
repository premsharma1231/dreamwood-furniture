import contact from "../assets/Images/SofaImage.jpg"
import { MapPin, Phone, Mail } from "lucide-react";

function Contact(){

return(

<div className="bg-[#F8F5F2] py-12 md:py-20 px-4 sm:px-6 md:px-10">

  {/* HEADING */}
  <div className="text-center mb-12 md:mb-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4e342e] inline-block">
      Contact Us
      <span className="block w-16 md:w-20 h-1 bg-[#8B5A2B] mx-auto mt-3 rounded-full"></span>
    </h1>

    <p className="text-gray-600 mt-3 text-sm sm:text-base">
      Have questions? Need custom furniture? Contact us anytime.
    </p>
  </div>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">

    {/* LEFT */}
    <div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#4e342e]">
        Get In Touch
      </h3>

      <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
        We have been manufacturing premium traditional furniture for 25 years.
      </p>

      <div className="mt-8 space-y-5 text-sm sm:text-base">

        <div>
          <h4 className="font-semibold text-[#4E342E]">Kalol, Ahmedabad</h4>
          <p className="text-gray-600">Operating since 25 years</p>
        </div>

        <div>
          <h4 className="font-semibold text-[#4E342E]">Savina Main Road, Udaipur</h4>
          <p className="text-gray-600">New Branch</p>
        </div>

        <div>
          <h4 className="font-semibold text-[#4E342E]">Phone</h4>
          <p className="text-gray-600">+91 98799 59544</p>
          <p className="text-gray-600">+91 99988 44283</p>
          <p className="text-gray-600">+91 99131 25259</p>
        </div>

        <div>
          <h4 className="font-semibold text-[#4E342E]">Email</h4>
          <p className="text-gray-600 break-words">
            info@dreamwoodfurniture.in
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT FORM */}
    <div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2B2B2B]">
        Send Us A Message
      </h3>

      <div className="space-y-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="border p-3 rounded-lg focus:outline-none focus:border-[#8B5A2B]" placeholder="Full Name"/>
          <input className="border p-3 rounded-lg focus:outline-none focus:border-[#8B5A2B]" placeholder="Email"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="border p-3 rounded-lg focus:outline-none focus:border-[#8B5A2B]" placeholder="Mobile Number"/>
          <select className="border p-3 rounded-lg focus:outline-none">
            <option>Inquiry Type</option>
            <option>Repairing</option>
            <option>Custom Furniture</option>
            <option>Pricing</option>
            <option>Bulk Order</option>
          </select>
        </div>

        <textarea className="border p-4 rounded-lg w-full h-32 focus:outline-none focus:border-[#8B5A2B]" placeholder="Your Message"/>
        <input type="file" className="border p-3 rounded-lg w-full"/>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">

          <button className="w-full sm:w-1/2 bg-[#4e342e] text-white py-3 rounded-lg font-semibold hover:scale-105 hover:bg-gray-600 transition">
            Submit Inquiry
          </button>

          <a
            href="https://calendly.com/dreamwoodfurnitureudp/30min"
            target="_blank"
            className="w-full sm:w-1/2 text-center bg-[#8B5A2B] text-white py-3 rounded-lg font-semibold hover:scale-105 hover:bg-gray-600 transition"
          >
            Schedule 📅
          </a>

        </div>

      </div>
    </div>

  </div>

  {/* CONTACT CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">

  {[
    { icon: <MapPin size={22} />, title: "Visit Showroom", link: "https://maps.app.goo.gl/HS7CPAnzwV5MWuCE6", text: "Savina, Udaipur" },
    { icon: <Phone size={22} />, title: "Call Us", link: "tel:+919879595544", text: "+91 98799 59544" },
    { icon: <Mail size={22} />, title: "Email", link: "mailto:info@dreamwoodfurniture.in", text: "info@dreamwoodfurniture.in" }
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2 border border-transparent hover:border-[#4e342e]"
    >

      {/* ICON */}
      <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#4e342e]/10 text-[#4e342e] group-hover:bg-[#4e342e] group-hover:text-white transition duration-300">
        {item.icon}
      </div>

      {/* TITLE */}
      <h4 className="text-lg md:text-xl font-semibold text-[#4e342e] group-hover:text-[#3e2723] transition">
        {item.title}
      </h4>

      {/* TEXT */}
      <p className="text-gray-600 mt-2 break-words text-sm md:text-base">
        {item.text}
      </p>

      {/* SUBTLE LINE EFFECT */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4e342e] group-hover:w-full transition-all duration-300"></span>

    </a>
  ))}

</div>

</div>
)}

export default Contact;