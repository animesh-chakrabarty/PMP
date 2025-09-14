import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus, FaBolt } from "react-icons/fa";
import { getProductDetails } from "../services/Product.services";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log("fetching product details");
        const res = await getProductDetails(id);
        setProduct(res);
        setMainImage(res.images[0]?.url || ""); // Set the first image as the main image
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="details-page w-full px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-white border-2 border-orange-300 rounded-2xl shadow-xl p-4 sm:p-6">
        {/* Left: Images */}
        <div className="flex flex-col items-start">
          <img
            src={`http://localhost:1337${mainImage}`}
            alt={product.title}
            className="w-full max-h-[400px] sm:max-h-[500px] object-contain rounded-xl shadow-md mb-4 border border-orange-200 bg-gray-50"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={`http://localhost:1337${img?.url}`}
                alt={`Thumbnail-${i}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border-2 transition ${
                  mainImage === img.url
                    ? "border-red-500 scale-105"
                    : "border-transparent hover:border-orange-400"
                }`}
                onClick={() => setMainImage(img.url)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            {product.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-4">
            {product.description[0]?.children[0]?.text || "No description available."}
          </p>

          {/* Price & Offer */}
          <p className="text-xl sm:text-2xl font-bold text-red-600 mb-1">
            ₹{product.price}
          </p>
          <p className="text-sm text-orange-500 mb-6 font-medium">
            {product.offer || "No offers available."}
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
          {product.specs && product.specs.length > 0 && (
            <>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                Specifications:
              </h2>
              <div className="max-h-60 overflow-y-auto pr-2">
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;