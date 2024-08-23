"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-colors duration-300 h-[8rem] w-full flex items-center fixed md:pl-20 md:px-0 px-5 py-8 z-[5]`}
    >
      <Image src={"/logo.svg"} alt="logoImage" width={100} height={100} />

      <ul className="ml-40 gap-10 font-medium hidden md:flex text-[#12305B]">
        <li
          className={
            pathname === "/" ? "font-bold cursor-pointer" : "cursor-pointer"
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/about"
              ? "font-bold cursor-pointer"
              : "cursor-pointer"
          }
        >
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer">Shop</li>
        <li
          className={
            pathname === "/faqs" ? "font-bold cursor-pointer" : "cursor-pointer"
          }
        >
          <Link href="/faqs">FAQs</Link>
        </li>
      </ul>

      <Image
        src={"/hamburger.svg"}
        alt="hamburger"
        width={30}
        height={30}
        className="md:hidden block ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-[18rem] w-full bg-[#fff] border-b-2"
          >
            <ul className="mt-8 text-center gap-10 font-medium md:hidden flex flex-col">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={pathname === "/" ? "font-bold" : "font-medium"}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/">Home</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={pathname === "/about" ? "font-bold" : "font-medium"}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/about">About</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={"font-medium"}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={pathname === "/faqs" ? "font-bold" : "font-medium"}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/faqs">FAQs</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
