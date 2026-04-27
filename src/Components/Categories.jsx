import React from "react";
import BedImage from "../assets/Images/BedWallpaper.jpg";
import DiningImage from "../assets/Images/DiningImage.jpg";
import TVImage from "../assets/Images/TVUnitImage.jpg";
import CoffeeTable from "../assets/Images/CoffeeTable.jpg";
import CabinetImage from "../assets/Images/CabinetImage.jpg";
import SofaImage from "../assets/Images/SofaImage.jpg";
import WardrobeImage from "../assets/Images/WardrobeImage.jpg";
import SofacumBedImage from "../assets/Images/SofacumBedImage.jpg";
import Bookshelf from "../assets/Images/Bookshelf.jpg";
import StudyTblImg from "../assets/Images/StudyTblImg.jpg";
import KitchenImg from "../assets/Images/KitchenImg.jpg";
import ShoeRackImg from "../assets/Images/ShoeRackImg.jpg";
import { useNavigate } from "react-router-dom";

 {/* MACHINERY*/}
    {/* MACHINERY*/}
const categories = [
  { name: "SOFAS", img: SofaImage },
  { name: "BEDS", img: BedImage },
  { name: "DINING", img: DiningImage },
  { name: "TV UNITS", img: TVImage },
  { name: "COFFEE TABLES", img: CoffeeTable },
  { name: "CABINETS", img: CabinetImage },
  { name: "WARDROBES", img: WardrobeImage },
  { name: "SOFA CUM BED", img: SofacumBedImage },
  { name: "BOOKSHELVES", img: Bookshelf },
  { name: "STUDY TABLES", img: StudyTblImg },
  { name: "KITCHEN CABINETS", img: KitchenImg },
  { name: "SHOES RACK", img: ShoeRackImg }
];

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="w-full py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 bg-[#F8F5F2]">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e342e] inline-block">
          Shop By Categories
          <span className="block w-16 md:w-20 h-1 bg-[#8B5A2B] mx-auto mt-3 rounded-full"></span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products?category=${item.name}`)}
            className="group cursor-pointer"
          >

            {/* Image Card */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 sm:h-52 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Title */}
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold text-center tracking-wide text-[#4e342e] group-hover:text-[#8B5A2B] transition">
              {item.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Categories;