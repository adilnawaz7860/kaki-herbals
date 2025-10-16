"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users, MapPin, Package, Award, MailCheck, ArrowBigDown, ArrowBigUp } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";


export const AboutInquirySection = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

// Stats data
const stats = [
  {
    icon: Award,
    value: 4,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: MapPin,
    value: 20,
    suffix: "",
    label: "Presence in States",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Distributors",
  },
  {
    icon: Package,
    value: 70,
    suffix: "+",
    label: "Products",
  },
];

  return (
    <section className="py-16 bg-white border border-primary rounded-md">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
        {/* Left Side: About + Stats */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl text-primary font-bold mb-4">
              Best Herbal (Unani) Medicine Company in India.
            </h2>
            <p className="text-gray-700 leading-relaxed capitalize">
           kaki herbals is proudly recognized as the Best Herbal (Unani)medicine company in India, committed to giving natural and effective herbal solutions. With a diverse portfolio of more than 70 Unani products, we focus on quality, purity, and results. Our products are based on ancient knowledge mixed with modern science, addressing various health requirements-from  immunity and digestion to Heart Care, Liver Care, joint care,Hair Care  and overall wellness.
            </p>
            <div className="flex flex-col md:flex-row justify-start items-start mt-4 gap-4">
                <Button
              variant="default"
              onClick={() => router.push("/about")}
              className="bg-primary gap-2 hover:bg-green-800"
            >
                <ArrowBigUp className="w-4 h-4"/>
              Read More About Us
            </Button>
             <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-fit gap-2 bg-primary hover:bg-green-800">
                   <MailCheck className="w-4 h-4"/>  Inquire Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-primary text-center">
                      Inquiry Form
                    </DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 mt-4">
                    <Input placeholder="Your Name" required />
                    <Input placeholder="Contact Number" type="tel" required />
                    <Input placeholder="Email Address" type="email" required />
                    <Input placeholder="Address" />
                    <Input placeholder="Company / Shop Name" />
                    <Button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle form submission here
                        console.log("Form submitted");
                        setOpen(false);
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Stats Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card className="flex flex-col items-center justify-center gap-4 p-6 shadow hover:shadow-lg transition-shadow">
            <stat.icon className="text-green-600" size={28} />
            <CardContent className="text-center p-0">
              <CardTitle className="text-2xl font-bold text-green-700">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </CardTitle>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
        </div>

        {/* Right Side: Call to Action */}
        {/* <div className="flex items-center justify-center">
          <Card className="p-8 shadow-lg w-full">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 text-center mb-4">
                Want to Know More?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-gray-600">
                Get in touch with us to learn more about our products and
                distribution opportunities.
              </p>
              
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Inquire Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-green-700 text-center">
                      Inquiry Form
                    </DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 mt-4">
                    <Input placeholder="Your Name" required />
                    <Input placeholder="Contact Number" type="tel" required />
                    <Input placeholder="Email Address" type="email" required />
                    <Input placeholder="Address" />
                    <Input placeholder="Company / Shop Name" />
                    <Button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle form submission here
                        console.log("Form submitted");
                        setOpen(false);
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};