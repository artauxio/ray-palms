import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

type PopupCardProps = {
  onClose: () => void;
  status: "success" | "error";
};

const PopUpCard: React.FC<PopupCardProps> = ({ onClose, status }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("popup-card")?.classList.remove("scale-95");
      document.getElementById("popup-card")?.classList.add("scale-100");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const isSuccess = status === "success";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-500 ease-in-out z-50">
      <div
        id="popup-card"
        className="bg-lime-50 text-lime-800 py-6 px-8 rounded-2xl shadow-xl w-[90%] max-w-md transform scale-95 transition-transform duration-300 ease-in-out relative"
      >
        <X
          className="absolute top-4 right-4 cursor-pointer text-lime-600 hover:text-lime-800 transition"
          size={22}
          onClick={onClose}
        />

        <div className="flex flex-col items-center text-center mt-6">
          {isSuccess ? (
            <>
              <CheckCircle size={60} className="text-lime-600 mb-4" />
              <p className="text-2xl font-semibold mb-2">Thank You</p>
              <p className="text-sm text-lime-700 mb-6">
                Your query has been recorded. We’ll be in touch soon!
              </p>
            </>
          ) : (
            <>
              <AlertCircle size={60} className="text-red-500 mb-4" />
              <p className="text-2xl font-semibold mb-2">Submission Failed</p>
              <p className="text-sm text-gray-700 mb-6">
                Something went wrong. Please try again later.
              </p>
            </>
          )}

          <button
            onClick={onClose}
            className="bg-lime-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-lime-700 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
