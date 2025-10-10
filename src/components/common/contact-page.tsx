"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <motion.h1
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-[#235d00] mb-6 text-center"
      >
        📞 Contact Kaki Herbals Pvt. Ltd.
      </motion.h1>

      {/* Table of Contents */}
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="toc">
          <AccordionTrigger className="text-lg font-semibold text-[#235d00]">
            Table of Contents
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>📌 Our Registered Office</li>
              <li>☎️ Contact Numbers</li>
              <li>📧 Email Addresses</li>
              <li>🕘 Business Hours</li>
              <li>📨 Send Us a Message</li>
              <li>📍 Find Us on Google Maps</li>
              <li>✅ Why Connect with Kaki Herbals Pvt. Ltd.?</li>
              <li>📲 Follow Us for Updates</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Sections */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="space-y-10 text-gray-800 leading-relaxed"
      >
        {/* Office */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#235d00]" /> Our Registered Office
          </h2>
          <p>
            Kaki Herbals Pvt. Ltd. <br />
            Kazijadgan, Ragib Nagar, Bijnor – 246725, Uttar Pradesh, India
          </p>
        </div>

        {/* Contact Numbers */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-2 flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#235d00]" /> Contact Numbers
          </h2>
          <p>Toll-Free Number: 1800 572 2015</p>
          <p>WhatsApp Support: +91 7060725050</p>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-2 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#235d00]" /> Email Addresses
          </h2>
          <p>Customer Support: info@kakiherbals.com</p>
          <p>Business Inquiries: info@kakiherbals.com</p>
          <p>General Queries: info@kakiherbals.com</p>
        </div>

        {/* Business Hours */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#235d00]" /> Business Hours
          </h2>
          <p>Monday to Saturday: 9:00 AM – 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Inquiry Form */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-[#235d00]" /> Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" placeholder="+91 9876543210" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="company">Company / Shop Name</Label>
                <Input id="company" placeholder="Your business name" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Type your message or inquiry..."
              />
            </div>
            <Button
              type="submit"
              className="bg-[#235d00] hover:bg-[#1b4a00] text-white"
            >
              Submit Inquiry
            </Button>
          </form>
        </div>

        {/* Why Connect */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-2">
            ✅ Why Connect with Kaki Herbals Pvt. Ltd.?
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ayurvedic & Unani Product Manufacturing</li>
            <li>Third-Party/White Label Services</li>
            <li>Product Distribution & Marketing</li>
            <li>Stockist or Dealer Collaboration</li>
            <li>Clinic or Doctor Partnerships</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-2xl font-semibold text-[#235d00] mb-3">
            📲 Follow Us for Updates
          </h2>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="flex items-center gap-1 text-[#235d00]">
              <Facebook size={18} /> Facebook
            </a>
            <a href="#" className="flex items-center gap-1 text-[#235d00]">
              <Instagram size={18} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-1 text-[#235d00]">
              <Youtube size={18} /> YouTube
            </a>
            <a href="#" className="flex items-center gap-1 text-[#235d00]">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
