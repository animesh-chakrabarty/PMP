import React, { useEffect, useState } from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { getLatestModels, getBestSales } from "../services/Home.services";
import { Link } from "react-router-dom";

const LatestModels = () => {
  const [latestModels, setLatestModels] = useState([]);
  const [bestSales, setBestSales] = useState([]);

  useEffect(() => {
    const fetchLatestModels = async () => {
      try {
        const res = await getLatestModels();
        setLatestModels(res);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchBestSales = async () => {
      try {
        const res = await getBestSales();
        setBestSales(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLatestModels();
    fetchBestSales();
  }, []);

  return (
    <section className="latest-models-section">
      <h2 className="latest-models-heading">Latest Models</h2>
      <div className="latest-models-grid">
        {latestModels?.map((model) => (
          <div className="model-card" key={model.id}>
            <Link to={`/details/${model.id}`}>
              <img
                src={`http://localhost:1337${model?.thumbnail?.url}`}
                alt={model.title}
                className="model-image"
              />
            </Link>
            <div className="model-actions">
              <button className="wishlist-btn" title="Add to Wishlist">
                <FaHeart />
              </button>
              <button className="cart-btn" title="Add to Cart">
                <FaCartPlus />
              </button>
            </div>
            <p className="model-name">{model.title}</p>
          </div>
        ))}
      </div>

      <div className="best-sale">
        <h2 className="best-models-heading">Best Sale</h2>
        <div className="latest-models-grid">
          {bestSales?.map((model) => (
            <div className="model-card" key={model.id}>
              <Link to={`/details/${model.id}`}>
                <img
                  src={`http://localhost:1337${model?.thumbnail?.url}`}
                  alt={model.title}
                  className="model-image"
                />
              </Link>
              <div className="model-actions">
                <button className="wishlist-btn" title="Add to Wishlist">
                  <FaHeart />
                </button>
                <button className="cart-btn" title="Add to Cart">
                  <FaCartPlus />
                </button>
              </div>
              <p className="model-name">{model.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestModels;
