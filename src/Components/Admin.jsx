import React, { useState, useEffect } from "react";


function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 🔐 LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // 📦 PRODUCT STATES
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    description: "",
  });

  // 📂 CATEGORIES
  const categories = [
    "SOFAS",
    "BEDS",
    "DINING",
    "TV UNITS",
    "COFFEE TABLES",
    "CABINETS",
    "WARDROBES",
    "SOFA CUM BED",
    "BOOKSHELVES",
    "STUDY TABLES",
    "KITCHEN CABINETS",
    "SHOES RACK"
  ];

  // 🔥 CHECK LOGIN (PERSIST)
  useEffect(() => {
    if (localStorage.getItem("admin") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 🔐 LOGIN FUNCTION
const handleLogin = async (e) => {
  e.preventDefault();

  const res = await fetch("https://dreamwood-furniture.onrender.com/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.success) {
    alert("Login success");
  } else {
    alert("Invalid credentials");
  }
};

const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔓 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("admin");
    setIsLoggedIn(false);
  };

  // 📥 FETCH PRODUCTS
  const fetchProducts = () => {
    setLoading(true);

    fetch("https://dreamwood-furniture.onrender.com/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Error fetching products ❌");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  // ❌ DELETE PRODUCT
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://dreamwood-furniture.onrender.com/api/products${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      setProducts(prev => prev.filter(item => item._id !== id));
      alert("Deleted ✅");
    } catch {
      alert("Delete failed ❌");
    }
  };

  // ✏️ INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ➕ ADD PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dreamwood-furniture.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      alert("Product Added ✅");

      fetchProducts();

      setFormData({
        name: "",
        image: "",
        category: "",
        description: "",
      });

    } catch {
      alert("Error adding product ❌");
    }
  };

  // 🔐 LOGIN UI
  if (!isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8F5F2]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-md w-[300px]"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Admin Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleLoginChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleLoginChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#3e2723]"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // 🧠 MAIN ADMIN UI
  return (
    <div className="p-10 bg-[#F8F5F2] min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>

        <button
          onClick={handleLogout}
          className="bg-[#4e342e] text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#3e2723]"
        >
          Add Product
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">All Products</h2>

        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products 😔</p>
        ) : (
          products.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white p-4 mb-3 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-14 h-14 rounded object-cover"
                />

                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Admin;