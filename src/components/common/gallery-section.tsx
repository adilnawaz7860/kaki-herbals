"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from "lucide-react";
import Link from "next/link";

// Gallery data
const galleryImages = [
  {
    id: 1,
    title: "Manufacturing Unit",
    category: "Facility",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    description: "State-of-the-art manufacturing facility",
  },
  {
    id: 2,
    title: "Quality Testing Lab",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&h=600&fit=crop",
    description: "Advanced quality control and testing",
  },
  {
    id: 3,
    title: "Herbal Products",
    category: "Products",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop",
    description: "Premium Ayurvedic medicines",
  },
  {
    id: 4,
    title: "Research & Development",
    category: "R&D",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
    description: "Innovation in traditional medicine",
  },
  {
    id: 5,
    title: "Packaging Unit",
    category: "Facility",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    description: "Modern packaging solutions",
  },
  {
    id: 6,
    title: "Distribution Network",
    category: "Network",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
    description: "Pan-India distribution reach",
  },
];

type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price?: string; // optional if you sometimes don't have it
};


const categories = ["All", "Facility", "Laboratory", "Products", "R&D", "Network"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedImage, setSelectedImage] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Show only first 6 images in preview
  const displayedImages = filteredImages.slice(0, 6);

  const openLightbox = (image: any, index: any) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : displayedImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayedImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < displayedImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(displayedImages[newIndex]);
  };

  return (
    <section className="py-16 bg-white border border-primary rounded-md">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our world-class facilities, quality products, and commitment
            to excellence in Ayurvedic healthcare
          </p>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-green-700 hover:bg-green-800 text-white"
                  : "border-green-700 text-green-700 hover:bg-green-50"
              } transition-all`}
            >
              {category}
            </Button>
          ))}
        </motion.div> */}

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative">
                  <div
                    className="relative h-64 overflow-hidden"
                    onClick={() => openLightbox(image, index)}
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div> */}
                      
                      {/* Expand Icon */}
                      <div className="absolute top-4 right-4">
                        <Maximize2 className="text-white" size={24} />
                      </div>
                    </div>

                    {/* Category Badge */}
                    {/* <div className="absolute top-4 left-4">
                      <span className="bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {image.category}
                      </span>
                    </div> */}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <Link href="/gallery">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg group"
            >
              View All Gallery
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link> */}
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-white">
            <DialogHeader className="p-6 pb-0">
              {/* <DialogTitle className="text-2xl text-green-700">
                {selectedImage?.title}
              </DialogTitle> */}
            </DialogHeader>
            
            <div className="relative">
              <img
                src={selectedImage?.image}
                alt={selectedImage?.title}
                className="w-full h-[70vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <ChevronLeft className="text-green-700" size={24} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <ChevronRight className="text-green-700" size={24} />
              </button>
            </div>
            
            <div className="p-6 pt-0">
              {/* <p className="text-gray-600">{selectedImage?.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Category: <span className="font-semibold text-green-700">{selectedImage?.category}</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Image {currentIndex + 1} of {displayedImages.length}
              </p> */}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}