import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const kindBadge = {
  color: 'Warna',
  angle: 'Angle',
  detail: 'Detail',
};

export default function ProductGallery({ product, index, onSelect }) {
  const [dir, setDir] = useState(0);
  const slides = product.gallery;
  const slide = slides[index];

  const go = (step) => {
    const next = (index + step + slides.length) % slides.length;
    setDir(step);
    onSelect(next);
  };
  const jump = (next) => {
    setDir(next > index ? 1 : -1);
    onSelect(next);
  };

  return (
    <div>
      {/* Main image */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-100 aspect-square flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={`${product.name} — ${slide.label}`}
            initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 w-full h-full ${
              slide.kind === 'detail' ? 'object-cover' : 'object-contain p-6'
            }`}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          type="button"
          aria-label="Foto sebelumnya"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white text-text rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Foto berikutnya"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white text-text rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Caption */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full border border-gray-100 text-sm font-medium whitespace-nowrap">
          <span className="text-text">{slide.label}</span>
          <span className="text-text-muted"> · {kindBadge[slide.kind]}</span>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => jump(i)}
            className={`rounded-full transition-all ${
              i === index ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2 mt-3">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => jump(i)}
            aria-label={s.label}
            className={`aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border transition-all ${
              i === index ? 'ring-2 ring-primary border-transparent' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img src={s.src} alt="" className="w-full h-full object-contain p-1" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
