"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AnyExpression } from "mongoose";

const EditProfile = dynamic(() => import("./EditProfile"), { ssr: false });
const SignOutButton = dynamic(() => import("../account/SignOutButton"), { ssr: false });

export const Navbar = ({ session, totalItemsCart, totalWishlists } : any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const mainLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/contact", name: "Contact Us" },
    // { path: "/gallery", name: "Gallery" },
    { path: "/our-products", name: "Our Products" },
  ];

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-primary border-b border-primary">
      {/* Left: Logo */}
      <div className="flex items-center justify-between w-full md:w-[200px]  gap-4">
        <button onClick={toggleMobileMenu} className="flex lg:hidden p-2" aria-label="Open Menu">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <Link href="/">
          <Image src="/images/logo.jpeg" alt="Logo" width={60} height={60} className="object-cover" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {mainLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`relative pb-1 transition-all duration-300 group ${
                isActive ? "text-white" : "text-white hover:text-gray-200"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}

        {session?.user && (
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-white px-3 py-2 rounded hover:bg-[#235d00] transition">
                  Edit Profile
                </button>
              </DialogTrigger>
              <EditProfile />
            </Dialog>
            <SignOutButton />
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-primary z-20 flex flex-col p-6 gap-6 lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end p-2" aria-label="Close Menu">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <ul className="flex flex-col gap-4">
            {mainLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={toggleMobileMenu}
                    className={`text-white text-lg border-b-2 ${
                      isActive ? "border-white" : "border-transparent hover:border-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
