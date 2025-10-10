"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/app/SGSprayTech/Navbar/Navbar";

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
    className="shadow-xl rounded-lg max-w-md w-full p-6 sm:p-8 bg-white m-4"
  >
    <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
      {title}
    </h2>
    <address className="not-italic text-gray-700 space-y-3 text-base">
      <p>{address}</p>
      {phones.map((phone, index) => (
        <p key={index}>📞 {phone}</p>
      ))}
      <p>
        📧{" "}
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

const ContactPage = () => {
  const address = "HW7M+6RH, Kharadi, Chandan Nagar, Pune, Maharashtra 411014";
  const address1 = "M.I.D.C. Sanswadi Pune - 411026";
  const phones = [
    "+91 80474 93330",
    "+91 83000 30404 / +91 83000 30505",
    "044 4394 9900 / 044 2642 3380",
  ];
  const email = "sg-tech1@outlook.com";

  return (
    <main className="bg-gray-50 min-h-screen text-gray-800">
      {/* ✅ Navbar will only come from here now */}
      <Navbar/>

      <div className="bg-blue-500 h-2 w-full" />

      {/* Hero Section */}
      <section className="relative w-full h-80">
        <Image
          src="/RBBGBackgroundContact.jpg"
          alt="Background showing contact information"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white font-bold text-2xl drop-shadow-lg max-w-lg">
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

      {/* Map */}
      <section className="relative w-full h-80 mt-12 px-4 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/RBMAP.jpeg"
          alt="Map image"
          fill
          className="object-cover"
        />
      </section>
    </main>
  );
};

export default ContactPage;
