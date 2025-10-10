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
  FileSignature,
  Lock,
  Database,
  Globe,
  UserPlus,
  Info,
  ShoppingBag,
  XCircle,
  CheckCircle2,
} from "lucide-react";

const TermsConditions = () => {
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
          <FileSignature className="text-primary" /> Terms & Conditions
        </h1>
        <p className="text-color-secondary">
          Website: www.kakiherbals.com
        </p>
      </motion.div>

      {/* Table of Contents Accordion */}
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
                <li>Terms & Conditions</li>
                <li>Data Privacy and Usage</li>
                <li>Information Collection</li>
                <li>Website Usage Policy</li>
                <li>Registration and Communication</li>
                <li>Disclaimer on Product Pricing and Sales</li>
                <li>Order Cancellation & Return (For Business Clients Only)</li>
                <li>Final Note</li>
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
            This User Agreement outlines the terms and conditions governing your
            interaction with <strong>Kaki Herbals</strong> via our official
            website, <strong>https://www.kakiherbals.com</strong>. The content
            herein ensures transparent and lawful interactions with our
            stakeholders, including dealers, agents, business associates, and
            institutional partners.
          </p>
          <p className="text-color-secondary mt-4">
            This agreement complies with the <strong>Information Technology Act, 2000</strong>,
            and incorporates provisions under <strong>Rule 3(1)</strong> of the
            Information Technology (Intermediaries Guidelines) Rules, 2011. By
            using this website, you agree to be bound by these terms. If you do
            not agree, please discontinue use immediately.
          </p>
        </motion.section>

        {/* Data Privacy */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Lock className="text-primary" /> Data Privacy and Usage
          </h2>
          <p className="text-color-secondary mt-2">
            Kaki Herbals is committed to safeguarding all personal information
            shared by visitors. We never sell or misuse user data. Our systems
            use modern encryption and cybersecurity measures to ensure privacy
            and safety.
          </p>
        </motion.section>

        {/* Information Collection */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Database className="text-primary" /> Information Collection
          </h2>
          <p className="text-color-secondary mt-2">
            When you voluntarily contact us or subscribe, we may collect your
            name, email, phone number, business address, and profession. This
            helps us communicate effectively with our partners.
          </p>
          <p className="text-color-secondary mt-2">
            Users under the age of 18 must use this site under parental or
            guardian supervision.
          </p>
        </motion.section>

        {/* Website Usage Policy */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Globe className="text-primary" /> Website Usage Policy
          </h2>
          <ul className="list-disc pl-6 text-color-secondary mt-2 space-y-2">
            <li>
              Copying or extracting content, company details, or contact
              information from this site is prohibited.
            </li>
            <li>
              Automated tools, bots, or scripts for data collection are not
              permitted.
            </li>
            <li>
              Misuse or duplication of the Kaki Herbals brand identity, logo, or
              trademarks for personal or commercial gain is forbidden.
            </li>
            <li>
              Unauthorized data collection or site integrity breaches may result
              in legal action.
            </li>
          </ul>
        </motion.section>

        {/* Registration and Communication */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <UserPlus className="text-primary" /> Registration and Communication
          </h2>
          <p className="text-color-secondary mt-2">
            If you register or subscribe for updates, ensure that all shared
            details are authentic and up to date. By registering, you consent to
            receive newsletters, announcements, and communications from Kaki
            Herbals. You may unsubscribe anytime by contacting us directly.
          </p>
          <p className="text-color-secondary mt-2">
            Continued use of our site and services after updates implies
            acceptance of revised terms and privacy policies.
          </p>
        </motion.section>

        {/* Disclaimer on Product Pricing */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <ShoppingBag className="text-primary" /> Disclaimer on Product Pricing and Sales
          </h2>
          <p className="text-color-secondary mt-2">
            Kaki Herbals does not function as a direct-to-consumer sales
            platform. Product pricing, offers, or promotions on this website are
            not applicable for direct purchases. Business transactions are
            handled through authorized distributors or partners.
          </p>
        </motion.section>

        {/* Order Cancellation & Return */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <XCircle className="text-primary" /> Order Cancellation & Return (For Business Clients Only)
          </h2>
          <p className="text-color-secondary mt-2">
            For business clients, order cancellation or returns apply only if
            explicitly stated in a signed agreement. In case of damaged or
            misdelivered goods, contact our support team within the stipulated
            period for resolution.
          </p>
        </motion.section>

        {/* Final Note */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 1.0 }}
          className="border-t pt-6"
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Info className="text-primary" /> Final Note
          </h2>
          <p className="text-color-secondary mt-2">
            Kaki Herbals reserves the right to update or revise these terms at
            any time without prior notice. We encourage you to review this page
            periodically for updates.
          </p>
          <p className="text-color-secondary mt-2">
            For questions or clarifications, please visit our{" "}
            <a href="/contact" className="text-primary underline">
              Contact Us
            </a>{" "}
            page.
          </p>
          <div className="flex justify-center mt-4">
            <CheckCircle2 className="text-primary w-10 h-10" />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TermsConditions;
