import { Breadcrumb } from '@/components/common/bread-crumb'
import ContactUs from '@/components/common/contact-page'
import React from 'react'
import { Metadata } from "next";


// ✅ Add metadata for SEO and browser tab
export const metadata: Metadata = {
  title: "Contact Us | Kaki Herbals",
  description:
    "Get in touch with Kaki Herbals for inquiries, product information, or support. We’d love to hear from you!",
  keywords: [
    "Kaki Herbals contact",
    "contact Kaki Herbals",
    "herbal products inquiry",
    "customer support Kaki Herbals",
    "natural health contact",
  ],
  openGraph: {
    title: "Contact Us | Kaki Herbals",
    description:
      "Reach out to Kaki Herbals for any questions, feedback, or product assistance.",
    url: "https://www.kakiherbals.com/contact",
    siteName: "Kaki Herbals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kaki Herbals",
    description:
      "Need assistance or have a query? Contact Kaki Herbals today.",
  },
};


const page = () => {
  return (
    <div>
        <Breadcrumb/>
        <ContactUs/>
    </div>
  )
}

export default page