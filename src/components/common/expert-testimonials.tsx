"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion, AnimatePresence } from "framer-motion";


export function ExpertTestimonials() {
const testimonials = [
  {
    quote:
      "I often recommend Helth O Rin C and Ytacare Syrup to my patients. These herbal formulations from Kaki Herbals are safe, effective, and deliver consistent results. My patients report noticeable improvements in their health.",
    name: "Dr. Ravi Srivastav",
    designation: "B.U.M.S, Consultant",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "For women’s wellness, I frequently suggest Nari Sudha Amrit, Systorin, and Supari Pak by Kaki Herbals. These Unani and Ayurvedic remedies are natural, hormone-balancing, and well-tolerated by my patients.",
    name: "Dr. Mohammad Muzaffar Husain",
    designation: "B.U.M.S, Gynaecologist",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Herbal formulations like Livrin and Gashtorin have proven highly effective for digestive and liver health. I appreciate Kaki Herbals’ commitment to quality and traditional healing principles.",
    name: "Dr. Kashan Abbas",
    designation: "B.U.M.S, Consultant",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Products such as Suzosha, Prostayork, and Shamdhu Amrit have become trusted remedies in my practice. Patients consistently share positive feedback on their effectiveness and purity.",
    name: "Dr. Shamshad Ahmad",
    designation: "B.U.M.S, Consultant",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "I’ve been prescribing Kaki Herbals’ natural products for various conditions — from immunity to reproductive health. The quality and consistency are excellent, and patients notice results without side effects.",
    name: "Dr. Mahaboob Alam Beg",
    designation: "B.U.M.S, Herbal Consultant",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "Kaki Herbals’ formulations combine traditional wisdom with modern standards. Products like Cardiorin and Diabocare have shown promising outcomes in managing chronic conditions naturally.",
    name: "Dr. Asim Rayeen",
    designation: "B.U.M.S, Ayurvedic Practitioner",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "I recommend herbal products from Kaki Herbals to patients seeking natural alternatives. Their formulations are clean, authentic, and effective in restoring balance and vitality.",
    name: "Dr. Chand Babu",
    designation: "B.U.M.S, Herbal Medicine Specialist",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "As a practitioner, I value how Kaki Herbals preserves the integrity of traditional medicine. Their male wellness range, including Prostayork, has delivered excellent clinical results.",
    name: "Dr. Mohammad Salman Khan",
    designation: "B.U.M.S, Consultant Physician",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "I’ve observed remarkable improvements in patients using Kaki Herbals’ formulations for joint pain and energy restoration. Their approach reflects true Unani and Ayurvedic excellence.",
    name: "Dr. Ahmad Raza Khan",
    designation: "B.U.M.S, Herbal Consultant",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "Kaki Herbals’ medicines stand out for their purity and effectiveness. My patients have benefited immensely from their herbal tonics and immunity boosters.",
    name: "Dr. Intizar Ali",
    designation: "B.U.M.S, Herbal Medicine Consultant",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
  {
    quote:
      "I trust Kaki Herbals because their products are scientifically prepared yet rooted in classical Unani and Ayurvedic principles. They consistently deliver safe, natural healing.",
    name: "Dr. Aslam Khan",
    designation: "B.U.M.S, Consultant",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];

  return (    <section className="py-12  bg-white border border-primary rounded-md">

    <div className="container mx-auto px-6">
        <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-primary mb-4">
                  What Our Expert Says
                </h2>
               
              </motion.div>
  <AnimatedTestimonials isExpert={false} testimonials={testimonials} />
  </div>
  </section>);
}
