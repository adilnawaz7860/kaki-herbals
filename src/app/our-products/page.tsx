import { Breadcrumb } from '@/components/common/bread-crumb'
import ContactUs from '@/components/common/contact-page'
import React from 'react'
import { Metadata } from "next";
import ProductPage from '@/components/common/product';


// ✅ Add metadata for SEO and browser tab
export const metadata  = {
  title: "Our Products | Kaki Herbals",
  description: "Explore Kaki Herbals' range of trusted herbal and Ayurvedic products.",
};


const page = () => {
  return (
    <div>
        <Breadcrumb/>
        <ProductPage/>
    </div>
  )
}

export default page