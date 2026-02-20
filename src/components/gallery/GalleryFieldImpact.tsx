"use client";

import Link from "next/link";
import GalleryCard from "./GalleryCard";
import VideoCard from "./VideoCard";

interface GalleryFieldImpactData {
  hero: {
    title: string;
    subtitle: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  videos: {
    id: string;
    title: string;
    youtubeId: string;
    thumbnail?: string;
  }[];
}

export default function GalleryFieldImpact({ data }: { data: GalleryFieldImpactData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-emerald-50 max-w-4xl mx-auto font-light">
            {data.hero.subtitle}
          </p>
          <div className="h-1 w-32 bg-white/50 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 space-y-20">

        {/* Images Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              फोटो गैलरी
            </h2>
            <div className="h-1 w-24 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.images.map((image, index) => (
              <GalleryCard key={index} image={image} />
            ))}
          </div>
        </section>

        {/* Videos Section */}
        {data.videos && data.videos.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
                वीडियो गैलरी
              </h2>
              <div className="h-1 w-24 bg-emerald-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            प्राकृतिक खेती के साथ जुड़ें
          </h3>
          <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
            हमारे साथ जुड़कर प्राकृतिक खेती की यात्रा शुरू करें और अपनी खेती को बदलें
          </p>
          <Link href="https://products.tcbtjaivikkisan.com" className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            अभी जुड़ें
          </Link>
        </section>

      </div>
    </div>
  );
}
