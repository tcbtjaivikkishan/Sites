import { BookOpen, Atom, Sun, Flame, Droplets, Wind, Mountain } from "lucide-react";

type UrjaCard = {
  title: string;
  description: string;
  accent?: "green" | "red" | "yellow" | "blue" | "orange" | "pink" | "amber";
};

type CosmicData = {
  title: string;
  intro: string;
  sections: UrjaCard[];
  trisarenu: {
    title: string;
    items: { emoji: string; label: string; colorClass: string }[];
  };
  panchmahabhoot: {
    title: string;
    items: { emoji: string; label: string; bgClass: string }[];
  };
  bookCta: {
    title: string;
    subtitle: string;
  };
  note: string;
};

const accentColors = {
  green: {
    bg: "bg-green-50",
    border: "border-green-500",
    text: "text-green-800",
    icon: "text-green-600",
  },
  yellow: {
    bg: "bg-amber-50",
    border: "border-amber-500",
    text: "text-amber-800",
    icon: "text-amber-600",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    text: "text-blue-800",
    icon: "text-blue-600",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-500",
    text: "text-orange-800",
    icon: "text-orange-600",
  },
  pink: {
    bg: "bg-rose-50",
    border: "border-rose-500",
    text: "text-rose-800",
    icon: "text-rose-600",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-500",
    text: "text-red-800",
    icon: "text-red-600",
  },
  amber: {
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    text: "text-yellow-800",
    icon: "text-yellow-600",
  },
};

const sectionIcons = [Atom, Sun, Atom, Flame, Mountain, Droplets];

export default function CosmicCreationSection({ data }: { data: CosmicData }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
            <Atom className="w-4 h-4" />
            ब्रह्माण्ड की उत्पत्ति
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Energy Cards */}
        <div className="space-y-6 mb-8">
          {data.sections.map((section, idx) => {
            const colors = accentColors[section.accent || "green"];
            const Icon = sectionIcons[idx] || Atom;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-md border-2 ${colors.border} overflow-hidden hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`${colors.bg} p-6 md:p-8`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-bold ${colors.text} mb-3`}>
                        {section.title.replace(/[🌱🌞🌾]/g, "").trim()}
                      </h3>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                        {section.description}
                      </p>

                      {/* Trisarenu section */}
                      {section.title.includes("त्रिसरेणु") && (
                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                          {data.trisarenu.items.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
                            >
                              <div className="text-3xl mb-2">{item.emoji}</div>
                              <p className={`font-semibold ${item.colorClass}`}>
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Panchmahabhoot section */}
                      {section.title.includes("पंचमहाभूत") && (
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
                          {data.panchmahabhoot.items.map((item, i) => (
                            <div
                              key={i}
                              className={`${item.bgClass} rounded-xl p-4 text-center border border-gray-100`}
                            >
                              <div className="text-2xl mb-1">{item.emoji}</div>
                              <p className="text-sm font-semibold text-gray-800">
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Book CTA */}
        <div className="bg-linear-to-br from-amber-100 to-orange-100 rounded-2xl p-8 md:p-10 border-2 border-amber-300 text-center mb-8 shadow-md">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-amber-700" />
          </div>
          <p className="text-lg md:text-xl text-amber-800 font-medium mb-3">
            {data.bookCta.title.replace("📚 ", "")}
          </p>
          <p className="text-amber-900 text-2xl md:text-3xl font-bold">
            {data.bookCta.subtitle}
          </p>
        </div>

        {/* Note */}
        <div className="bg-green-100 rounded-2xl p-6 md:p-8 border-2 border-green-300 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
              <Wind className="w-5 h-5 text-green-700" />
            </div>
            <p className="text-green-800 text-base md:text-lg font-medium leading-relaxed">
              {data.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
