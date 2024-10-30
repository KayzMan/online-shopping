import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-6">Online Shopping</h1>

      <button onClick={goToProfile} className="bg-green-500 text-white py-2 px-2 mb-4 hover:bg-green-600 rounded">
        Go to Profile
      </button>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div className="border p-4 rounded shadow hover:shadow-lg transition" key={product.id}>
            <img alt={product.title} src={product.image} className="h-48 w-full object-cover mb-4 rounded" />

            <h2 className="text-xl font-bold mb-2">{product.title}</h2>

            <p className="text-yellow-500">Rating: {product.rating}</p>

            <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
