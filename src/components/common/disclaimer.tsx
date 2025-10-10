"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Shield,
  Building2,
  Globe,
  AlertTriangle,
  FileText,
  Lock,
  Mail,
} from "lucide-react";

const Disclaimer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl text-primary font-bold mb-3 flex justify-center items-center gap-2">
          <Shield className="text-primary" /> Disclaimer | Kaki Herbals
        </h1>
        <p className="text-color-secondary">Last Updated: 27-05-2025</p>
      </motion.div>

      {/* Table of Contents */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="border rounded-lg shadow-sm">
          <AccordionItem value="toc">
            <AccordionTrigger className="text-lg font-semibold">
              📋 Table of Contents
            </AccordionTrigger>
            <AccordionContent className="space-y-2 text-color-secondary">
              <ul className="list-disc pl-6 space-y-1">
                <li>Disclaimer | Kaki Herbals</li>
                <li>Company Identity</li>
                <li>Authorized Online Presence</li>
                <li>Medical & Health Disclaimer</li>
                <li>Content Accuracy & Liability</li>
                <li>Legal Notice</li>
                <li>Need Help?</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Sections */}
      <div className="space-y-10">
        {/* Intro */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-color-secondary">
            Welcome to the official website of <strong>Kaki Herbals</strong>. We
            value your trust in our products and services. This Disclaimer
            explains our legal responsibilities and the limits of liability for
            information shared on our website, especially{" "}
            <strong>www.kakiherbals.com</strong>.
          </p>
        </motion.section>

        {/* Company Identity */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Building2 className="text-primary" /> Company Identity
          </h2>
          <p className="text-color-secondary mt-2">
            Kaki Herbals is a reputed herbal and Ayurvedic brand dedicated to
            providing natural health and wellness solutions. Our registered
            office is located in India, and we operate under the guidelines of
            the Companies Act and AYUSH regulatory norms.
          </p>
        </motion.section>

        {/* Authorized Online Presence */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Globe className="text-primary" /> Authorized Online Presence
          </h2>
          <p className="text-color-secondary mt-2">
            Kaki Herbals accepts online orders and inquiries only through our
            official website:
            <br />
            👉{" "}
            <a
              href="https://www.kakiherbals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              https://www.kakiherbals.com
            </a>
          </p>
          <p className="text-color-secondary mt-2">
            We are not responsible for orders, claims, or transactions made
            through unauthorized sources, duplicate websites, or third-party
            sellers misusing our brand name.
          </p>
        </motion.section>

        {/* Medical & Health Disclaimer */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <AlertTriangle className="text-primary" /> Medical & Health Disclaimer
          </h2>
          <p className="text-color-secondary mt-2">
            All information on this website is provided for general awareness
            and educational purposes only. Product descriptions and herbal
            benefits mentioned here are not substitutes for professional medical
            advice, diagnosis, or treatment.
          </p>
          <p className="text-color-secondary mt-2">
            Always consult your physician or a qualified healthcare provider
            before using any herbal product, especially if you are pregnant,
            nursing, have an existing condition, or are on medication.
          </p>
          <p className="text-color-secondary mt-2">
            Kaki Herbals does not offer medical or emergency advice through this
            website.
          </p>
        </motion.section>

        {/* Content Accuracy & Liability */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <FileText className="text-primary" /> Content Accuracy & Liability
          </h2>
          <p className="text-color-secondary mt-2">
            While every effort is made to ensure accurate and updated
            information, Kaki Herbals does not warrant that all content is free
            from typographical errors or omissions. Any blogs, testimonials, or
            user reviews reflect individual experiences and not verified medical
            claims.
          </p>
        </motion.section>

        {/* Legal Notice */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Lock className="text-primary" /> Legal Notice
          </h2>
          <p className="text-color-secondary mt-2">
            By using this website, you agree to our{" "}
            <a href="/terms-and-conditions" className="text-primary underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </a>
            . These collectively form the complete agreement between you (the
            visitor) and Kaki Herbals.
          </p>
        </motion.section>

        {/* Need Help */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
          className="border-t pt-6"
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2 justify-center">
            <Mail className="text-primary" /> Need Help?
          </h2>
          <p className="text-color-secondary text-center mt-2">
            For any official queries or clarifications, contact us:
            <br />
            📩 <strong>Email:</strong> info@kakiherbals.com
            <br />
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://www.kakiherbals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              www.kakiherbals.com
            </a>
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default Disclaimer;
