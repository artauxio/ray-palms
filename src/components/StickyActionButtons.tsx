"use client";
import React from "react";
import AccessFormModal from "./AccessFormModal";

const StickyActionButtons = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isBrochure, setIsBrochure] = React.useState(false); // track which button opened modal

  return (
    <div className="fixed right-0 top-[10%] z-30 flex flex-col items-end space-y-60">
      {/* Wrapper 1 - Download Brochure */}
      <div>
        <button
          onClick={() => {
            setIsBrochure(true);
            setIsModalOpen(true);
          }}
          className="bg-yellow-500 text-white font-semibold px-1 py-1 w-50 h-8 transform -rotate-90 origin-bottom-right hover:bg-yellow-600 transition-all shadow-md text-sm flex items-center justify-center"
        >
          DOWNLOAD BROCHURE
        </button>
      </div>

      {/* Wrapper 2 - Enquire Now */}
      <div>
        <button
          onClick={() => {
            setIsBrochure(false);
            setIsModalOpen(true);
          }}
          className="bg-cyan-800 text-white font-semibold px-1 py-1 w-40 h-8 transform -rotate-90 origin-bottom-right hover:bg-cyan-900 transition-all shadow-md text-sm"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* Shared Modal */}
      <AccessFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {
          if (isBrochure) {
            // trigger brochure download
            const link = document.createElement("a");
            link.href = "/RAY_PALMS%20_%20BROCHURE.pdf";
            link.download = "Ray-Palms-Brochure.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }}
        title={isBrochure ? "Download Brochure" : "Enquire Now"}
      />
    </div>
  );
};

export default StickyActionButtons;
