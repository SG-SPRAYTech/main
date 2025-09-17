import React from "react";
import Image from "next/image";

const BodyBG = () => {
  return (
    <section className="relative h-[60vh] md:h-[60vh] flex items-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/paintBG.jpeg" // Place your image inside `public/`
          alt="Innovative paint production technology"
          fill
          className="object-cover"
          priority // Improves LCP (performance)
          quality={100}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Text Content */}
      <div className="relative px-4 text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          Making paints
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          Find innovative production technology for making paints & connect
          directly with world-best specialist.
        </p>
      </div>
    </section>
  );
};

export default BodyBG;
