import AboutUS from '@/components/common/about-page'
import { Breadcrumb } from '@/components/common/bread-crumb'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "About Us | Kaki Herbals",
  description:
    "Learn more about Kaki Herbals, our mission, vision, and commitment to providing high-quality herbal products for natural health and wellness.",
  keywords: [
    "Kaki Herbals about us",
    "herbal products company",
    "natural health mission",
    "Kaki Herbals story",
    "about Kaki Herbals",
  ],
  openGraph: {
    title: "About Us | Kaki Herbals",
    description:
      "Discover the story behind Kaki Herbals, our values, and our dedication to delivering natural, effective herbal products.",
    url: "https://www.kakiherbals.com/about",
    siteName: "Kaki Herbals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Kaki Herbals",
    description:
      "Get to know Kaki Herbals—our journey, mission, and commitment to natural wellness through quality herbal products.",
  },
};


const page = () => {
  return (
    <div>
        <Breadcrumb/>
        <AboutUS/>
    </div>
  )
}

export default page