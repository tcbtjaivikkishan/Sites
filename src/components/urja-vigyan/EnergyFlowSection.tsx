import Image from "next/image";
import { ArrowUpRight, ArrowDownRight, ListOrdered, ImageIcon } from "lucide-react";

type EnergyFlowData = {
  title: string;
  subtitle: string;
  cards: {
    type: "positive" | "negative";
    title: string;
    text: string;
  }[];
  images: {
    src: string;
    alt: string;
  }[];
  principlesTitle: string;
  principles: string[];
  footerImage: {
    src: string;
    alt: string;
  };
};

export default function EnergyFlowSection({ data }: { data: EnergyFlowData }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <ArrowUpRight className="w-4 h-4" />
            ऊर्जा प्रवाह
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Energy Type Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {data.cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-md border-2 p-6 md:p-8 hover:shadow-lg transition-all duration-300 ${
                card.type === "positive" ? "border-green-200" : "border-red-200"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  card.type === "positive" ? "bg-green-100" : "bg-red-100"
                }`}>
                  {card.type === "positive" ? (
                    <ArrowUpRight className="w-7 h-7 text-green-600" />
                  ) : (
                    <ArrowDownRight className="w-7 h-7 text-red-600" />
                  )}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${
                  card.type === "positive" ? "text-green-700" : "text-red-700"
                }`}>
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Energy Flow Diagrams */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {data.images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-emerald-100 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <ListOrdered className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-800">
              {data.principlesTitle}
            </h3>
          </div>

          <div className="space-y-4">
            {data.principles.map((principle, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-0.5">
                  {principle}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Image */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-4 text-gray-500">
              <ImageIcon className="w-5 h-5" />
              <span className="text-sm font-medium">ऊर्जा प्रवाह चित्र</span>
            </div>
            <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gray-50">
              <Image
                src={data.footerImage.src}
                alt={data.footerImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
