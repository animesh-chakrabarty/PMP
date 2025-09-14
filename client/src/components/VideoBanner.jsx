import React from 'react';
import vid from '../assets/vid.mp4'; // ✅ Make sure this file exists here

const VideoBanner = () => {
  return (
    <section className="video-section">
      <video
        className="video-banner"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoBanner;
