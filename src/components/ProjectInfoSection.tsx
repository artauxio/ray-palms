"use client";
import React from "react";
import Container from "@/components/Container";
import {
  Trees,
  Home,
  Sun,
  DoorOpen,
  Baby,
  CloudRain,
  Plug,
  Paintbrush,
  ChefHat,
  ShoppingCart,
  Fan,
  Droplet,
  Grid2x2,
  Thermometer,
  Wind,
  LayoutGrid,
  Sparkles,
  Lightbulb,
  Ruler,
} from "lucide-react";

const highlights = [
  {
    title: "Luxury Residences",
    description: "Spacious 1 & 2 BHK apartments with modern aesthetics.",
    icon: (
      <svg
        className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
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
        className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#5b6c55] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C10 6 6 6 6 12c0 3.866 3.582 6 6 10 2.418-4 6-6.134 6-10 0-6-4-6-6-10z" />
      </svg>
    ),
  },
  {
    title: "Vastu Compliance",
    description: "Homes designed keeping traditional Vastu principles in mind.",
    icon: (
      <svg
        className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#7d927b] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
      </svg>
    ),
  },
  {
    title: "Prime Location",
    description: "Well-connected to schools, malls, and transport hubs.",
    icon: (
      <svg
        className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#bebfbc] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112.5 7 2.5 2.5 0 0110 9.5z" />
      </svg>
    ),
  },
  // External Key Highlights
  { title: "Garden Amenities", description: "", icon: <Trees className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Peaceful Residential Neighborhood", description: "", icon: <Home className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Smart Layouts with Ample Natural Light", description: "", icon: <Sun className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Children's Playing Area", description: "", icon: <Baby className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Rain Water Harvesting", description: "", icon: <CloudRain className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  // Internal Key Highlights
  { title: "Wooden & Granite Frame for Doors and Windows", description: "", icon: <Ruler className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Concealed Copper Wiring with Premium Quality Switches and Sockets", description: "", icon: <Plug className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Gypsum Finished Wall", description: "", icon: <Paintbrush className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Granite Kitchen Platform with Stainless Steel Sink", description: "", icon: <ChefHat className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Full Height Tiles in Kitchen", description: "", icon: <Grid2x2 className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Modular Kitchen Trolley", description: "", icon: <ShoppingCart className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Exhaust Fan in Kitchen", description: "", icon: <Fan className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Attractive Design Gates", description: "", icon: <DoorOpen className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "R.O. Water Purifier in Kitchen", description: "", icon: <Droplet className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Premium Quality Wall Tiles in WC and Bathroom", description: "", icon: <Grid2x2 className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Geyser in Bathroom", description: "", icon: <Thermometer className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Exhaust in Bathroom", description: "", icon: <Wind className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Vitrified Flooring in All Rooms", description: "", icon: <LayoutGrid className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Decorative Main Door with a Quality Fixture", description: "", icon: <Sparkles className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
  { title: "Heavy Aluminum Anodized Sliding Windows", description: "", icon: <Home className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" /> },
];

const ProjectInfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#d7d9d5] via-[#f0f0ec] to-[#e4e2dc] pt-14">
      <Container>
        <div className="text-center my-30">
          <h2 className="text-4xl md:text-5xl font-bold text-[#485e4c] mb-6">
            Welcome to Ray Palms
          </h2>
          <p className=" text-[#60645d] text-xl md:text-xl">
            Palghar — where comfort, peace, and connectivity come together.
          </p>
        </div>
      </Container>

      <div className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1622449784980-cdb3f8a88be8?q=80&w=1976&auto=format&fit=crop')",
          }}
        ></div>
       <div className="relative p-6 md:p-0">
  <Container>
    <div className="flex justify-center mb-12">
      <div className="bg-[#f0f0ec] bg-opacity-20 backdrop-blur-sm rounded-2xl px-8 py-4">
        <h3 className="text-center text-4xl font-bold text-[#586a54]">
          Project Highlights
        </h3>
      </div>
    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center text-center gap-4 p-6 rounded-xl transition duration-300 transform hover:scale-105 hover:bg-[#e4e2dc] shadow-sm bg-[#f0f0ec] h-36 w-full"
                >
                  {highlight.icon}
                  <div>
                    <h4 className="text-lg font-semibold text-[#485e4c] mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-[#9ca098] text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Last card centered */}
              <div className="sm:col-span-2 lg:col-span-3 flex justify-center">
                <div className="group flex flex-col items-center justify-center text-center gap-4 p-6 rounded-xl transition duration-300 transform hover:scale-105 hover:bg-[#e4e2dc] shadow-sm bg-[#f0f0ec] h-36 w-full sm:w-2/3 md:w-1/2">
                  <Lightbulb className="w-8 h-8 min-w-[2rem] min-h-[2rem] text-[#485e4c]" />
                  <div>
                    <h4 className="text-lg font-semibold text-[#485e4c] mb-1">
                      Gypsum False Ceiling in Entire Flat with Lights and Fans
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
