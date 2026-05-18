"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "../Container";

type Props = {};

const TwoPointerSection = ({}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data
  const slides = [
    {
      image: "/images/image1.jpeg",
      name: "Shivraj Rampal Yadav",
      designation: "Founder SVS ELEVATE ",
    },
    {
      image: "/images/image0.jpeg",
      name: "Sagar Ashwin Ruwala",
      designation: "Co-founder SVS ELEVATE",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#e4e2dc] py-12 md:py-24">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#485e4c] mb-4 drop-shadow-sm leading-snug">
              From Blueprint to Reality, with Integrity at Every Step
            </h3>
           
            <p className="text-[#7d927b] leading-relaxed tracking-wide max-w-lg">
              Founded on a commitment to precision, transparency, and
              customer-first thinking, SVS ELEVATE LLP brings decades of
              combined experience to residential, commercial, and mixed-use
              development. We partner with visionary architects, engineers, and
              urban planners to shape spaces that enrich everyday living and
              maximize long-term value — for families, businesses, and the
              cities we call home.
            </p>
          </div>

          {/* Image Slider Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-[400px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={`Team member ${slide.name}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Person Info Below Image */}
              <div className="mt-4 text-center">
                <div className="transition-all duration-500 ease-in-out">
                  <h4 className="text-xl font-bold text-[#485e4c] mb-1">
                    {slides[currentSlide].name}
                  </h4>
                  <p className="text-[#5b6c55] font-medium">
                    {slides[currentSlide].designation}
                  </p>
                </div>
              </div>

              {/* Animated Progress Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-[#485e4c] scale-110"
                        : "bg-[#485e4c]/30"
                    }`}
                  >
                    {/* Animated progress ring for active slide */}
                    {currentSlide === index && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#485e4c]/40 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TwoPointerSection;