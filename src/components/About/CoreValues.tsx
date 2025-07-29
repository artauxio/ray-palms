"use client";
import React, { useState } from "react";
import Container from "../Container";

const coreValues = [
  {
    title: "Quality Without Compromise",
    content:
      "We prioritize enduring construction quality over shortcuts. Every project we take on is a promise to deliver durability, safety, and attention to detail.",
  },
  {
    title: "Transparency & Trust",
    content:
      "We believe that trust is built with honesty. From pricing and planning to handover, our processes are open, ethical, and client-first.",
  },
  {
    title: "Human-Centered Design",
    content:
      "People are at the heart of every space we build. Our designs balance form, function, and future needs to create environments that truly serve those who inhabit them.",
  },
  {
    title: "Future-Forward Thinking",
    content:
      "From sustainable materials to smart technologies, we integrate innovations that future-proof our developments and support a better tomorrow.",
  },
  {
    title: "Community & Impact",
    content:
      "We build with a vision beyond structures — to positively impact neighborhoods, support local economies, and contribute to vibrant, connected communities that thrive together.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-[#e4e2dc] text-[#485e4c] pb-12">
      <Container>
        <div className="w-full flex flex-col items-center justify-center gap-3 pb-6 pt-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#485e4c] mb-4 drop-shadow-sm">
            Our Core Values
          </h2>
          <p className="text-[#5b6c55] text-center md:w-[60%] max-w-4xl transition-all duration-300 xl:mb-7 mb-3 tracking-wide">
            Our core values guide our actions and define our culture, ensuring we deliver exceptional value to our clients and partners.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 mt-4">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="bg-[#f0f0ec] rounded-xl border border-[#bebfbc] shadow-md p-6 flex flex-col justify-center items-center text-center 
                w-full h-auto md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]
                transition-transform transition-shadow duration-300 hover:shadow-xl hover:scale-[1.03] cursor-default"
            >
              <h4 className="text-xl font-semibold text-[#485e4c] mb-3">
                {item.title}
              </h4>
              <p className="text-[#7d927b] leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
