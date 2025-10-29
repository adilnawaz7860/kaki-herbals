"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion, AnimatePresence } from "framer-motion";


export function CustomerTestimonials() {
const testimonials = [
  {
    quote:
      "I’ve been using Helth O Rin C and Ytacare Syrup for the past few months, and the difference in my energy levels is amazing. Kaki Herbals truly delivers on its promise of natural wellness!",
    name: "Umar Siddiqui",
    designation: "Customer",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "After trying several herbal products, I finally found relief with Nari Sudha Amrit from Kaki Herbals. It’s gentle, effective, and feels completely natural — I highly recommend it to everyone.",
    name: "Shadad Ahmad",
    designation: "Verified Buyer",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Livrin and Gashtorin have worked wonders for my digestion. I’ve been more active and healthier since using Kaki Herbals’ products. The quality and purity are top-notch.",
    name: "Shariq Farooqui",
    designation: "Regular Customer",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "I started using Prostayork and Shamdhu Amrit on a friend’s recommendation, and the results were incredible. These herbal products really help you feel balanced and rejuvenated.",
    name: "Adil Nawaz",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "Kaki Herbals has become my go-to for all-natural supplements. Their Diabocare and Cardiorin have helped me manage my health naturally — no side effects, just great results.",
    name: "Himanshu",
    designation: "Happy Customer",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "I’ve tried a few herbal brands, but nothing matches the purity of Kaki Herbals. Their products really make you feel healthy from the inside out.",
    name: "Umar Siddiqui",
    designation: "Returning Customer",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "Prostayork and Suzosha have become part of my daily routine. I can actually feel the difference in my stamina and overall wellness. Great job, Kaki Herbals!",
    name: "Shadad Ahmad",
    designation: "Verified Customer",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "My experience with Kaki Herbals has been nothing short of amazing. Their natural formulations are effective and trustworthy — you can tell they use real herbal ingredients.",
    name: "Shariq Farooqui",
    designation: "Customer",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "Gashtorin and Livrin helped me get rid of my digestive issues naturally. I’m really thankful to Kaki Herbals for making such authentic herbal remedies available.",
    name: "Adil Nawaz",
    designation: "Loyal Customer",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "The herbal tonics from Kaki Herbals have improved my immunity and overall health. I feel more energetic every day — these products truly work!",
    name: "Himanshu",
    designation: "Regular User",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];


  return (    <section className="py-12 bg-white border border-primary rounded-md">

    <div className="container mx-auto px-6">
        <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-primary mb-4">
                  What Our Customer Says
                </h2>
               
              </motion.div>
  <AnimatedTestimonials testimonials={testimonials} />
  </div>
  </section>);
}
