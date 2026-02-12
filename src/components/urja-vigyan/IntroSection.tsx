import { Leaf, AlertTriangle, Sparkles } from "lucide-react";

type IntroData = {
  title: string;
  para: string;
  warningTitle: string;
  warningText: string;
  techTitle: string;
  techText: string;
};

export default function IntroSection({ data }: { data: IntroData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            प्रकृति का संतुलन
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 md:p-10 mb-8">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            {data.para}
          </p>

          {/* Warning Card */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 md:p-8 border-l-4 border-red-500 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-3">
                  {data.warningTitle.replace("⚠️ ", "")}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {data.warningText}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border-l-4 border-green-600">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-3">
                  {data.techTitle.replace("✨ ", "")}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {data.techText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
