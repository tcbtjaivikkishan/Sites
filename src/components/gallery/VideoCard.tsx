"use client";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    youtubeId: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Video Container */}
      <div className="relative w-full pb-[56.25%] bg-gray-900">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Video Title */}
      <div className="p-4 bg-gradient-to-r from-emerald-600 to-green-600">
        <h3 className="text-white font-semibold text-sm md:text-base truncate">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
