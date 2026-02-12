import Link from "next/link";

type HeroData = {
  heading: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
};

export default function HeroSection({ data }: { data: HeroData }) {
  return (
    <div className="text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-800 text-white text-sm font-medium shadow-lg mb-8">
        <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
        प्राकृतिक कृषि विज्ञान
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6 leading-tight tracking-tight">
        {data.heading}{" "}
        <span className="text-green-700">{data.highlight}</span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-light mb-10">
        {data.subtitle}
      </p>

      {/* Decorative Divider */}
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-600 to-transparent" />
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-600" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-stone-600" />
        </div>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-green-600 to-transparent" />
      </div>

      {/* CTA */}
      <Link
        href={data.ctaHref}
        className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
      >
        {data.ctaText}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
