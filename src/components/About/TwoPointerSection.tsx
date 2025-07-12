"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import WhoWeAreImage from "../../../public/images/image-one.webp";
import Container from "../Container";

type Props = {};

const TwoPointerSection = () => {
  return (
    <section className="bg-green-50 py-12 md:py-24">
      <Container>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-x-hidden">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-lime-600 mb-3">
              From Blueprint to Reality, with Integrity at Every Step
            </h3>
            <p className="text-base sm:text-lg text-lime-900 font-medium mb-2">
              Ray Palms
            </p>
            <p className="text-gray-700 leading-relaxed tracking-wide">
              Founded on a commitment to precision, transparency, and
              customer-first thinking, SVS ELEVATE LLP brings decades of
              combined experience to residential, commercial, and mixed-use
              development. We partner with visionary architects, engineers, and
              urban planners to shape spaces that enrich everyday living and
              maximize long-term value — for families, businesses, and the
              cities we call home.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image
              src={WhoWeAreImage}
              alt="Innovative IT Solutions Provider"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TwoPointerSection;
