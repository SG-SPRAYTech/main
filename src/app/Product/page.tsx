"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Truck } from "lucide-react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// Card data
const infoCards = [
  {
    title: "Free Delivery",
    icon: <Truck className="w-16 h-16 text-blue-500" />,
    description: "Free delivery all over India",
  },
  {
    title: "In the Trade",
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full text-xl font-bold">
        %
      </div>
    ),
    description: "Access exclusive discounts now.",
  },
  {
    title: "Next Day Delivery",
    icon: (
      <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-2xl font-bold">
        ✔
      </div>
    ),
    description: "Free next day delivery all over India.",
  },
];

// Filters
const filters = [
  "Epoxy",
  "Tinted Colors",
  "Metal Paints",
  "Primers",
  "PTFE Coating",
];

// Products
const products = [
  {
    id: 1,
    name: "Epoxy Shield",
    info: "High durability epoxy paint",
    image: "/ProdectBG.jpg",
  },
  {
    id: 2,
    name: "Tinted Wall Color",
    info: "Premium tinted wall finish",
    image: "/ProdectBG.jpg",
  },
  {
    id: 3,
    name: "Metal Guard",
    info: "Protective coating for metals",
    image: "/ProdectBG.jpg",
  },
  {
    id: 4,
    name: "Primer Pro",
    info: "High-quality primer for all surfaces",
    image: "/ProdectBG.jpg",
  },
  {
    id: 5,
    name: "PTFE Shield",
    info: "Non-stick PTFE coating",
    image: "/ProdectBG.jpg",
  },
  {
    id: 6,
    name: "Industrial Epoxy",
    info: "Heavy-duty epoxy for industries",
    image: "/ProdectBG.jpg",
  },
];

// Marquee component
const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scroll = () => {
      marquee.scrollLeft += 1;
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 20); // Adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-400 text-white overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap w-full overflow-hidden"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 px-6">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">Free Delivery all over India</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Product section
const ProductSection = () => (
  <section className="w-full px-6 py-12 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Filters */}
      <aside className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Filter
        </h2>
        <ul className="space-y-3">
          {filters.map((filter, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              {filter}
            </li>
          ))}
        </ul>
      </aside>

      {/* Products */}
      <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={250}
              className="rounded-md object-cover"
            />
            <h3 className="text-lg font-semibold mt-3 text-gray-800 dark:text-white">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {product.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// InfoCards section
const InfoCardsSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Page = () => {
  return (
    <div>
      <Navbar />
      <Marquee />

      {/* Our Products Heading */}
      <section className="w-full py-12 bg-gray-50 dark:bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <h1 className="text-4xl font-bold text-black dark:text-black">
            Our Products
          </h1>
          <p className="text-lg text-black dark:text-black leading-relaxed">
            We have a massive stock of products, we supply the best trade
            brands.
          </p>
        </div>
      </section>

      <ProductSection />
      <InfoCardsSection />
      <Footer />
    </div>
  );
};

export default Page;
