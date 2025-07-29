"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsappIcon";
import Container from "./Container";
import Logo from "../../public/images/logo.png";

const sectionLinks = {
  Home: "/",
  About: "/about",
  Contact: "#contact",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsRotated(menuOpen);
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full border-b z-50 transition-all duration-300 border-none ${
        isScrolled
          ? "bg-[#485e4ccc] backdrop-blur-md"
          : "bg-[#485e4c]"
      }`}
    >
      <Container>
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt="Ray Palms Logo"
              width={90}
              height={30}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {Object.entries(sectionLinks).map(([label, href]) => (
              <Link
                key={label}
                href={href}
                scroll={true}
                className="text-[#f0f0ec] hover:text-[#7d927b] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* WhatsApp + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* WhatsApp Button for Mobile */}
            <Link
              href="https://wa.me/9867715855"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:hidden justify-center items-center w-8 h-8 rounded-full bg-[#f0f0ec] hover:bg-[#e4e2dc]"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#485e4c]" />
            </Link>

            {/* WhatsApp Button for Desktop */}
            <Link
              href="https://wa.me/9867715855"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#f0f0ec] text-[#485e4c] hover:bg-[#e4e2dc] px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <span className="flex items-center gap-2 w-full">
                <WhatsAppIcon className="w-5 h-5 pointer-events-none" />
                Chat with us
              </span>
            </Link>

            {/* Menu Toggle Button */}
            <span
              className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-[#9ca098] cursor-pointer transition-transform duration-300 md:hidden"
              onClick={handleMenuToggle}
            >
              {menuOpen ? (
                <X
                  className={`w-7 h-7 text-[#f0f0ec] transition-transform duration-300 ${
                    isRotated ? "rotate-90 scale-110" : "rotate-0 scale-100"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-7 h-7 text-[#f0f0ec] transition-transform duration-300 ${
                    isRotated ? "rotate-90 scale-110" : "rotate-0 scale-100"
                  }`}
                />
              )}
            </span>
          </div>
        </nav>
      </Container>

      {/* Animated Mobile Nav Menu */}
      <div
        className={`md:hidden bg-[#485e4ccc] text-[#f0f0ec] px-5 overflow-hidden transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="pt-2 pb-4 space-y-3">
          {Object.entries(sectionLinks).map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="block text-base font-medium hover:text-[#7d927b] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://wa.me/9867715855"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#f0f0ec] text-[#485e4c] hover:bg-[#e4e2dc] px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat with us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
