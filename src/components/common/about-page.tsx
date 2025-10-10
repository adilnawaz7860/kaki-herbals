"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSection } from "./faq-section";

const AboutUS = () => {
  const sections = [
    "Ayurvedic and Unani Company in India kaki herbals Pvt. Ltd",
    "Mission",
    "Vision",
    "Leadership",
    "Product Categories We Serve",
    "Commitment to Quality & Innovation",
    "Customer-First Approach",
    "Manufacturing & Quality",
    "Why Choose Us",
    "Contact Information",
    "(FAQs)- About Ayurvedic and Unani Company in India",
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* --- Title Section --- */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#235d00] mb-6 text-center"
      >
        Ayurvedic and Unani Company in India – kaki herbals Pvt. Ltd
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-700 leading-relaxed mb-8 text-center"
      >
        Established in January 2015, <strong>kaki herbals Pvt. Ltd.</strong> is a
        trusted name in Ayurvedic and Unani healthcare. We are dedicated to reviving
        and modernizing traditional systems of treatment with time-tested remedies for
        modern wellness.
      </motion.p>

      {/* --- Table of Contents Accordion --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <Accordion type="single" collapsible className="w-full border border-[#235d00]/30 rounded-md shadow-sm">
          <AccordionItem value="toc">
            <AccordionTrigger className="text-lg font-semibold text-[#235d00] px-4">
              📜 Table of Contents
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 px-6 text-gray-700">
                {sections.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="hover:text-[#235d00] transition"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* --- Content Sections --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="space-y-8 text-gray-800 leading-relaxed"
      >
        <Section title="Mission">
          Our mission is to utilize ancient medical knowledge and provide effective,
          moral, and natural health solutions. We aim to bridge the difference between
          traditional welfare practices and modern lifestyles by marketing Ayurvedic
          and Unani products that support overall health.
        </Section>

        <Section title="Vision">
          Our vision is to merge Ayurveda and Unani wisdom with modern healthcare
          needs, offering trusted natural remedies that ensure safety, efficiency,
          and affordability for all.
        </Section>

        <Section title="Leadership">
          Under the visionary leadership of <strong>Mr. Javed Ali</strong>, Director,
          kaki herbals has emerged as a prestigious name in the Indian herbal
          wellness market. His belief in accessible, reliable, and ethical healthcare
          drives our commitment to excellence.
        </Section>

        <Section title="Product Categories We Serve">
          <ul className="list-disc list-inside space-y-1">
            <li>Digestive Health: Herbal solutions for acidity, bloating & gut issues.</li>
            <li>Women’s Wellness: Menstrual & hormonal balance remedies.</li>
            <li>Men’s Health: Strength, stamina & reproductive wellness.</li>
            <li>Stone Removal: Ayurvedic support for kidney and bladder stones.</li>
            <li>Thyroid Support: Natural thyroid function support.</li>
            <li>Cold & Cough Relief: Herbal syrups & respiratory tonics.</li>
            <li>Immunity Boosters: Giloy, Tulsi & more.</li>
          </ul>
        </Section>

        <Section title="Commitment to Quality & Innovation">
          Quality defines every step at kaki herbals. Each batch undergoes
          rigorous testing for purity, strength, and safety, backed by continuous
          research and customer feedback.
        </Section>

        <Section title="Customer-First Approach">
          We build lasting relationships with retailers, distributors, and end users,
          ensuring prompt delivery, personalized consultations, and open communication.
        </Section>

        <Section title="Manufacturing & Quality">
          Partnered with <strong>kaki Pharma India Pvt. Ltd.</strong>, we maintain
          unmatched quality from herb sourcing to modern processing, ensuring purity,
          consistency, and compliance.
        </Section>

        <Section title="Why Choose Us">
          We combine ancient Ayurvedic and Unani wisdom with modern expertise to
          provide ethical, effective, and affordable herbal solutions for holistic
          well-being.
        </Section>

        <Section title="Contact Information">
          <p>📍 <strong>Address:</strong> Kazijadgan, Ragib Nagar, Bijnor – 246725, Uttar Pradesh</p>
          <p>📞 <strong>Phone:</strong> 1800 572 2015</p>
          <p>💬 <strong>WhatsApp:</strong> +91 7060725050</p>
          <p>📧 <strong>Email:</strong> info@kakiherbals.com</p>
          <p>🌐 <strong>Website:</strong> www.kakiherbals.com</p>
        </Section>
      </motion.div>
      <div className="mt-8">
           <FAQSection/>
      </div>
   
    </div>
  );
};

export default AboutUS;

/* --- Helper component for animated sections --- */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="border-l-4 border-[#235d00] pl-4"
  >
    <h2 className="text-2xl font-semibold text-[#235d00] mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </motion.section>
);
