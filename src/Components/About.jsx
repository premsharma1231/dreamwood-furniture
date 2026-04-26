import workshop from "../assets/Homecarousel/bedfront.jpg"
import craftsman from "../assets/Homecarousel/dtable.jpg"
import Panelsaw from "../assets/Images/Panelsaw.jpg"
import CNC from "../assets/Images/CNC.jpg"
import Planner from "../assets/Images/Planner.jpg"
import Cutter from "../assets/Images/Cutter.webp"
import ColdPress from "../assets/Images/ColdPress.jpg"


function About() {
  return (
<div className="bg-[#F8F5F2] py-12 md:py-20 px-4 sm:px-6 md:px-16">

  {/* SECTION 1 */}
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">

    <div className="overflow-hidden rounded-2xl shadow-xl">
      <img
        src="https://media.gettyimages.com/id/81025871/video/people-working-in-furniture-factory-dongguan-china.jpg?s=640x640&k=20&c=Ok2sa5a-68LK_4PzBztOoJS2JwsnWKJ3EIXb92s8Tvo="
        className="w-full h-64 sm:h-80 md:h-[450px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4e342e]">
        25 Years of Craftsmanship
      </h2>

      <p className="mt-4 md:mt-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
        We have been proudly serving customers with high-quality handcrafted furniture 
        built using strong materials and expert techniques.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-1 sm:gap-6 mt-6 md:mt-8 text-center md:text-left">
        {[
          { value: "25+", label: "Years Experience" },
          { value: "2", label: "Locations" },
          { value: "1000+", label: "Happy Clients" },
        ].map((item, i) => (
          <div key={i}>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4e342e]">
              {item.value}
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* SECTION 2 */}
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">

    <div className="order-2 md:order-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4e342e]">
        Our Crafting Process
      </h2>

      <p className="mt-4 md:mt-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
        Traditional woodworking + modern precision.
      </p>

      <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-gray-700 list-disc pl-5 marker:text-[#4e342e] text-sm sm:text-base">
        <li>Premium Quality Wood</li>
        <li>Handcrafted Designs</li>
        <li>Custom Furniture</li>
        <li>Home & Hotel Projects</li>
      </ul>
    </div>

    <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-xl">
      <img
        src="https://t4.ftcdn.net/jpg/07/26/28/45/360_F_726284561_WEUmKV7Ia5NacUcdbMje3PZ7H1thGvbQ.jpg"
        className="w-full h-64 sm:h-80 md:h-[450px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </div>

  {/* MACHINERY */}
  <div className="text-center mb-10 md:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e342e]">
      Machineries We Use
    </h2>
    <p className="text-gray-500 mt-2 text-sm md:text-base">
      Precision tools ensuring quality craftsmanship
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
    {[
      { img: "https://www.jaiindustries.com/images/modula/cnc-router-01.jpg", name: "CNC Machine" },
      { img: "https://www.jaiindustries.com/images/modula/panel-saws-26.jpg", name: "Panel Saw" },
      { img: "https://www.jaiindustries.com/images/modula/spindle-moulder-1.jpg", name: "Spindle Moulder" },
      { img: "https://www.jaiindustries.com/images/modula/teno-mac.jpg", name: "Teno Mac" },
      { img: "https://www.jaiindustries.com/images/modula/multiborings-1.jpg", name: "Multi Boring"},
      { img: "https://www.jaiindustries.com/images/modula/auto-edge-banders-91.jpg", name: "Edge Banding"},
      { img: "https://www.jaiindustries.com/images/turning-lathes-5.jpg", name: "Wood Lathe"},
      { img: "https://www.jaiindustries.com/images/modula/cold-press-1.jpg", name: "Cold Press"}
    ].map((item, i) => (
      <div key={i} className="relative group rounded-2xl overflow-hidden shadow-lg">

        <img
          src={item.img}
          className="w-full h-96 sm:h-96 md:h-96 transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

        <div className="absolute bottom-0 w-full text-center text-white py-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
          <p className="text-sm sm:text-base font-semibold">
            {item.name}
          </p>
        </div>

      </div>
    ))}
  </div>

  {/* TEXT */}
  <div className="max-w-4xl mx-auto text-center px-2 sm:px-6">
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      At <span className="font-semibold text-[#4e342e]">Dreamwood Furniture</span>, 
      we combine advanced machinery with skilled craftsmanship.
    </p>
  </div>

  {/* CTA */}
  <div className="mt-12 md:mt-16 rounded-3xl bg-[#4E342E]">
    <div className="text-white text-center px-4 sm:px-8 py-10 md:py-16">

      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">
        Design Your Dream Furniture
      </h3>

      <p className="mt-3 text-gray-200 text-sm sm:text-base md:text-lg">
        Custom furniture for homes & hotels
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8">

        <a href="/contact"
          className="bg-white text-[#4e342e] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:scale-105 transition">
          Get in Touch
        </a>

        <a href="tel:+919879595544"
          className="border border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-[#4e342e] transition">
          Call Now
        </a>

        <a href="https://calendly.com/dreamwoodfurnitureudp/30min"
          target="_blank"
          className="bg-white text-[#4e342e] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:scale-105 transition">
          Schedule 📅
        </a>

      </div>

    </div>
  </div>

</div>
  );
}
export default About;