"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Shield, FileText, UserCheck, Database, Lock, Share2 } from "lucide-react";

const PrivacyPolicy = () => {
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
          <Shield className="text-primary" /> Privacy Policy for Kaki Herbals
        </h1>
        <p className="text-color-secondary">Website: www.kakiherbals.com</p>
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
                <li>Privacy Policy for Kaki Herbals</li>
                <li>Who We Are</li>
                <li>Information We Collect</li>
                <li>How We Use Your Data</li>
                <li>Data Retention</li>
                <li>Your Rights</li>
                <li>Data Sharing</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Sections */}
      <div className="space-y-10">
        {/* Who We Are */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <UserCheck className="text-primary" /> Who We Are
          </h2>
          <p className="text-color-secondary mt-2">
            Kaki Herbals is committed to protecting your privacy. This policy explains how we collect,
            use, and safeguard your personal data when you visit our website or interact with our services.
          </p>
        </motion.section>

        {/* Information We Collect */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-primary  flex items-center gap-2">
            <Database className="text-primary" /> Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-color-secondary mt-2 space-y-2">
            <li>
              <strong>Comments:</strong> We collect information from comment forms including your IP
              address and browser details to prevent spam. Your email may be anonymized and shared with
              Gravatar for profile display (see <a href="https://automattic.com/privacy" className="text-primary underline">Gravatar Policy</a>).
            </li>
            <li>
              <strong>Media Uploads:</strong> Avoid uploading photos with EXIF GPS data, as visitors can
              extract location info.
            </li>
            <li>
              <strong>Cookies:</strong> Used to store login preferences, comments, and browsing sessions.
            </li>
            <li>
              <strong>Embedded Content:</strong> Articles may contain third-party content that may collect
              user data similar to visiting their own websites.
            </li>
          </ul>
        </motion.section>

        {/* How We Use Your Data */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold  flex text-primary items-center gap-2">
            <FileText className="text-primary" /> How We Use Your Data
          </h2>
          <ul className="list-disc pl-6 text-gray-800 mt-2 space-y-2">
            <li>To manage comments and reduce spam.</li>
            <li>To enhance user experience and improve our website.</li>
            <li>To process password resets securely, including IP verification.</li>
          </ul>
        </motion.section>

        {/* Data Retention */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
            <Lock className="text-primary" /> Data Retention
          </h2>
          <p className="text-color-secondary mt-2">
            Comments and related metadata are retained indefinitely to recognize future comments automatically.
            Registered users can access, edit, or delete their profile data anytime. Admins can also view and modify user data.
          </p>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-primary  flex items-center gap-2">
            <UserCheck className="text-primary" /> Your Rights
          </h2>
          <p className="text-color-secondary mt-2">
            If you have an account or left comments, you can:
          </p>
          <ul className="list-disc pl-6 text-color-secondary mt-2 space-y-2">
            <li>Request a copy of your stored personal data.</li>
            <li>Request deletion of personal data (unless required for legal reasons).</li>
          </ul>
        </motion.section>

        {/* Data Sharing */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-primary  flex items-center gap-2">
            <Share2 className="text-primary" /> Data Sharing
          </h2>
          <p className="text-color-secondary mt-2">
            Visitor comments may be analyzed via automated spam detection services to safeguard the site.
            Kaki Herbals never sells or trades your data for commercial purposes.
          </p>
        </motion.section>

        {/* Footer Note */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
          className="border-t pt-6"
        >
          <p className="text-color-secondary text-center">
            <strong>Note:</strong> This privacy policy is updated periodically to reflect regulatory or business changes.
            <br />
            Please also read our{" "}
            <a href="terms-and-conditions" className="text-primary underline">Terms & Conditions</a>.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
