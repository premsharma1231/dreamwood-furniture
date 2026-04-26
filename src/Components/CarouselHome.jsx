import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Logo from '../assets/Homecarousel/homelogo.png';
import Categories from "./Categories";
import Imageone from "../assets/Homecarousel/imageone.jpg";
import Imagetwo from "../assets/Homecarousel/imagetwo.jpg";
import FirstPage from "../assets/Homecarousel/bedfront.jpg";
import SecondPage from "../assets/Homecarousel/dtable.jpg";
import Imagethree from "../assets/Homecarousel/imagethree.jpg";
import Imagefour from "../assets/Homecarousel/imagefour.jpg";
import "swiper/css";
import "swiper/css/navigation";

function CarouselHome() {

  const slides = [
    Imagefour,
    Imageone,
    Imagetwo,
    Imagethree,
    FirstPage,
    SecondPage,
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-16 py-10 gap-8 lg:gap-10 items-center bg-[#F8F5F2]">

        {/* LEFT TEXT */}
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">

          <p className="text-[#4e342e] text-xs sm:text-sm md:text-base font-semibold tracking-widest">
            PREMIUM TRADITIONAL FURNITURE
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2F2F2F]">
            Crafting Your
            <span className="text-[#8B5A2B] block">
              Dream Furniture
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            For any furniture repair services, feel free to contact us at 
            <span className="font-semibold"><br/> +91 9879959544</span>. 
            From minor repairs to complete restoration, we handle it all.
            We also manufacture custom furniture for homes and commercial spaces.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">

            <button className="bg-[#4e342e] text-white px-6 sm:px-8 py-3 rounded-lg 
            hover:bg-gray-600 hover:scale-105 transition duration-300 shadow-lg">
              Explore Products
            </button>

            <a href="tel:+919879959544" 
            className="text-white px-6 sm:px-8 py-3 rounded-lg bg-[#8B5A2B]
            hover:bg-gray-600 hover:scale-105 transition duration-300 shadow-lg text-center">
              Call Now
            </a>

          </div>

        </div>

        {/* RIGHT SLIDER */}
<div className="w-full">

  <Swiper
    modules={[Navigation, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    navigation={true}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false
    }}
  >

    {slides.map((image, index) => (
      <SwiperSlide key={index} className="h-full">

        <img
          src={image}
          className="rounded-xl w-full h-72 sm:h-96 md:h-[500px] lg:h-[600px] object-cover shadow-lg"
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