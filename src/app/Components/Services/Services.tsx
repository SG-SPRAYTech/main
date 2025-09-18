import React from "react";

const Services = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-10">Explore our services</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <a
          href="#"
          className="group w-full p-8 border border-green-500 rounded-lg shadow-md hover:border-l-4 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold relative">
            Consultancy
            <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="p-2 text-start text-gray-700">
            Our consultancy service helps you cut through the noise, providing
            the strategic guidance needed to achieve the perfect finish. We&apos;ll
            help you turn your aspirations into a tangible, lasting reality.
          </p>
        </a>

        {/* Card 2 */}
        <a
          href="#"
          className="group w-full p-8 border border-green-500 rounded-lg shadow-md hover:border-l-4 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold relative">
            Paint Shop Consultancy
            <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="p-2 text-start text-gray-700">
            We provide strategic guidance to optimize your paint shop&apos;s
            operations. Our focus is to enhance efficiency and productivity,
            helping your business thrive.
          </p>
        </a>

        {/* Card 3 */}
        <a
          href="#"
          className="group w-full p-8 border border-green-500 rounded-lg shadow-md hover:border-l-4 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold relative">
            Paint Equipments
            <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="p-2 text-start text-gray-700">
            We offer a curated selection of advanced paint equipment designed to
            enhance efficiency and achieve a flawless finish. Our focus is on
            providing reliable tools that elevate your craft.
          </p>
        </a>

        {/* Card 4 */}
        <a
          href="#"
          className="group w-full p-8 border border-green-500 rounded-lg shadow-md hover:border-l-4 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold relative">
            Paint Supply
            <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="p-2 text-start text-gray-700">
            We provide a comprehensive range of premium paint supplies. Our
            focus is on delivering everything you need for a professional and
            flawless finish, ensuring your project is a success.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Services;
