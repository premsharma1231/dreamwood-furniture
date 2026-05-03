import React, { useEffect, useState } from "react";
import { FiPhone, FiMessageCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const openModal = (product) => {
  setSelectedProduct(product);
  setShowModal(true);
};


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

  const handleSubmit = async () => {
  const res = await fetch("https://dreamwood-furniture.onrender.com/api/quotation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      productName: selectedProduct.name,
      productLink: window.location.href,
    }),
  });

  const data = await res.json();

  if (data.success) {
    alert("Request sent successfully ✅");
    setShowModal(false);
  } else {
    alert("Something went wrong ❌");
  }
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
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="w-full h-96 sm:h-96 md:h-96 overflow-hidden">
                <img
                  src={item?.image || "/images/default.jpg"}
                  alt={item?.name || "product"}
                  onError={(e) => {
                    e.target.src = "/images/default.jpg";
                  }}
                  className="w-full h-full transition-transform duration-500 hover:scale-110"
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

                <div className="flex justify-between">

                <a
                  href="tel:+919879595544"
                  className="mt-4 sm:mt-5 flex items-center justify-center gap-2 w-52 bg-gradient-to-r from-[#4e342e] to-[#6d4c41] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                  <FiPhone className="text-white text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm font-medium">
                    Call for pricing!
                  </span>
                  
                </a>

                <a
                  onClick={() => openModal(item)}
                  className="mt-4 sm:mt-5 flex items-center justify-center gap-2 w-52 bg-gradient-to-r from-[#4e342e] to-[#6d4c41] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                  <FiPhone className="text-white text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm font-medium">
                    Request Quotation
                  </span>
                </a>
                </div>

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

{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300">

    {/* Modal Box */}
    <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative transform transition-all duration-300 scale-95 animate-[fadeIn_0.3s_ease-out_forwards]">

      {/* ❌ Close Button (Top Right) */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
      >
        ✕
      </button>
<h2 className="text-xl font-bold mb-3">
  Requesting Quote For:
</h2>

<div className="flex items-center gap-3 mb-4 border p-3 rounded-lg bg-gray-50">
  
  <img
    src={selectedProduct?.image}
    alt="product"
    className="w-16 h-16 object-cover rounded"
  />

  <div>
    <p className="font-semibold text-gray-800">
      {selectedProduct?.name}
    </p>

    <p className="text-xs text-gray-500">
      {selectedProduct?.category}
    </p>
  </div>

</div>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-2 mb-3 rounded"  
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />

      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />

      <button
        onClick={handleSubmit}
        className="bg-[#4e342e] text-white px-4 py-2 rounded w-full mt-3 hover:scale-105 transition"
      >
        Send
      </button>

    </div>
  </div>
)}

  </div>



);

}

export default Products;