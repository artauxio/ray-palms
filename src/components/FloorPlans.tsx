"use client";

import { useState } from "react";
import Image from "next/image";
import FloorPlanOne from "../../public/images/a-wing.webp";
import FloorPlanTwo from "../../public/images/b-wing.webp";
import AccessFormModal from "./AccessFormModal";

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
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { label, image, carpetArea, ebvtArea, aggregateArea } =
    floorPlanData[selectedPlan];

  const handleImageClick = () => {
    if (hasSubmittedForm) {
      setIsFullscreen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="floor-plans"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-green-50 text-gray-900 flex justify-center"
    >
      <div className="max-w-3xl w-full bg-white rounded-3xl p-6 sm:p-10 shadow-xl relative">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-lime-600 mb-10">
          Floor Plan
        </h2>

        {/* Switcher Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-row">
          {(["1bhk", "2bhk"] as const).map((planKey) => (
            <button
              key={planKey}
              onClick={() => setSelectedPlan(planKey)}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg font-medium transition-all duration-200 ease-in-out shadow-sm active:scale-95 focus:outline-none md:w-full cursor-pointer ${
                selectedPlan === planKey
                  ? "bg-lime-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-100"
              }`}
            >
              {floorPlanData[planKey].label}
            </button>
          ))}
        </div>

        {/* Image & Button */}
        <div className="relative group mb-6">
          <Image
            src={image}
            alt="Floor Plan"
            width={700}
            height={500}
            className={`w-full rounded-xl transition-all duration-500 ${
              hasSubmittedForm ? "blur-none cursor-pointer" : "blur-sm"
            }`}
            onClick={handleImageClick}
          />
          {!hasSubmittedForm && (
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-lime-600 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 active:scale-95 w-full z-50 cursor-pointer"
              >
                {label}
              </button>
            </div>
          )}
          {hasSubmittedForm && (
            <div className="absolute bottom-3 right-3">
              <button
                onClick={handleImageClick}
                className="bg-lime-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
                title="View Fullscreen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Floor Plan Info */}
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

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white bg-lime-600 rounded-full p-2 hover:bg-lime-700 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={image}
              alt="Floor Plan Fullscreen View"
              className="max-h-[90vh] w-auto object-contain animate-zoomIn"
              width={1200}
              height={900}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Modal Form */}
      <AccessFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          setHasSubmittedForm(true);
        }}
      />

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
