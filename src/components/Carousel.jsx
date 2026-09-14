import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Carousel({ images, autoPlay = false, interval = 5000, fullWidth = false }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, images.length]);

  if (images.length === 0) return null;

  const getPosition = (index) => {
    const diff = ((index - current) % images.length + images.length) % images.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === images.length - 1) return 'left';
    return 'hidden';
  };

  const positionStyles = {
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      rotateY: 0,
      translateZ: 0,
    },
    left: {
      x: fullWidth ? '-35%' : '-30%',
      scale: 0.85,
      opacity: 0.4,
      zIndex: 0,
      rotateY: -25,
      translateZ: -150,
    },
    right: {
      x: fullWidth ? '35%' : '30%',
      scale: 0.85,
      opacity: 0.4,
      zIndex: 0,
      rotateY: 25,
      translateZ: -150,
    },
    hidden: {
      x: 0,
      scale: 0.75,
      opacity: 0,
      zIndex: -1,
      rotateY: 0,
      translateZ: -300,
    },
  };

  return (
    <div className={`relative group ${fullWidth ? 'w-full' : ''}`} style={{ perspective: '1200px' }}>
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-white ${
        fullWidth 
          ? 'w-full h-[50vh] lg:h-[80vh]' 
          : 'rounded-2xl aspect-[3/4] shadow-xl'
      }`}>
        {/* All Images - 3D Rotating */}
        {images.map((image, index) => {
          const pos = getPosition(index);
          const style = positionStyles[pos];

          return (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              animate={{
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
                zIndex: style.zIndex,
                rotateY: style.rotateY,
                translateZ: style.translateZ,
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className={`absolute top-0 h-full object-contain rounded-sm ${
                fullWidth
                  ? 'left-[15%] lg:left-[18%] w-[70%] lg:w-[64%]'
                  : 'left-[10%] w-[80%]'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            />
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all z-20 ${
              fullWidth ? 'left-2 lg:left-4' : 'left-3'
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-text" />
          </button>
          <button
            onClick={next}
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all z-20 ${
              fullWidth ? 'right-2 lg:right-4' : 'right-3'
            }`}
          >
            <ChevronRight className="w-5 h-5 text-text" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current
                  ? 'bg-primary w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
