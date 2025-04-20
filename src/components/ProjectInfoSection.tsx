"use client";
import React from "react";
import Container from "@/components/Container";

const infoItems = [
  { title: "Location", value: "Palghar, Mumbai" },
  { title: "Price Starting At", value: "₹ 30 L" },
  { title: "Apartment Type", value: "1 & 2 BHK" },
  { title: "Carpet Area", value: "555 sq.ft" },
];

const highlights = [
  {
    title: "Luxury Residences",
    description: "Spacious 1 & 2 BHK apartments with modern aesthetics.",
    icon: (
      <svg className="w-8 h-8 text-lime-700 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 1.293a1 1 0 00-1.414 0L2 8.586V18a1 1 0 001 1h5a1 1 0 001-1v-5h2v5a1 1 0 001 1h5a1 1 0 001-1V8.586l-7.293-7.293z" />
      </svg>
    ),
  },
  {
    title: "Lush Greenery",
    description: "Beautifully landscaped gardens and open spaces.",
    icon: (
      <svg className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C10 6 6 6 6 12c0 3.866 3.582 6 6 10 2.418-4 6-6.134 6-10 0-6-4-6-6-10z" />
      </svg>
    ),
  },
  {
    title: "Resort-Like Amenities",
    description: "Swimming pool, clubhouse, gym, and more.",
    icon: (
      <svg className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 10h16v2H4v-2zm0 4h16v2H4v-2zM2 6h20v2H2V6zm2 12h16v2H4v-2z" />
      </svg>
    ),
  },
  {
    title: "Prime Location",
    description: "Well-connected to schools, malls, and transport hubs.",
    icon: (
      <svg className="w-8 h-8 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112.5 7 2.5 2.5 0 0110 9.5z" />
      </svg>
    ),
  },
];

const ProjectInfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-lime-50 via-white to-lime-100 py-14">
      <Container>
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold text-lime-700 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Welcome Message */}
        <div className="text-center my-20">
          <h2 className="text-3xl md:text-4xl font-bold text-lime-600 mb-2">
            Welcome to Ray Palms
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            A premium land development project surrounded by nature.
          </p>
        </div>

        {/* Project Highlights */}
        <div className="bg-lime-100 rounded-2xl shadow-md p-6 md:p-10">
          <h3 className="text-center text-4xl font-bold text-lime-600 mb-12">
            Project Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center gap-4 p-4 rounded-xl transition duration-300 transform hover:scale-105 hover:bg-lime-200 shadow-sm"
              >
                {highlight.icon}
                <div>
                  <h4 className="text-lg font-semibold text-green-900 mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectInfoSection;
