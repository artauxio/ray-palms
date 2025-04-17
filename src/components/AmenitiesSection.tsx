"use client";
import React from "react";

const amenities = [
  { label: "Children's Playground", icon: "🛝" },
  { label: "Garden", icon: "🪴" },
  { label: "Spacious Parking", icon: "🚗" },
  { label: "24/7 Security", icon: "📹" },
];

const AmenitiesSection = () => {
  return (
    <section className="bg-green-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-2xl sm:text-3xl font-bold text-green-800 mb-10">
          Amenities
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl transition duration-300 hover:scale-110 hover:-translate-y-1">
                {item.icon}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
