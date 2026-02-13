import Image from "next/image";
import { Zap, CheckCircle2 } from "lucide-react";

type NineEnergiesData = {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  badge: string;
  points: string[];
};

export default function NineEnergiesSection({
  data,
}: {
  data: NineEnergiesData;
}) {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-green-400 to-emerald-400 rounded-full mx-auto mb-6" />
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-2xl">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
            <div className="space-y-6">
              {data.points.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                  </div>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 border-2 border-green-900" />
                  ))}
                </div>
                <p className="text-white/60 text-sm">नौ ऊर्जाओं का संतुलन</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
