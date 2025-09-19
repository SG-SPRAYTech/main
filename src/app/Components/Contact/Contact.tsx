"use client";
import React from 'react'
import { useState } from "react";
import { Lock } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
    product: "",
    name: "",
    contact: "",
    location: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents reload
    console.log("Form Data:", formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
   <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          Tell us about your production challenges
        </p>

        <div className="flex items-center justify-center gap-2 mt-3 text-gray-500 text-sm">
          <Lock className="w-4 h-4" />
          <span>All your data is kept confidential</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-8 bg-gray-50 p-6 rounded-2xl shadow-md space-y-4"
      >
        {/* Product */}
        <input
          type="text"
          name="product"
          placeholder="Your Product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Contact Number - Required */}
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number *"
          required
          value={formData.contact}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Email - Required */}
        <input
          type="email"
          name="email"
          placeholder="Email ID *"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </button>
      </form>
    </section>
  )
}

export default Contact