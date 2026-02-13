import Image from "next/image";
import { AlertTriangle, CheckCircle2, FlaskConical, Lightbulb, Clock, ArrowRight } from "lucide-react";

type ManureCycleData = {
  title: string;
  mainDiagram: {
    src: string;
    alt: string;
  };
  problem: {
    title: string;
    text: string;
    bulletsTitle: string;
    bullets: string[];
  };
  molecularChange: {
    title: string;
    text: string;
    proof: string;
  };
  solution: {
    title: string;
    steps: string[];
    mixtureTitle: string;
    mixtureList: string[];
    timeNote: string;
    usage: string;
  };
  analysis: {
    title: string;
    text: string;
    conclusion: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
};

export default function ManureCycleSection({
  data,
}: {
  data: ManureCycleData;
}) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
            <FlaskConical className="w-4 h-4" />
            खाद चक्र
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-yellow-500 rounded-full mx-auto" />
        </div>

        {/* Main Diagram */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-100 p-6 md:p-8 mb-12">
          <div className="relative w-full max-w-2xl mx-auto aspect-[5/7]">
            <Image
              src={data.mainDiagram.src}
              alt={data.mainDiagram.alt}
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Problem & Molecular Change */}
          <div className="space-y-6">
            {/* Problem Card */}
            <div className="bg-white rounded-2xl shadow-md border-2 border-red-100 overflow-hidden">
              <div className="bg-red-50 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-red-700">
                    {data.problem.title.replace("⚠️ ", "")}
                  </h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  {data.problem.text}
                </p>
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  {data.problem.bulletsTitle}
                </h4>
                <ul className="space-y-3">
                  {data.problem.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-sm">✗</span>
                      </span>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Molecular Change Card */}
            <div className="bg-white rounded-2xl shadow-md border-2 border-amber-100 overflow-hidden">
              <div className="bg-amber-50 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-amber-700">
                    {data.molecularChange.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {data.molecularChange.text}
                </p>
              </div>
              <div className="p-6 md:p-8 bg-white border-t border-amber-100">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong className="text-amber-700">प्रमाण:</strong>{" "}
                    {data.molecularChange.proof.replace("प्रमाण: ", "")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Solution */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-green-100 overflow-hidden">
            <div className="bg-green-50 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-700">
                  {data.solution.title.replace("✅ ", "")}
                </h3>
              </div>

              <div className="space-y-6">
                {data.solution.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-3">{step}</p>
                      {idx === 2 && (
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                          <h4 className="font-bold text-green-700 mb-3 text-sm">
                            {data.solution.mixtureTitle}
                          </h4>
                          <ul className="space-y-2">
                            {data.solution.mixtureList.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white border-t border-green-100 space-y-4">
              {/* Time Note */}
              <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl p-4 flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <p className="font-medium">{data.solution.timeNote}</p>
              </div>

              {/* Usage */}
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-gray-700">
                  <strong className="text-green-700">उपयोग:</strong>{" "}
                  {data.solution.usage.replace("उपयोग: ", "")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-md border-2 border-blue-100 overflow-hidden">
          <div className="bg-blue-50 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-700">
                {data.analysis.title}
              </h3>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              {data.analysis.text}
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
              <p className="text-blue-800 font-medium">
                {data.analysis.conclusion}
              </p>
            </div>

            {/* Analysis Images */}
            <div className="grid md:grid-cols-2 gap-6">
              {data.analysis.images.map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
