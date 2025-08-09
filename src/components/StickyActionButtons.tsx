"use client";
import React from "react";
import AccessFormModal from "./AccessFormModal";

const StickyActionButtons = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="fixed right-0 top-[10%] z-30 flex flex-col items-end space-y-60">
      {/* Wrapper 1 */}
      <div>
        <a
          href="/RAY_PALMS%20_%20BROCHURE.pdf"
          download="Ray-Palms-Brochure.pdf"
          className="bg-yellow-500 text-white font-semibold px-1 py-1 w-50 h-8 transform -rotate-90 origin-bottom-right hover:bg-yellow-600 transition-all shadow-md text-sm flex items-center justify-center"
        >
          DOWNLOAD BROCHURE
        </a>
      </div>

      {/* Wrapper 2 */}
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-cyan-800 text-white font-semibold px-1 py-1 w-40 h-8 transform -rotate-90 origin-bottom-right hover:bg-cyan-900 transition-all shadow-md text-sm"
        >
          ENQUIRE NOW
        </button>
      </div>
      <AccessFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {}}
        title="Enquire Now"
      />
    </div>
  );
};

export default StickyActionButtons;
