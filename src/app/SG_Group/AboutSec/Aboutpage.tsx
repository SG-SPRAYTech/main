"use client";
import React from "react";
import Image from "next/image";

const Aboutpage = () => {
  return (
    <div className="main">
      {/* Top Intro Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto text-center px-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to{" "}
            <span className="text-blue-600">SG Group of Companies</span>
          </h1>

          {/* Short Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in manufacturing and innovation. Delivering
            quality products and services across industries with excellence and
            reliability.
          </p>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/SGGROUPBG.png" // place this image in /public folder
          alt="SG Group Corporate"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Welcome to{" "}
            <span className="text-white">SG Group of Companies</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Driving innovation and excellence across industries with quality and
            trust.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-600 py-16 mt-5 rounded-xl mx-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About SG Group of Companies
          </h2>

          {/* Long Description */}
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            SG Group of Companies is a diversified business conglomerate with a
            strong presence across multiple industries. We specialize in
            high-quality{" "}
            <span className="font-semibold">paint manufacturing</span>, serving
            as a trusted supplier to automotive, industrial, and residential
            sectors. Alongside paints, we provide comprehensive{" "}
            <span className="font-semibold">
              coating solutions, primers, epoxy, and PTFE-based products
            </span>{" "}
            that ensure durability and superior performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
