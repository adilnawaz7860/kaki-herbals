"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion, AnimatePresence } from "framer-motion";


export function ExpertTestimonials() {
  const testimonials = [
    {
      quote:
        "I recommend Helth O Rin C and Ytacare Syrup to my patients. These are safe, effective, and give good results. My patients are happy with them.",
      name: "Dr. Attiq Ahmad",
      designation: "B.U.M.S, Consultant",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I recommend Ayurvedic and Unani products like Nari Sudha Amrit, Systorin and Supari Pak for women’s health. They are natural, safe, and work well for my patients.",
      name: "Dr. Shirin",
      designation: "B.U.M.S, Gynaecologists",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Hakeem Tauheed Ji",
      designation: "BUMS, Consultant",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Products like Suzosha, Prostayork, and Shamdhu Amrit have become a regular part of my practice. They work well and my patients often share positive feedback",
      name: "Dr. Isnan",
      designation: "B.U.M.S, Consultant",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I have been prescribing Kaki Herbals' products to my patients and have seen very good results. The medicines are effective, and my patients are satisfied with the outcomes. I truly trust the quality of these products.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (    <section className="py-4 bg-white border border-primary rounded-md">

    <div className="container mx-auto px-6">
        <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-green-800 mb-4">
                  What Our Expert Says
                </h2>
               
              </motion.div>
  <AnimatedTestimonials isExpert={true} testimonials={testimonials} />
  </div>
  </section>);
}
