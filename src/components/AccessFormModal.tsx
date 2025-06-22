"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    interest: "1bhk" | "2bhk";
  }) => void;
};

const AccessFormModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<"1bhk" | "2bhk">("1bhk");

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-blend-saturation bg-opacity-80 z-50 flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl relative animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black font-bold text-xl cursor-pointer"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4 text-lime-600">
          Get Floor Plan Access
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ name, email, phone, interest });
            onClose();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="interest"
                value="1bhk"
                checked={interest === "1bhk"}
                onChange={() => setInterest("1bhk")}
              />
              1 BHK
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="interest"
                value="2bhk"
                checked={interest === "2bhk"}
                onChange={() => setInterest("2bhk")}
              />
              2 BHK
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2 rounded hover:bg-lime-700"
          >
            Submit & View
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessFormModal;
