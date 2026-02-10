"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// List of all countries
const countries = [
  "अफगानिस्तान",
  "अल्बानिया",
  "अल्जीरिया",
  "अंडोरा",
  "अंगोला",
  "अर्जेंटीना",
  "आर्मेनिया",
  "ऑस्ट्रेलिया",
  "ऑस्ट्रिया",
  "अज़रबैजान",
  "बहामास",
  "बहरीन",
  "बांग्लादेश",
  "बारबाडोस",
  "बेलारूस",
  "बेल्जियम",
  "बेलीज",
  "बेनिन",
  "भूटान",
  "बोलीविया",
  "बोस्निया और हर्ज़ेगोविना",
  "बोत्सवाना",
  "ब्राजील",
  "ब्रुनेई",
  "बुल्गारिया",
  "बुर्किना फासो",
  "बुस्र्ण्डी",
  "कंबोडिया",
  "कैमरून",
  "कनाडा",
  "केप वर्डे",
  "मध्य अफ्रीकी गणराज्य",
  "चाड",
  "चिली",
  "चीन",
  "कोलंबिया",
  "कोमोरोस",
  "कांगो",
  "कोस्टा रिका",
  "क्रोएशिया",
  "क्यूबा",
  "साइप्रस",
  "चेक गणराज्य",
  "डेनमार्क",
  "जिबूती",
  "डोमिनिका",
  "डोमिनिकन गणराज्य",
  "ईक्वाडोर",
  "मिस्र",
  "अल सल्वाडोर",
  "इक्वेटोरियल गिनी",
  "एरिट्रिया",
  "एस्टोनिया",
  "इस्वातिनी",
  "इथियोपिया",
  "फिजी",
  "फिनलैंड",
  "फ्रांस",
  "गैबॉन",
  "गाम्बिया",
  "जॉर्जिया",
  "जर्मनी",
  "घाना",
  "यूनान",
  "ग्रेनेडा",
  "ग्वाटेमाला",
  "गिनी",
  "गिनी-बिसाउ",
  "गुयाना",
  "हैती",
  "होंडुरास",
  "हंगरी",
  "आइसलैंड",
  "भारत",
  "इंडोनेशिया",
  "ईरान",
  "इराक",
  "आयरलैंड",
  "इज़राइल",
  "इटली",
  "जमैका",
  "जापान",
  "जॉर्डन",
  "कजाखस्तान",
  "कीनिया",
  "किरिबाती",
  "कुवैत",
  "किर्गिज़स्तान",
  "लाओस",
  "लातविया",
  "लेबनान",
  "लेसोथो",
  "लाइबेरिया",
  "लीबिया",
  "लिकटेंस्टीन",
  "लिथुआनिया",
  "लक्ज़मबर्ग",
  "मेडागास्कर",
  "मलावी",
  "मलेशिया",
  "मालदीव",
  "माली",
  "माल्टा",
  "मार्शल द्वीप",
  "मॉरिटानिया",
  "मॉरिशस",
  "मेक्सिको",
  "माइक्रोनेशिया",
  "मोल्दोवा",
  "मोनाको",
  "मंगोलिया",
  "मोंटेनेग्रो",
  "मोरक्को",
  "मोज़ाम्बिक",
  "म्यांमार",
  "नामीबिया",
  "नाउरू",
  "नेपाल",
  "नीदरलैंड्स",
  "न्यूज़ीलैंड",
  "निकारागुआ",
  "नाइजर",
  "नाइजीरिया",
  "उत्तर कोरिया",
  "उत्तर मैसेडोनिया",
  "नॉर्वे",
  "ओमान",
  "पाकिस्तान",
  "पलाऊ",
  "पनामा",
  "पापुआ न्यू गिनी",
  "पराग्वे",
  "पेरू",
  "फिलीपींस",
  "पोलैंड",
  "पुर्तगाल",
  "कतर",
  "रोमानिया",
  "रूस",
  "रवांडा",
  "सेंट किट्स और नेविस",
  "सेंट लूसिया",
  "सेंट विंसेंट और ग्रेनेडाइंस",
  "समोआ",
  "सैन मारिनो",
  "साउदी अरब",
  "सेनेगल",
  "सर्बिया",
  "सेशेल्स",
  "सिएरा लियोन",
  "सिंगापुर",
  "स्लोवाकिया",
  "स्लोवेनिया",
  "सोलोमन द्वीप",
  "सोमालिया",
  "दक्षिण अफ्रीका",
  "दक्षिण कोरिया",
  "दक्षिण सूडान",
  "स्पेन",
  "श्रीलंका",
  "सूडान",
  "सूरीनाम",
  "स्वीडन",
  "स्विट्ज़रलैंड",
  "सीरिया",
  "ताइवान",
  "ताजिकिस्तान",
  "तंजानिया",
  "थाईलैंड",
  "टीमोर-लेस्ते",
  "टोगो",
  "टोंगा",
  "त्रिनिदाद और टोबैगो",
  "ट्यूनीशिया",
  "तुर्की",
  "तुर्कमेनिस्तान",
  "तुवालु",
  "युगांडा",
  "यूक्रेन",
  "संयुक्त अरब अमीरात",
  "यूनाइटेड किंगडम",
  "संयुक्त राज्य अमेरिका",
  "उरुग्वे",
  "उज़्बेकिस्तान",
  "वानुआतु",
  "वेटिकन सिटी",
  "वेनेजुएला",
  "वियतनाम",
  "यमन",
  "जाम्बिया",
  "जिम्बाब्वे"
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
    }, 3000);
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
                className="px-12 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-shadow duration-300"
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
