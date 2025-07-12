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

  const { label, image, carpetArea, ebvtArea, aggregateArea } =
    floorPlanData[selectedPlan];

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
              hasSubmittedForm ? "blur-none" : "blur-sm"
            }`}
          />
          {!hasSubmittedForm && (
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-lime-600 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 active:scale-95 w-full z-50"
              >
                {label}
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

      {/* Modal Form */}
      {/* {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn"
        >
          <div
            className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl relative animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 text-black font-bold text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4 text-lime-600">
              Get Floor Plan Access
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted", formData);
                setIsModalOpen(false);
                setHasSubmittedForm(true);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="1bhk"
                    checked={formData.interestedIn === "1bhk"}
                    onChange={() =>
                      setFormData({ ...formData, interestedIn: "1bhk" })
                    }
                  />
                  1 BHK
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="2bhk"
                    checked={formData.interestedIn === "2bhk"}
                    onChange={() =>
                      setFormData({ ...formData, interestedIn: "2bhk" })
                    }
                  />
                  2 BHK
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-600 text-white py-2 rounded hover:bg-lime-700"
              >
                Submit & View Plan
              </button>
            </form>
          </div>
        </div>
      )} */}
      <AccessFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Floor form submitted:", data);
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
