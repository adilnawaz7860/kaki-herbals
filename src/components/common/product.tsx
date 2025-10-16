"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

// ✅ Product Data
const products = [
  {
    id: 1,
    title: "Hapitol Syrup",
    category: "Healthcare",
    image: "/images/product1.jpeg",
    description: "Protects your  liver against various Hepatotoxins and Promotes appetite with Pure herbal extracts.",
    price: "₹499",
  },
  {
    id: 2,
    title: "Sumbul Hair Oil",
    category: "Supplements",
    image: "/images/product9.jpeg",
    description: "Prevents your hair fall and dandruff formation, promotes your hair growth and preserves tha natural colour of hair with herbal hair tonic.",
    price: "₹699",
  },
  {
    id: 3,
    title: "Digetol Powder",
    category: "Wellness",
    image: "/images/product3.jpeg",
    description: "Enhances your digestion and improve appetite, use full in abdominal discomfort and constipation with herbals formulations.",
    price: "₹299",
  },
  {
    id: 4,
    title: "Dibetol Powder",
    category: "Cosmetic",
    image: "/images/product4.jpeg",
    description: "Control your diabetes with herbal formulations.",
    price: "₹399",
  },
  {
    id: 5,
    title: "Joint Heed Powder",
    category: "Personal Care",
    image: "/images/product5.jpeg",
    description: "Herbal formulations for your joint pain and arthritis.",
    price: "₹549",
  },
   {
    id: 6,
    title: "Joint Wariness Oil",
    category: "Personal Care",
    image: "/images/product8.jpg",
    description: "Natural oil for quick relief from joint and muscle pain.",
    price: "₹549",
  },
//   {
//     id: 6,
//     title: "Diabetes Control Powder",
//     category: "Herbal Remedy",
//     image: "/images/product6.jpeg",
//     description: "Supports healthy blood sugar management.",
//     price: "₹899",
//   },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const whatsappNumber = "918707560361"; // Replace with your WhatsApp number

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-green-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Explore Our Herbal Products
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover trusted Ayurvedic and herbal formulations crafted for your health and wellness.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                >
              <Card className="overflow-hidden min-h-[500px] shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
  <div>
    <div className="relative h-64 w-full cursor-pointer">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-100 scale-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Product Info */}
    <div className="p-5 text-center flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-primary mb-2">
        {product.title}
      </h3>
      <p className="text-gray-600 mb-3 flex-grow">{product.description}</p>
    </div>
  </div>

  {/* Fixed Buy Button at Bottom */}
  <div className="p-5 pt-0 mt-auto">
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hi, I'm interested in buying *${product.title}*`
      )}`}
      target="_blank"
    >
      <Button className="bg-primary hover:bg-green-800 text-white w-full">
        Buy Now
      </Button>
    </Link>
  </div>
</Card>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-white">
          <div className="relative">
            <Image
              src={selectedImage?.image || ""}
              alt={selectedImage?.title || ""}
              width={1200}
              height={800}
              className="w-full h-[70vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
