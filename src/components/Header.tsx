"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
export default function Header() {
  const path = usePathname();
  return (
    <header className="absolute flex justify-end w-full z-50">
      <nav className="p-6">
        <Link
          href="/about"
          className="text-omi-black text-md font-semibold relative"
        >
          {'/about' === path && (
            <motion.span 
            layoutId="underline"
            className="absolute left-0 top-full block h-[1px] w-full bg-omi-black" />
          )}
          About
        </Link>
      </nav>
    </header>
  );
}
