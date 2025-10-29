"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderSection() {
  return (
        <section className="py-16 bg-white border border-primary rounded-md">
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 lg:px-24  bg-white">
      {/* 🖼️ Founder Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex-shrink-0"
      >
        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-[6px] border-primary overflow-hidden shadow-xl mx-auto">
          <Image
            src="/images/founder.jpeg" // 🟢 your founder photo in /public/founder.jpg
            alt="Founder - Kaki Herbals"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </motion.div>

      {/* 🧑 Founder Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          About Our Founder
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
          <strong>Doctor Mohammad Adil</strong>, the visionary founder of{" "}
          <span className="text-primary font-semibold">Kaki Herbals</span>,
          has dedicated his life to reviving the ancient wisdom of Unani and
          Ayurvedic medicine. With a deep belief in the healing power of nature,
          he established Kaki Herbals to bring pure, authentic, and effective
          herbal formulations to the modern world.
        </p>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Guided by years of research and experience, Hakim Kaki blends
          traditional remedies with modern quality standards — ensuring that
          every product promotes balance, wellness, and vitality. His mission is
          to make herbal healthcare accessible to every household.
        </p>

        <div className="mt-6">
          <p className="text-primary font-semibold text-lg">
            —  Doctor Mohammad Adil
          </p>
          <p className="text-gray-500 text-sm">Founder, Kaki Herbals ( B.U.M.S.)</p>
        </div>
      </motion.div>
    </section>
        </section>

    
  );
}
