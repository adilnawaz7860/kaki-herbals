"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

export const AnimatedTestimonials = ({
  isExpert,
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  isExpert?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 font-poppins">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                isActive(index) && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {testimonial.name}
                    </h3>
                    {
                      isExpert && (
                          <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {testimonial.designation}
                    </p>
                      )
                    }
                  
                    <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                      {testimonial.quote}
                    </motion.p>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-start gap-4 pt-12 md:pt-0">
          <button
            onClick={handlePrev}
            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            aria-label="Previous testimonial"
          >
            <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            aria-label="Next testimonial"
          >
            <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
