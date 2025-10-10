"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  imageSrc: string; // Path to image in public folder
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const HeroSection = ({
  imageSrc,
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      {/* Hero Image */}
      <Image
        src={imageSrc}
        alt={title || "Hero Image"}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        {title && (
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-white text-lg lg:text-2xl mb-6">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition"
          >
            {ctaText}
          </Link>
        )}
      </div> */}
    </section>
  );
};
