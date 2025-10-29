"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  images: string[]; // e.g. ["/hero1.jpeg", "/hero2.jpeg", "/hero3.jpeg"]
  interval?: number; // slide duration (default 5s)
}

export const HeroSection = ({ images, interval = 5000 }: HeroSectionProps) => {
  const [current, setCurrent] = useState(0);

  // ⏱️ Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section
      className="
        relative w-full 
        h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]
        overflow-hidden rounded-2xl
      "
    >
      <AnimatePresence>
        {images.map(
          (img, index) =>
            index === current && (
              <motion.div
                key={img}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={img.startsWith("/") ? img : `/${img}`}
                  alt={`Hero ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 100vw,
                         100vw"
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-4 sm:bottom-6 flex justify-center w-full gap-2 sm:gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-white scale-110 shadow-md"
                : "bg-gray-400/70 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
