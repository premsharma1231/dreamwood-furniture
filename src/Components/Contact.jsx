import contact from "../assets/Images/SofaImage.jpg"

function Contact(){

return(

<div className="bg-[#F8F5F2] py-20 px-10">

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-[#4E342E]">Contact Us</h2>

<p className="text-gray-600 mt-4">Have questions? Need custom furniture? Contact us anytime.</p>

</div>
<div className="grid grid-cols-2 gap-16 bg-white p-12 rounded-2xl shadow-xl">
<div>

<h3 className="text-3xl font-semibold text-[#8B5E3C]">Get In Touch</h3>

<p className="text-gray-600 mt-4 leading-relaxed">
We have been manufacturing premium traditional furniture for 25 years.
Visit our showroom or contact us for custom furniture projects.
</p>

<div className="mt-10 space-y-6"><div>
<h4 className="font-semibold text-lg text-[#4E342E]">Kalol, Ahmedabad</h4>
<p className="text-gray-600">Operating since 25 years</p>
</div>

<div>
<h4 className="font-semibold text-lg text-[#4E342E]">Savina Main Road, Udaipur</h4>
<p className="text-gray-600">New Branch</p>
</div>

<div>
<h4 className="font-semibold text-lg text-[#4E342E]">Phone</h4>
<p className="text-gray-600">+91 98799 59544</p>
<p className="text-gray-600">+91 99131 25259</p>
<p className="text-gray-600">+91 99988 44283</p>
</div>

<div>
<h4 className="font-semibold text-lg text-[#4E342E]">Email</h4>
<p className="text-gray-600">dreamwood@gmail.com</p>
<p className="text-gray-600">premsharma786zx@gmail.com</p>
</div>
</div>

</div><div>

<h3 className="text-2xl font-semibold mb-8 text-[#2B2B2B]">Send Us A Message</h3>


<div className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<input className="border p-3 rounded-lg focus:outline-none focus:border-[#8B5A2B]"placeholder="Full Name"/>
<input className="border p-3 rounded-lg focus:outline-none focus:border-[#8B5A2B]" placeholder="Email"/></div>
<div className="grid grid-cols-2 gap-6">
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
<button className="w-full bg-gray-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#8B5A2B] transition">
Submit Inquiry
</button>

</div></div></div>

<div className="grid grid-cols-3 gap-10 mt-20">
<div className="bg-white p-8 rounded-xl shadow text-center">

<h4 className="text-xl font-semibold text-[#8B5E3C]">
    Visit Showroom
</h4>

<p className="text-gray-600 mt-3">  
    Savina, Udaipur <br/>
    Kalol, Ahmedabad
</p></div>

<div className="bg-white p-8 rounded-xl shadow text-center">
    <h4 className="text-xl font-semibold text-[#8B5E3C]">Call Us</h4>
    <p className="text-gray-600 mt-3">+91 98799 59544</p>
</div>

<div className="bg-white p-8 rounded-xl shadow text-center">
    <h4 className="text-xl font-semibold text-[#8B5E3C]">Email</h4>
    <p className="text-gray-600 mt-3">dreamwood@gmail.com</p>
</div>
</div>
</div>

)}

export default Contact;