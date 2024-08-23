"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="bg-transparent h-[8rem] w-full flex items-center fixed md:pl-20 md:px-0 px-5 py-8 z-[5]">
      <Image src={"/logo.svg"} alt="logoImage" width={100} height={100} />

      <ul className="ml-40 gap-10 font-medium hidden md:flex text-[#12305B]">
        <li className="font-bold cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">FAQs</li>
      </ul>

      <Image
        src={"/hamburger.svg"}
        alt="hamburger"
        width={30}
        height={30}
        className="md:hidden block ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`absolute right-0 top-0 h-[18rem] w-full bg-[#fff] border-b-2 transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="mt-8 text-center gap-10 font-medium md:hidden flex flex-col">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>FAQs</li>
          </ul>
        </div>
      )}
    </main>
  );
}
