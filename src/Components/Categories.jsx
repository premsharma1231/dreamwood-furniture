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
  return (
    <div className="w-full py-16 px-10 bg-white">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        Shop By Categories
      </h2>


      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {categories.map((item, index) => (
          <div key={index} className="text-center group cursor-pointer">

            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <p className="mt-3 text-xl font-semibold tracking-wide">
              {item.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Categories;