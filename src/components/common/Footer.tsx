"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const linkStyles =
    "text-sm text-gray-300 hover:text-white transition duration-150 ease-in-out";
  const liStyles = "my-1.5";

  return (
    <footer className="bg-primary mt-12 text-gray-300 py-10 px-6 border-t border-primary">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 1️⃣ Policies Section */}
        <div>
          <h2 className="text-white font-semibold mb-4">Policies</h2>
          <ul>
            <li className={liStyles}>
              <Link href="/privacy-policy" className={linkStyles}>
                Privacy Policy
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/disclaimer" className={linkStyles}>
                Disclaimer
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/terms-and-conditions" className={linkStyles}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* 2️⃣ Company Section */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul>
            <li className={liStyles}>
              <Link href="/about" className={linkStyles}>
                About Us
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/contact" className={linkStyles}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Address Section */}
        <div>
          <h2 className="text-white font-semibold mb-4">Address</h2>
          <address className="not-italic text-sm leading-relaxed text-gray-300">
            1536/1/1054 ΜADEHGANJ KHADRA NEAR AWADH EDUCATIONAL ACADEMY INTER COLLEGE SITAPUR ROAD  <br />
            Lucknow , U.P. ,226020 <br />
            <span className="block mt-2">Phone: +91 8707560361</span>
            <span className="block">Email: kakiherbals@gmail.com</span>
          </address>
        </div>

        {/* 4️⃣ Social Media Section */}
        <div>
          <h2 className="text-white font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <Link
                href="https://www.facebook.com/share/19x5KmuXLv"
              target="_blank"
              className="p-2 bg-green-800 hover:bg-green-700 rounded-full"
            >
              <Facebook size={20} />
            </Link>
            <Link
               href="https://www.instagram.com/kakiherbals/?igsh=OHI5OTBwM24xaGpq#"
              target="_blank"
              className="p-2 bg-green-800 hover:bg-green-700 rounded-full"
            >
              <Instagram size={20} />
            </Link>
            {/* <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-green-800 hover:bg-green-700 rounded-full"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-green-800 hover:bg-green-700 rounded-full"
            >
              <Twitter size={20} />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-12 pt-6 text-center text-md text-gray-400">
        © {new Date().getFullYear()} Kaki Herbals. All rights reserved.
      </div>
      <p className=" border-primary mt-2 text-center text-sm text-gray-40"> Build with love by CodeNirman</p>
    </footer>
  );
};
