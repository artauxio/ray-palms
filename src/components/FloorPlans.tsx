"use client";

import { useState } from "react";
import Image from "next/image";
import FloorPlanOne from "../../public/images/floor-plan.webp";
import FloorPlanTwo from "../../public/images/two-bhk.jpg";

const floorPlanData = {
  "1bhk": {
    label: "1 BHK Unit",
    image: FloorPlanOne,
    carpetArea: "30.53 Sqm (328.62 SQ.FT.)",
    ebvtArea: "5.75 Sqm (61.89 SQ.FT.)",
    aggregateArea: "36.28 Sqm (390.51 SQ.FT.)",
  },
  "2bhk": {
    label: "2 BHK Unit",
    image: FloorPlanTwo,
    carpetArea: "45.00 Sqm (484.38 SQ.FT.)",
    ebvtArea: "6.25 Sqm (67.28 SQ.FT.)",
    aggregateArea: "51.25 Sqm (551.66 SQ.FT.)",
  },
};

const FloorPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<"1bhk" | "2bhk">("1bhk");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { label, image, carpetArea, ebvtArea, aggregateArea } =
    floorPlanData[selectedPlan];

  return (
    <section
      id="floor-plans"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-green-50 text-gray-900 flex justify-center"
    >
      <div className="max-w-3xl w-full bg-white rounded-3xl p-6 sm:p-10 shadow-xl relative">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-green-700 mb-10">
          Floor Plan
        </h2>

        {/* Floor Plan Switcher Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-row">
          {(["1bhk", "2bhk"] as const).map((planKey) => (
            <button
              key={planKey}
              onClick={() => setSelectedPlan(planKey)}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg font-medium transition-all duration-200 ease-in-out shadow-sm active:scale-95 focus:outline-none md:w-full ${
                selectedPlan === planKey
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-100"
              }`}
            >
              {floorPlanData[planKey].label}
            </button>
          ))}
        </div>

        {/* Floor Plan Image with Overlay Label Button */}
        <div className="relative group mb-6">
          <Image
            src={image}
            alt="Floor Plan"
            width={700}
            height={500}
            className="w-full rounded-xl transition-all duration-500 blur-sm group-hover:blur-none"
          />
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 active:scale-95 w-full"
            >
              {label}
            </button>
          </div>
        </div>

        {/* Floor Plan Information */}
        <div className="text-base sm:text-lg space-y-2">
          <p>
            <strong>RERA Carpet Area:</strong> <span>{carpetArea}</span>
          </p>
          <p>
            <strong>EBVT Area:</strong> <span>{ebvtArea}</span>
          </p>
          <p>
            <strong>Aggregate Area:</strong> <span>{aggregateArea}</span>
          </p>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn"
        >
          <div
            className="relative w-full max-w-5xl animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold text-xl shadow-lg hover:bg-red-600 hover:text-white transition active:scale-95"
            >
              ✕
            </button>
            <Image
              src={image}
              alt="Full View"
              width={1200}
              height={800}
              className="rounded-xl w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default FloorPlans;
