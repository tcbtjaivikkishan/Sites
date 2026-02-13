"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// List of all countries
const countries = [
  "भारत",
  "अमेरिका",
  "कनाडा",
  "आन्या देश",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    contactMethod: "",
    inquiryType: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        contactMethod: "",
        inquiryType: "",
        description: "",
      });
    }, 8000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-stone-800">
          संपर्क करें
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-2">
              धन्यवाद!
            </h3>
            <p className="text-stone-600">
              आपका संदेश सफलतापूर्वक भेजा गया है।
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-3">
                अपना पूरा नाम दर्ज करें <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="पहला नाम"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="अंतिम नाम"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-3">
                  ईमेल पता दर्ज करें <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="आपका ईमेल"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-3">
                  फोन नंबर दर्ज करें <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="आपका फोन नंबर"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-3">
                अपना पता दर्ज करें <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                placeholder="सड़क का पता"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent mb-3"
              />
              <input
                type="text"
                name="addressLine2"
                placeholder="पता पंक्ति 2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent mb-3"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="शहर"
                  value={formData.city}
                  onChange={handleChange}
                  className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="राज्य/प्रांत"
                  value={formData.state}
                  onChange={handleChange}
                  className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">देश चुनें</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Method */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-3">
                अपनी पसंदीदा संपर्क विधि चुनें
              </label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">संपर्क विधि चुनें</option>
                <option value="email">ईमेल (Email)</option>
                <option value="phone">फोन (Phone)</option>
                <option value="online-form">ऑनलाइन फॉर्म (Online Form)</option>
                <option value="whatsapp">व्हाट्सएप (WhatsApp)</option>
              </select>
            </div>

            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-4">
                अपनी पूछताछ का प्रकार चुनें <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: "general", label: "सामान्य पूछताछ" },
                  { value: "sales", label: "बिक्री पूछताछ" },
                  { value: "technical", label: "तकनीकी सहायता" },
                  { value: "feedback", label: "प्रतिक्रिया" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="inquiryType"
                      value={option.value}
                      checked={formData.inquiryType === option.value}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="ml-3 text-stone-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-3">
                अपनी अनुरोध का विस्तार से वर्णन करें{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="आपकी संदेश यहां लिखें..."
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-12 py-3 bg-linear-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                सबमिट करें
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
