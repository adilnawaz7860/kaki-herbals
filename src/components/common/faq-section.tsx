"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Kaki Herbals?",
    answer:
      "Kaki Herbals is a company specializing in manufacturing and marketing healthcare products.",
  },
  {
    question: "Does Kaki Herbals manufacture its own products?",
    answer:
      "Yes, Kaki Herbals manufactures its own products under strict quality standards.",
  },
  {
    question: "How many products does Kaki Herbals market?",
    answer: "Kaki Herbals markets a wide range of products across various categories.",
  },
  {
    question: "Can I become a distributor or partner with Kaki Herbals?",
    answer:
      "Yes, we welcome distributors and partners. Please contact us for more details.",
  },
  {
    question: "How can I contact Kaki Herbals?",
    answer:
      "You can reach out via our contact form, email, or phone number listed on the website.",
  },
  {
    question: "Do you provide third-party marketing services?",
    answer:
      "Yes, we provide third-party marketing services for selected partners and products.",
  },
];

export const FAQSection = () => {
  return (
    <section className=" mx-auto px-4  bg-white border border-primary rounded-md py-16">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        FAQs - Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
            <AccordionTrigger>
              {/* <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-left w-full"
              > */}
                {`${index + 1}. ${faq.question}`}
              {/* </motion.span> */}
            </AccordionTrigger>
            <AccordionContent>
              {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 dark:text-neutral-300"
              > */}
                {faq.answer}
              {/* </motion.div> */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
