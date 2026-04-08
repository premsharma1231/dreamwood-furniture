import React from "react";
import HomeImg from "../assets/Images/Homeimg"

const categories = [
  { name: "SOFAS", img: "/images/sofa.jpg" },
  { name: "BEDS", img: "/images/bed.jpg" },
  { name: "DINING", img: "/images/dining.jpg" },
  { name: "TV UNITS", img: "/images/tv.jpg" },
  { name: "COFFEE TABLES", img: "/images/coffee.jpg" },
  { name: "CABINETS", img: "/images/cabinet.jpg" },
  { name: "MATTRESSES", img: "/images/mattress.jpg" },
  { name: "WARDROBES", img: "/images/wardrobe.jpg" },
  { name: "SOFA CUM BED", img: "/images/sofabed.jpg" },
  { name: "BOOKSHELVES", img: "/images/bookshelf.jpg" },
  { name: "ALL STUDY TABLES", img: "/images/study.jpg" },
  { name: "KITCHEN CABINETS", img: "/images/kitchen.jpg" },
];

function Home() {
  return (
    <>
    <div>
        <img src={HomeImg} alt="" />
    </div>
    </>
  );
}

export default Home;