"use client";
import React from "react";

const StickyActionButtons = () => {
  return (
    <div className="fixed right-0 top-[10%] z-30 flex flex-col items-end space-y-60">
      {/* Wrapper 1 */}
      <div>
        <button className="bg-yellow-500 text-white font-semibold px-1 py-1 w-50 h-8 transform -rotate-90 origin-bottom-right hover:bg-yellow-600 transition-all shadow-md text-sm">
          DOWNLOAD BROCHURE
        </button>
      </div>

      {/* Wrapper 2 */}
      <div>
        <button className="bg-cyan-800 text-white font-semibold px-1 py-1 w-40 h-8 transform -rotate-90 origin-bottom-right hover:bg-cyan-900 transition-all shadow-md text-sm">
          ENQUIRE NOW
        </button>
      </div>
    </div>
  );
};

export default StickyActionButtons;
