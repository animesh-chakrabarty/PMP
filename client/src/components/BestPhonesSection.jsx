import React from "react";
import { Link } from "react-router-dom";

const BestPhonesSection = () => {
  return (
    <section className="best-phones-section">
      <h1>Best Mobile</h1>
      <h2>Best Game</h2>
      <div className="best-phones-slider">
        <div className="best-phone-card">
          <Link to="/details/1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuLmIlBQfD2jtxMTIcGpE-nyvylbKnPYy4w&s"
              alt="Best Mobile 1"
            />
          </Link>
          <p>Best Mobile 1</p>
        </div>
        <div className="best-phone-card">
          <Link to="/details/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B9qOVx3mqkKF-2JIHrhouRO4lS5nA74h4w&s"
              alt="Best Mobile 2"
            />
          </Link>
          <p>Best Mobile 2</p>
        </div>

        <div className="best-phone-card">
          <Link to="/details/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw83BANxgyk_rSg-ucz7GeZsHGy2QbEIg3w&s"
              alt="Best Game 1"
            />
          </Link>
          <p>Best Game 1</p>
        </div>
        <div className="best-phone-card">
          <Link to="/details/4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lLkKmZ0psixjSN_XyVJhV8scYk34lVoksQ&s"
              alt="Best Game 2"
            />
          </Link>
          <p>Best Game 2</p>
        </div>
      </div>

      <h1>Best Budget</h1>
      <h2>Best Battery</h2>
      <div className="best-phones-slider">
        <div className="best-phone-card">
          <Link to="/details/5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuLmIlBQfD2jtxMTIcGpE-nyvylbKnPYy4w&s"
              alt="Best Mobile 1"
            />
          </Link>
          <p>Best Mobile 1</p>
        </div>
        <div className="best-phone-card">
          <Link to="/details/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B9qOVx3mqkKF-2JIHrhouRO4lS5nA74h4w&s"
              alt="Best Mobile 2"
            />
          </Link>
          <p>Best Mobile 2</p>
        </div>

        <div className="best-phone-card">
          <Link to="/details/7">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw83BANxgyk_rSg-ucz7GeZsHGy2QbEIg3w&s"
              alt="Best Game 1"
            />
          </Link>
          <p>Best Game 1</p>
        </div>
        <div className="best-phone-card">
          <Link to="/details/8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lLkKmZ0psixjSN_XyVJhV8scYk34lVoksQ&s"
              alt="Best Game 2"
            />
          </Link>
          <p>Best Game 2</p>
        </div>
      </div>
    </section>
  );
};

export default BestPhonesSection;
