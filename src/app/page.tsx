import { HeroSection } from "@/components/common/hero-section";
import { WhyChooseSection } from "@/components/common/why-choose";
import { Shield, Truck, Star, Gift } from "lucide-react";
import { AboutInquirySection } from "@/components/common/about-us";
import GallerySection from "@/components/common/gallery-section";
import { DistributionProcessSection } from "@/components/common/distribution-process";
import ProductSection from "@/components/common/top-products";
import { CustomerTestimonials } from "@/components/common/customer-testimonials";
import { FAQSection } from "@/components/common/faq-section";
import { ExpertTestimonials } from "@/components/common/expert-testimonials";

const whyChooseCards = [
  {
    title: "Wide Range of Products",
    description:
      "Over 700+ Herbal and Unani products catering to various health segments like digestion, immunity, women's wellness, and more.",
    icon: <Shield size={32} />,
  },
  {
    title: "Strong Brand Reputation",
    description:
      "kaki herbals is known for quality, effectiveness, and customer trust — giving you a strong market advantages",
    icon: <Truck size={32} />,
  },
  {
    title: "High-Quality Standards",
    description:
      "Products are made in GMP-certified facilities with strict quality control for safety and purity assurance.",
    icon: <Star size={32} />,
  },
  {
    title: "Exclusive Offers",
    description: "Enjoy special discounts and offers every week.",
    icon: <Gift size={32} />,
  },
];

const distributionCards = [
  {
    title: "1",
    description: "Contact Us to Express Your Interest",
    icon: <Shield size={32} />,
  },
  {
    title: "2",
    description: "Discuss Your Area's Requirements with Our Team",
    icon: <Truck size={32} />,
  },
  {
    title: "3",
    description: "Review Product Range and Pricing Details",
    icon: <Star size={32} />,
  },
  {
    title: "4",
    description: "Complete Distributor Agreement and Formalities",
    icon: <Gift size={32} />,
  },
  {
    title: "5",
    description: "Start Receiving Products & Begin Your Business Journey",
    icon: <Gift size={32} />,
  },
];

const Home = () => {
  return (
    <section className="pt-14">
      <div className="space-y-12">
        <HeroSection
          imageSrc="/hero1.webp"
          title="Welcome to E-Shop"
          subtitle="Best deals on your favorite products"
          ctaText="Shop Now"
          ctaLink="/products"
        />
        <div className="container mx-auto space-y-12">
          <AboutInquirySection />
        <GallerySection />
        <WhyChooseSection cards={whyChooseCards} />
        <DistributionProcessSection cards={distributionCards} />
        <ProductSection />
        <CustomerTestimonials />
        <FAQSection />
        <ExpertTestimonials />
        </div>
      </div>
    </section>
  );
};

export default Home;