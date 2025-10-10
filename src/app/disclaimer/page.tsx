import { Breadcrumb } from '@/components/common/bread-crumb'
import Disclaimer from '@/components/common/disclaimer'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Disclaimer | Kaki Herbals",
  description:
    "Read the Disclaimer of Kaki Herbals to understand the terms, limitations, and legal information regarding the use of our website and products.",
  keywords: [
    "Kaki Herbals disclaimer",
    "website terms Kaki Herbals",
    "legal information Kaki Herbals",
    "herbal products disclaimer",
    "Kaki Herbals liability",
  ],
  openGraph: {
    title: "Disclaimer | Kaki Herbals",
    description:
      "Learn about the terms, limitations, and legal information related to Kaki Herbals' products and website usage.",
    url: "https://www.kakiherbals.com/disclaimer",
    siteName: "Kaki Herbals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Kaki Herbals",
    description:
      "Read the Disclaimer of Kaki Herbals to understand legal terms, product usage limitations, and liability information.",
  },
};



const page = () => {
  return (
    <div>
        <Breadcrumb/>
        <Disclaimer/>
    </div>
  )
}

export default page