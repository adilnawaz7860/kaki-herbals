"use client";

import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

interface SubNavbarProps {
  address: string;
}

export const SubNavbar = ({ address }: SubNavbarProps) => {
  return (
    <div className="w-full p-2 bg-white text-gray-900 border-b border-primary  text-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Left: Address */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>{address}</span>
        </div>

        {/* Right: Social media icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
