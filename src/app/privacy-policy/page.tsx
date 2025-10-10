import { Metadata } from "next";
import { Breadcrumb } from "@/components/common/bread-crumb";
import PrivacyPolicy from "@/components/common/privacy";
import React from "react";

// ✅ Add metadata for SEO and browser tab
export const metadata: Metadata = {
  title: "Privacy Policy | Kaki Herbals",
  description:
    "Read the Privacy Policy of Kaki Herbals to understand how we collect, use, and protect your personal information.",
  keywords: [
    "Kaki Herbals privacy policy",
    "data protection",
    "herbal products privacy",
    "user data policy",
    "Kaki Herbals website policy",
  ],
  openGraph: {
    title: "Privacy Policy | Kaki Herbals",
    description:
      "Learn how Kaki Herbals protects your privacy and handles your data responsibly.",
    url: "https://www.kakiherbals.com/privacy-policy",
    siteName: "Kaki Herbals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Kaki Herbals",
    description:
      "Understand how Kaki Herbals collects and uses your data responsibly.",
  },
};

const Page = () => {
  return (
    <div>
      <Breadcrumb />
      <PrivacyPolicy />
    </div>
  );
};

export default Page;
