import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Logo from '../assets/Homecarousel/homelogo.png'
import Categories from "./Categories";

import "swiper/css";
import "swiper/css/navigation";

import FirstPage from "../assets/Homecarousel/bedfront.jpg";
import SecondPage from "../assets/Homecarousel/dtable.jpg";
// import ThirdPage from "../assets/Homecarousel/third.jpg";

function CarouselHome() {

  const slides = [
    FirstPage,
    SecondPage,
    // ThirdPage
  ];

  return (
    <>
    <div className="grid grid-cols-2 px-16 py-10 gap-10 items-center">
      <div className="space-y-6">
      <p className="text-[#4e342e] text-xl font-semibold tracking-widest">PREMIUM TRADITIONAL FURNITURE</p>
      <h1 className="text-6xl font-bold leading-tight text-[#2F2F2F]">Crafting Your<span className="text-[#8B5A2B] block">
      Dream Furniture</span></h1>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
      For any furniture repair services, feel free to contact us at 
      <span className="font-semibold"><br/> +91 9879959544</span>. 
      From minor repairs to complete restoration, we handle it all.
      We also manufacture custom furniture for homes and commercial spaces.
      </p>

      <div className="flex gap-5 mt-8">
      <button className="bg-[#4e342e] text-white px-8 py-3 rounded-lg 
      hover:bg-gray-500 hover:scale-105 transition duration-300 shadow-lg">
      Explore Products
      </button>

      <a href="tel:+919879959544" className="text-white px-8 py-3 rounded-lg bg-[#8B5A2B]
      hover:bg-gray-500 hover:scale-105 transition duration-300 shadow-lg">
      Call Now
      </a>
    </div>
    </div>

      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay:3000,
            disableOnInteraction:false
          }}
        >

          {slides.map((image, index) => (

            <SwiperSlide key={index}>

              <img
                src={image}
                className="rounded-xl w-full h-[600px] object-cover shadow-lg"
              />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
    </div>

  <Categories/>
</>
  );
}

export default CarouselHome;