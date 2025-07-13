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
      <svg
        className="w-8 h-8 text-lime-700 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.707 1.293a1 1 0 00-1.414 0L2 8.586V18a1 1 0 001 1h5a1 1 0 001-1v-5h2v5a1 1 0 001 1h5a1 1 0 001-1V8.586l-7.293-7.293z" />
      </svg>
    ),
  },
  {
    title: "Lush Greenery",
    description: "Beautifully landscaped gardens and open spaces.",
    icon: (
      <svg
        className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C10 6 6 6 6 12c0 3.866 3.582 6 6 10 2.418-4 6-6.134 6-10 0-6-4-6-6-10z" />
      </svg>
    ),
  },
  {
    title: "Resort-Like Amenities",
    description: "Swimming pool, clubhouse, gym, and more.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.47-.27 1.09-.64 2.2-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z" />
      </svg>
    ),
  },
  {
    title: "Prime Location",
    description: "Well-connected to schools, malls, and transport hubs.",
    icon: (
      <svg
        className="w-8 h-8 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112.5 7 2.5 2.5 0 0110 9.5z" />
      </svg>
    ),
  },
];

const ProjectInfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-lime-50 via-white to-lime-100 pt-14">
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
      </Container>
      {/* Project Highlights */}
      <div className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1730040200728-ebbf6ea4cc1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="relative p-6 md:p-0">
          <Container>
            <h3 className="text-center text-4xl font-bold text-white mb-12">
              Project Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center gap-4 p-4 rounded-xl transition duration-300 transform hover:scale-105 hover:bg-lime-200/90 shadow-sm bg-white/80"
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
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
