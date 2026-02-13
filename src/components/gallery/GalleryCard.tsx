import Image from "next/image";
import { useState } from "react";

export default function GalleryCard({ image }: { image: { src: string; alt: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer bg-white"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain transition-all duration-300 group-hover:scale-105 p-2"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <p className="text-white text-sm font-medium p-4">{image.alt}</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
