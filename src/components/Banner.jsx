import React from "react";
import BannerImage from "../assets/Hero.png"; 

const Banner = () => {
  return (
    <div
      className="relative hero min-h-[60vh] text-white rounded-xl flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",        // ensures image covers the whole hero
        backgroundPosition: "center",   // centers the image
        backgroundRepeat: "no-repeat",  // prevents tiling
      }}
    >
      {/* Optional: semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

      {/* Hero Content */}
      <div className="relative hero-content text-center px-4">
        <div>
          <h1 className="text-5xl font-bold">Exam Seating Arrangement System</h1>
          <p className="py-6 text-lg">
            Smart exam hall, student & invigilator management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
