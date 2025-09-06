import React, { useEffect, useState } from 'react';

const promos = [
  "🔥 Offer @ ₹9!",
  "⚡ Live Sale @ ₹49!",
  "🎉 Trending Accessories @ ₹199!"
];

const PromoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-slider">
      <span>{promos[index]}</span>
    </div>
  );
};

export default PromoSlider;
