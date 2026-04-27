import React, { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

useEffect(() => {
  let url = "https://dreamwood-furniture.onrender.com/api/products";

  if (selectedCategory) {
    url += `?category=${selectedCategory}`;
  }

  setLoading(true);
  setError("");

  fetch(url)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      return data;
    })
    .then((data) => {
      setProducts(Array.isArray(data) ? data : []);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      setError("Failed to load products");
      setProducts([]); // 💀 important fallback
      setLoading(false);
    });
}, [selectedCategory]);

  // 👉 Category formatting
  const formatCategory = (cat) => {
    if (!cat) return "Our Products";
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

 return (
  <div className="px-4 sm:px-6 md:px-10 py-8 md:py-10 bg-[#F8F5F2] min-h-screen">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e342e] inline-block">
        {formatCategory(selectedCategory)}
        <span className="block w-16 md:w-20 h-1 bg-[#8B5A2B] mx-auto mt-3 rounded-full"></span>
      </h1>

      <p className="text-gray-500 mt-3 text-xs sm:text-sm md:text-base px-2">
        {selectedCategory
          ? `Explore our premium ${selectedCategory.toLowerCase()} collection`
          : "Discover our handcrafted premium furniture collection"}
      </p>
    </div>

    {/* Loading */}
    {loading ? (
      <p className="text-center text-gray-500 text-base sm:text-lg">Loading... ⏳</p>
    ) : error ? (
      <p className="text-center text-red-500">{error}</p>
    ) : products.length === 0 ? (
      <p className="text-center text-gray-500 text-base sm:text-lg">
        No products found 😔
      </p>
    ) : (

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

        {products.map((item) => {
          if (!item) return null;

          return (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="w-full h-96 sm:h-96 md:h-96 overflow-hidden">
                <img
                  src={item?.image || "/images/default.jpg"}
                  alt={item?.name || "product"}
                  onError={(e) => {
                    e.target.src = "/images/default.jpg";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </h2>

                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Category: {item.category}
                </p>

                <p className="text-gray-400 mt-2 sm:mt-3 font-serif text-xs sm:text-sm">
                  By Dreamwood Furniture
                </p>

                {/* Call Button */}
                <a
                  href="tel:+919879595544"
                  className="mt-4 sm:mt-5 flex items-center justify-center gap-2 bg-gradient-to-r from-[#4e342e] to-[#6d4c41] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <FiPhone className="text-white text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm font-medium">
                    Call for updated pricing
                  </span>
                </a>

                {/* Small text */}
                <p className="text-[10px] sm:text-xs text-gray-400 mt-2 text-center">
                  Get best price & custom design options
                </p>
              </div>

            </div>
          );
        })}

      </div>
    )}
  </div>
);
}

export default Products;