"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsappIcon";

type Props = {};

const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full border-b z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-lime-600/80 backdrop-blur-md' 
        : 'bg-lime-600'
    }`}>
      <nav className="container mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <p className="text-2xl font-bold text-white">Ray Palms</p>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-white hover:text-lime-100 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/amenities"
            className="text-white hover:text-lime-100 transition-colors"
          >
            Amenities
          </Link>
          <Link
            href="/gallery"
            className="text-white hover:text-lime-100 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/team"
            className="text-white hover:text-lime-100 transition-colors"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-lime-100 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-lime-600 hover:bg-lime-50 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Chat with us
        </Link>
      </nav>
    </header>
  );
};

export default Header;