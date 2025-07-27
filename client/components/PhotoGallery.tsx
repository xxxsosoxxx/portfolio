<div className="min-h-screen bg-background text-foreground"> 
  <PhotoGallery />
</div>
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioPhotos } from "./portfolioPhotos";

export interface Photo {
  id: number;
  src: string;
  title: string;
  date: string;
  description?: string;
}

function GalleryItem({
  photo,
  index,
  onOpen,
}: {
  photo: Photo;
  index: number;
  onOpen: (photo: Photo) => void;
}) {
  return (
    <div
      className="group relative break-inside-avoid cursor-pointer overflow-hidden bg-background border border-border hover:border-muted transition-all duration-700 hover:shadow-2xl rounded-lg"
      onClick={() => onOpen(photo)}
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-lg"
          loading="lazy"
        />

        {/* Overlay subtile */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500 pointer-events-none z-20 rounded-lg" />

        {/* Texte stylisé avec gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 rounded-b-lg">
          <h3 className="photo-title font-orbitron text-foreground text-sm font-semibold tracking-widest uppercase mb-1 leading-tight">
          {photo.title}
          </h3>

          <p className="text-muted-foreground text-xs tracking-wide leading-snug">
            {photo.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(portfolioPhotos.findIndex((p) => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < portfolioPhotos.length) {
      setCurrentIndex(newIndex);
      setSelectedPhoto(portfolioPhotos[newIndex]);
    }
  };

  return (
    <>
      {/* Masonry Columns */}
      <div className="w-full bg-background text-foreground">
        <div className="mx-auto max-w-none px-0">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4">
            {portfolioPhotos.map((photo, index) => (
              <GalleryItem
                key={photo.id}
                photo={photo}
                index={index}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lightbox-enter"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-60 text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(-1);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {currentIndex < portfolioPhotos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(1);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Main image */}
          <div
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[90vh] object-contain rounded-md"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-foreground font-orbitron">
              <h2 className="text-xl font-semibold mb-2 uppercase tracking-wider">
                {selectedPhoto.title}
              </h2>
              <p className="text-muted-foreground text-sm">{selectedPhoto.date}</p>
              {selectedPhoto.description && (
                <p className="text-muted-foreground text-sm mt-2 font-light leading-relaxed">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-black/30 text-white rounded-full font-orbitron tracking-widest uppercase">
            {currentIndex + 1} / {portfolioPhotos.length}
          </div>
        </div>
      )}
    </>
  );
}
