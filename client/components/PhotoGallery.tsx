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
          <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen p-4">
          {/* BACKDROP adaptatif dark/light */}
          <div className="absolute inset-0 backdrop-blur-sm bg-[hsl(var(--background))]/80 pointer-events-none z-10" />
          <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed top-6 left-6 text-xs px-3 py-1 rounded-md font-orbitron tracking-widest uppercase shadow-sm z-[60] bg-[hsl(var(--muted))]/30 text-[hsl(var(--foreground))]"
        >
          ID#{selectedPhoto?.id}
        </motion.div>

          {/* BOUTON EXIT sur le backdrop */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[999] p-2 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted-foreground))]/10 transition pointer-events-auto"
            aria-label="Fermer lightbox"
          >
            <X size={32} />
          </button>

          {/* FLÈCHES uniquement sur laptop */}
          {photos.length > 1 && (
            <>
              <button
                onClick={() => navigatePhoto(-1)}
                className="absolute top-1/2 left-6 -translate-y-1/2 z-[999] hidden md:flex h-[64px] w-[64px] p-2 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted-foreground))]/10 transition pointer-events-auto"
                aria-label="Photo précédente"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={() => navigatePhoto(1)}
                className="absolute top-1/2 right-6 -translate-y-1/2 z-[999] hidden md:flex h-[64px] w-[64px] p-2 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted-foreground))]/10 transition pointer-events-auto"
                aria-label="Photo suivante"
              >
                <ChevronRight size={48} />
              </button>
            </>
          )}

          {/* SWIPE IMAGE + INFOS */}
          <motion.div
            key={selectedPhoto.id}
            className="relative z-50 flex items-center justify-center"
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
            onClick={closeLightbox}
          >
            <div
            className="relative max-w-full max-h-full flex flex-col items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[90vh] object-contain rounded-md"
            />
            <div className="mt-4 text-center">
              <h3 className="photo-title font-orbitron text-[hsl(var(--foreground))] text-sm font-semibold tracking-widest uppercase leading-tight">
                {selectedPhoto.title}
              </h3>
              <p className="font-orbitron text-[hsl(var(--foreground))] text-xs tracking-wide leading-snug mb-2">
                {selectedPhoto.date}
              </p>
              {selectedPhoto.description && (
                <p className="text-xs font-orbitron text-[hsl(var(--muted-foreground))] max-w-xl mx-auto leading-snug">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
            </div>

          </motion.div>
        </div>
        )}
      </AnimatePresence>
    </>
  );
}