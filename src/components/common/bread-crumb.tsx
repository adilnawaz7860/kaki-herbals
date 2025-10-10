"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const currentPage = pathname === "/" ? "Home" : pathname.split("/").pop();

  return (
    <nav
      className="flex items-center mt-12  text-sm font-medium bg-[#235d00] text-white py-8 px-6  shadow-sm"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="hover:underline hover:text-gray-200 transition"
      >
        Home
      </Link>

      {pathname !== "/" && (
        <>
          <ChevronRight className="mx-2 w-4 h-4 text-gray-100" />
          <span className="capitalize font-semibold">
            {currentPage?.replace(/-/g, " ")}
          </span>
        </>
      )}
    </nav>
  );
};
