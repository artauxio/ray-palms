import React, { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

type PopupCardProps = {
  onClose: () => void;
  status: "success" | "error";
};

const PopUpCard: React.FC<PopupCardProps> = ({ onClose, status }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isSuccess = status === "success";

  useEffect(() => {
    // Animate popup scale from 95% to 100%
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle close with fade-out animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <div
        id="popup-card"
        className={`bg-[#e4e2dc] text-[#485e4c] py-8 px-10 rounded-3xl shadow-2xl max-w-md w-[90%] transform transition-transform duration-300 ease-in-out ${
          isVisible ? "scale-100" : "scale-95"
        } relative`}
      >
        <X
          size={24}
          onClick={handleClose}
          className="absolute top-5 right-5 cursor-pointer rounded-full p-1 text-[#5b6c55] hover:text-[#485e4c] hover:bg-[#d7d9d5] transition"
          aria-label="Close popup"
        />

        <div className="flex flex-col items-center text-center mt-4">
          {isSuccess ? (
            <>
              <CheckCircle
                size={64}
                className="text-[#485e4c] mb-5 drop-shadow-md"
                aria-hidden="true"
              />
              <h2
                id="popup-title"
                className="text-3xl font-bold mb-3 text-[#485e4c]"
              >
                Thank You
              </h2>
              <p
                id="popup-description"
                className="text-[#5b6c55] mb-8 max-w-[280px] leading-relaxed"
              >
                Your query has been recorded. We’ll be in touch soon!
              </p>
            </>
          ) : (
            <>
              <AlertCircle
                size={64}
                className="text-[#ef4444] mb-5 drop-shadow-md"
                aria-hidden="true"
              />
              <h2
                id="popup-title"
                className="text-3xl font-bold mb-3 text-[#be3535]"
              >
                Submission Failed
              </h2>
              <p
                id="popup-description"
                className="text-[#7d927b] mb-8 max-w-[280px] leading-relaxed"
              >
                Something went wrong. Please try again later.
              </p>
            </>
          )}

          <button
            onClick={handleClose}
            className="bg-[#485e4c] text-[#f0f0ec] font-semibold px-8 py-3 rounded-lg shadow-md hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[#5b6c55] focus:ring-offset-1"
            autoFocus
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
