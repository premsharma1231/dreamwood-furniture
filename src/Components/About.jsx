import workshop from "../assets/Homecarousel/bedfront.jpg"
import craftsman from "../assets/Homecarousel/dtable.jpg"

function About(){

return(

<div className="bg-[#F8F5F2] py-20 px-16">

{/* SECTION TITLE */}

<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-[#2B2B2B]">
About Veritas Furniture
</h2>

<p className="text-gray-600 mt-4 text-lg">
Crafting timeless furniture with passion and precision
</p>

</div>


{/* FIRST ROW */}

<div className="grid grid-cols-2 gap-16 items-center">

<div>

<h3 className="text-3xl font-semibold text-[#8B5E3C]">

25 Years of Trust & Craftsmanship

</h3>

<p className="mt-6 text-gray-700 leading-relaxed text-lg">

We have been proudly operating in Kalol, Ahmedabad for the last 25 years,
delivering high quality traditional furniture built with strong materials
and expert craftsmanship.

Recently we expanded our presence by opening another branch at
Main Road, Savina, Udaipur to serve more customers with the same
commitment to quality.

</p>

<div className="flex gap-10 mt-8">

<div>

<h4 className="text-3xl font-bold text-[#CF2028]">
25+
</h4>

<p className="text-gray-600">
Years Experience
</p>

</div>

<div>

<h4 className="text-3xl font-bold text-[#CF2028]">
2
</h4>

<p className="text-gray-600">
Locations
</p>

</div>

<div>

<h4 className="text-3xl font-bold text-[#CF2028]">
1000+
</h4>

<p className="text-gray-600">
Happy Clients
</p>

</div>

</div>

</div>


<div>

<img
src={workshop}
className="rounded-2xl shadow-xl"
/>

</div>

</div>


{/* SECOND ROW */}

<div className="grid grid-cols-2 gap-16 items-center mt-24">

<div>

<img
src={craftsman}
className="rounded-2xl shadow-xl"
/>

</div>


<div>

<h3 className="text-3xl font-semibold text-[#8B5E3C]">

Traditional Crafting Process

</h3>

<p className="mt-6 text-gray-700 leading-relaxed text-lg">

Unlike mass production factories, we focus on traditional woodworking
techniques and handcrafted detailing. Our strength lies in skilled labour
and precision finishing rather than heavy automated machinery.

We believe real furniture quality comes from experience,
attention to detail and strong materials.

</p>

<div className="mt-8">

<ul className="space-y-4">

<li className="flex items-center gap-3">

<div className="w-3 h-3 bg-[#CF2028] rounded-full"></div>

Premium Quality Wood

</li>

<li className="flex items-center gap-3">

<div className="w-3 h-3 bg-[#CF2028] rounded-full"></div>

Traditional Handcrafted Designs

</li>

<li className="flex items-center gap-3">

<div className="w-3 h-3 bg-[#CF2028] rounded-full"></div>

Custom Furniture Available

</li>

<li className="flex items-center gap-3">

<div className="w-3 h-3 bg-[#CF2028] rounded-full"></div>

Hotel & Home Projects

</li>

</ul>

</div>

</div>

</div>


{/* BOTTOM CTA */}

<div className="bg-[#8B5E3C] text-white mt-24 rounded-2xl p-12 text-center">

<h3 className="text-3xl font-semibold">

Design Your Dream Furniture With Us

</h3>

<p className="mt-4 text-gray-200">

Custom designs available for homes, hotels and offices.

</p>

<button className="mt-6 bg-white text-[#8B5E3C] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">

Contact Us

</button>

</div>


</div>

)

}

export default About;