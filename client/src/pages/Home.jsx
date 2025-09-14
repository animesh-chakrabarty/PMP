import React from "react";
import "../index.css";
import PromoSlider from "../components/PromoSlider";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import MenuIcons from "../components/MenuIcons";
import LatestModels from "../components/LatestModels";
import VideoBanner from "../components/VideoBanner";
import BestPhonesSection from "../components/BestPhonesSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <PromoSlider />
      <SearchBar />
      <Navbar />
      <Slideshow />
      <MenuIcons />
      <LatestModels />
      <VideoBanner />
      <BestPhonesSection />
      <Footer />
    </div>
  );
}

export default Home;
