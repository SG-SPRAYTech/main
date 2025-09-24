"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactCardProps {
  title?: string;
  address?: string;
  phones?: string[];
  email?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title = "No Title",
  address = "No Address Provided",
  phones = [],
  email = "No Email Provided",
}) => (
  <section
    role="region"
    aria-labelledby={title.replace(/\s/g, "-").toLowerCase() + "-title"}
    className="shadow-xl rounded-lg max-w-md w-full p-6 sm:p-8 bg-white m-4"
  >
    <h2
      id={title.replace(/\s/g, "-").toLowerCase() + "-title"}
      className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2"
    >
      {title}
    </h2>
    <address className="not-italic text-gray-700 space-y-3 text-base">
      <p>{address}</p>
      {phones.map((phone, index) => (
        <p key={index}>
          <span role="img" aria-label="phone" className="mr-2 text-blue-700">
            📞
          </span>
          {phone}
        </p>
      ))}
      <p>
        <span role="img" aria-label="email" className="mr-2 text-blue-700">
          📧
        </span>
        <a
          href={`mailto:${email}`}
          className="text-blue-700 hover:underline break-words"
        >
          {email}
        </a>
      </p>
    </address>
  </section>
);

const Navbar = () => (
  <header className="shadow-md sticky top-0 z-50 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <div className="flex items-center space-x-4">
        <Image
          src="/RBAAC.png"
          alt="SGA GROUP OF COMPANIES company logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold text-black">Ankita Auto Coaters</h1>
      </div>
      <nav className="hidden md:flex space-x-8 font-semibold text-black">
        <Link href="/" className="hover:bg-blue-500 px-4 py-7 transition">
          Home
        </Link>
        <a href="#about" className="hover:bg-blue-500 px-4 py-7 transition">
          About Us
        </a>
        <a href="#companies" className="hover:bg-blue-500 px-4 py-7 transition">
          Products
        </a>
        <Link
          href="/Contact"
          className="hover:bg-blue-500 px-4 py-7 transition"
        >
          Contact
        </Link>
      </nav>
      <button
        aria-label="Toggle menu"
        className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
        id="menu-btn"
      >
        <i className="fas fa-bars fa-lg"></i>
      </button>
    </div>
  </header>
);

const ContactPage = () => {
  const address =
    "HW7M+6RH, Kharadi, Chandan NagarPune, Pune, Maharashtra 411014";
  const address1 = "M.I.D.C. Sanswadi Pune - 411026";
  const phones = [
    "+91 80474 93330",
    "+91 83000 30404 / +91 83000 30505",
    "044 4394 9900 / 044 2642 3380",
  ];
  const email = "sg-tech1@outlook.com";
  return (
    <main id="ContactPage" className="bg-gray-50 min-h-screen text-gray-800">
      <div className="bg-blue-500 h-2 w-full" />
      {/* Hero Section */}
      <section className="relative w-full h-80">
        <div className="w-full h-full relative">
          <Image
            src="/RBBGBackgroundContact.jpg"
            alt="Background showing contact information"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white font-sans font-bold text-2xl drop-shadow-lg max-w-lg">
            Painting is the language of imagination, where colour speaks louder
            than words.
          </p>
          <h1 className="text-white font-bold text-5xl drop-shadow-lg mt-4">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="flex flex-col md:flex-row justify-center mt-10 space-y-8 md:space-y-0 md:space-x-6 px-4 max-w-7xl mx-auto">
        <ContactCard
          title="Head Office"
          address={address}
          phones={phones}
          email={email}
        />
        <ContactCard
          title="Branch Office"
          address={address1}
          phones={phones}
          email={email}
        />
      </section>

      {/* Map Image */}
      <section className="relative w-full h-80 mt-12 px-4 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <div className="w-full h-full relative">
          <Image
            src="/RBMAP.jpeg"
            alt="Map image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Get a Quote Form */}
      <section
        className="bg-gray-100 flex items-center justify-center bg-cover bg-center mt-12"
        style={{ backgroundImage: "url('/RBContact1.jpg')" }}
      >
        <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 py-8 m-6">
          <h2 className="text-2xl text-center font-semibold mb-6 text-gray-800">
            Get a Quote
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Mobile Number"
                pattern="[0-9+()\\- ]{7,}"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
