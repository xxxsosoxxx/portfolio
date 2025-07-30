import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioPhotos } from "./portfolioPhotos";
import { motion, AnimatePresence } from "framer-motion";
import { shuffle } from "lodash";

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
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500 pointer-events-none z-20 rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 rounded-b-lg">
          <h3 className="photo-title font-orbitron text-white text-sm font-semibold tracking-widest uppercase mb-1 leading-tight">
            {photo.title}
          </h3>
          <p className="font-orbitron text-white text-xs tracking-wide leading-snug">
            {photo.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setPhotos(shuffle(portfolioPhotos));
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPhoto]);

  const openLightbox = (photo: Photo) => {
    setCurrentIndex(photos.findIndex((p) => p.id === photo.id));
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => setSelectedPhoto(null);

  const navigatePhoto = (dir: number) => {
    let newIndex = currentIndex + dir;
    if (newIndex < 0) newIndex = photos.length - 1;
    if (newIndex >= photos.length) newIndex = 0;
    setDirection(dir);
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <>
      <div className="w-full bg-background text-foreground">
        <div className="mx-auto max-w-none px-0">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4">
            {photos.map((photo, index) => (
              <GalleryItem key={photo.id} photo={photo} index={index} onOpen={openLightbox} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-sm bg-gray-200/60 dark:bg-black/60 pointer-events-none z-10" />

            {/* Lightbox container */}
            <div className="absolute inset-0 z-50 flex items-center justify-center p-4 min-h-[600px]">

              {/* ← Flèche gauche desktop */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(-1);
                  }}
                  className="hidden md:flex absolute inset-y-0 my-auto left-6 z-60 text-white p-2 hover:bg-white/10 rounded-full"
                  aria-label="Photo précédente"
                >
                  <ChevronLeft size={48} />
                </button>
              )}

              {/* → Flèche droite desktop */}
              {currentIndex < photos.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(1);
                  }}
                  className="hidden md:flex absolute inset-y-0 my-auto right-6 z-60 text-white p-2 hover:bg-white/10 rounded-full"
                  aria-label="Photo suivante"
                >
                  <ChevronRight size={48} />
                </button>
              )}

              {/* Swipe zone & Image */}
              <motion.div
                key={selectedPhoto.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -100) navigatePhoto(1);
                  else if (info.offset.x > 100) navigatePhoto(-1);
                }}
                initial={{
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(2px)",
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  x: direction > 0 ? -300 : 300,
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(2px)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-50 flex items-center justify-center p-4"
                onClick={closeLightbox}
              >
                {/* Bouton Exit */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="absolute top-6 right-6 z-60 text-white pointer-events-auto transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                  aria-label="Fermer lightbox"
                >
                  <X size={32} />
                </button>

                {/* Image affichée */}
                <div
                  className="relative max-w-full max-h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="max-w-full max-h-[90vh] object-contain rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white font-orbitron">
                    <h2 className="text-xl font-semibold mb-2 uppercase tracking-wider">
                      {selectedPhoto.title}
                    </h2>
                    <p className="text-white text-xs font-orbitron">{selectedPhoto.date}</p>
                    {selectedPhoto.description && (
                      <p className="text-white text-sm mt-2 font-light leading-relaxed">
                        {selectedPhoto.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Compteur */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-black/30 text-white rounded-full font-orbitron tracking-widest uppercase">
                  {currentIndex + 1} / {photos.length}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}



