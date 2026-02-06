import Image from "next/image";
import { krishiTayyariData } from "@/lib/data/krishiTayyari.content";

export const metadata = {
  title: "TCBT वृक्षायुर्वेद कृषि तैयारी",
  description: "TCBT कृषि तैयारी के सम्पूर्ण सूत्र",
};

export default function KrishiTayyariPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        {krishiTayyariData.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-emerald-100"
          >
            {/* Section Title */}
            <div className="mb-6 border-b-2 border-emerald-100 pb-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-emerald-700">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="mt-2 text-gray-600 font-medium">
                  {section.subtitle}
                </p>
              )}
            </div>

            {/* Paragraph Content */}
            {section.content && (
              <div className="space-y-4 mb-6">
                {section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-justify text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Bullet List */}
            {section.list && (
              <ul className="space-y-3 mb-6">
                {section.list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100"
                  >
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Images */}
            {section.image && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.image.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={img}
                      alt={section.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

      </div>
    </div>
  );
}
