"use client";
import React from "react";
import Container from "../Container";


type Props = {};


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
    <section
      className=" bg-green-50 text-gray-900 pb-12"
    >
      <Container>
      <div className="w-full flex flex-col items-center justify-center gap-3 pb-3 pt-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-lime-600 mb-3">
          Our Core Values
          </h2>
          <p className="text-gray-700 text-center md:w-[60%] transition-all duration-300 xl:mb-7 mb-3">
          Our core values guide our actions and define our culture, ensuring we deliver exceptional value to our clients and partners
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 mt-2">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-lime-200 shadow hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-center items-center text-center w-full h-52 md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
            >
              <h4 className="text-xl font-semibold text-lime-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
