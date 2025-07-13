"use client";

import { useState } from "react";
import PopUpCard from "./PopUpCard";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });
 
  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "name":
        return /^[a-zA-Z\s]+$/.test(value);
      case "phone":
        return /^[0-9]{10}$/.test(value);
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      default:
        return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    
    if (name in formErrors) {
      setFormErrors({ ...formErrors, [name]: !validateInput(name, value) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = {
      name: !validateInput("name", name),
      phone: !validateInput("phone", phone),
      email: !validateInput("email", email),
    };
    
    setFormErrors(errors);
    
    if (Object.values(errors).some((error) => error)) return;
    
    setIsSubmitting(true);
    
    try {
      // First call the parent's onSubmit
      onSubmit({ name, email, phone, interest });
      
      // Submit to Google Sheets
      const scriptUrl = "https://script.google.com/macros/s/AKfycbxqqxSx58apkPk-gKWhFmjfHB0vAqc9Ktjxljm9ttWFsORdPTCUzoF3nsibQU9CwhX8/exec";
      const formData = new URLSearchParams();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("interest", interest);

      await fetch(scriptUrl, {
        method: "POST",
        body: formData
      });

      setShowSuccessCard(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClass = (hasError: boolean) =>
    `w-full border ${
      hasError ? "border-red-500" : "border-gray-300"
    } rounded px-3 py-2 ${
      hasError ? "focus:ring-red-500" : "focus:ring-lime-500"
    } focus:outline-none focus:ring-2`;
  
  if (!isOpen) return null;

  return (
    <div
      onClick={showSuccessCard ? undefined : onClose}
      className="fixed inset-0 bg-blend-saturation bg-opacity-80 z-50 flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn"
    >
      {showSuccessCard ? (
        <PopUpCard status="success" onClose={() => {
          setShowSuccessCard(false);
          onClose();
        }} />
      ) : (
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
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                required
                onChange={handleChange}
                className={inputClass(formErrors.name)}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid name</p>
              )}
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (10 digits)"
                value={phone}
                required
                onChange={handleChange}
                className={inputClass(formErrors.phone)}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit phone number</p>
              )}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                required
                onChange={handleChange}
                className={inputClass(formErrors.email)}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
              )}
            </div>

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
              disabled={isSubmitting}
              className="w-full bg-lime-600 text-white py-2 rounded hover:bg-lime-700 disabled:bg-lime-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit & View"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AccessFormModal;
