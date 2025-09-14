import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus, FaBolt } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();

  // Mock product (replace with API later)
  const mockProduct = {
    id,
    title: `Premium Smartphone ${id}`,
    shortDescription:
      "Experience next-level performance with blazing speed, cinematic display, and ultimate durability.",
    specs: [
      "6.7-inch Super AMOLED Display (120Hz)",
      "5000mAh Long-lasting Battery",
      "12GB RAM + 256GB Storage",
      "108MP Quad Camera with Night Mode",
      "5G Connectivity",
      "Dolby Atmos Dual Speakers",
      "6.7-inch Super AMOLED Display (120Hz)",
      "5000mAh Long-lasting Battery",
      "12GB RAM + 256GB Storage",
      "108MP Quad Camera with Night Mode",
      "5G Connectivity",
      "Dolby Atmos Dual Speakers",
    ],
    price: "₹49,999",
    offer: "Get 10% OFF with HDFC Cards + Free Screen Guard",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuLmIlBQfD2jtxMTIcGpE-nyvylbKnPYy4w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B9qOVx3mqkKF-2JIHrhouRO4lS5nA74h4w&s",
      "https://images.unsplash.com/photo-1580894732444-8ecdedc23f6c?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606813908987-5b8f8d57a3a0?w=600&auto=format&fit=crop",
    ],
  };

  const [mainImage, setMainImage] = useState(mockProduct.images[0]);

  return (
    <section className="details-page w-full px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-white border-2 border-orange-300 rounded-2xl shadow-xl p-4 sm:p-6">
        {/* Left: Images */}
        <div className="flex flex-col items-start">
          <img
            src={mainImage}
            alt={mockProduct.title}
            className="w-full max-h-[400px] sm:max-h-[500px] object-contain rounded-xl shadow-md mb-4 border border-orange-200 bg-gray-50"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {mockProduct.images.map((img, i) => (
              <img
                key={i}
                src={`${img}&auto=format&fit=crop&w=200&h=200`}
                alt={`Thumbnail-${i}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border-2 transition ${
                  mainImage === img
                    ? "border-red-500 scale-105"
                    : "border-transparent hover:border-orange-400"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            {mockProduct.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-4">
            {mockProduct.shortDescription}
          </p>

          {/* Price & Offer */}
          <p className="text-xl sm:text-2xl font-bold text-red-600 mb-1">
            {mockProduct.price}
          </p>
          <p className="text-sm text-orange-500 mb-6 font-medium">
            {mockProduct.offer}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <button className="w-full sm:w-auto bg-red-600 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-md">
              <FaCartPlus /> Add to Cart
            </button>
            <button className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition shadow-md">
              <FaBolt /> Buy Now
            </button>
          </div>

          {/* Specs */}
          <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
            Specifications:
          </h2>
          <div className="max-h-60 overflow-y-auto pr-2">
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              {mockProduct.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
