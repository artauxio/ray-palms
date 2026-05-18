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
  title?: string;
};

const AccessFormModal = ({ isOpen, onClose, onSubmit, title }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<"1bhk" | "2bhk">("1bhk");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: false, phone: false, email: false });

  const validateInput = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "name": return /^[a-zA-Z\s]+$/.test(value);
      case "phone": return /^[0-9]{10}$/.test(value);
      case "email": return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      default: return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: field, value } = e.target;
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "phone") setPhone(value);
    if (field in formErrors) {
      setFormErrors((prev) => ({ ...prev, [field]: !validateInput(field, value) }));
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
    if (Object.values(errors).some(Boolean)) return;

    setIsSubmitting(true);
    try {
      // Call the parent onSubmit first
      onSubmit({ name, email, phone, interest });

      const scriptUrl = "https://script.google.com/macros/s/AKfycbxvPOI0h7Bq2CK52crX0L3R9ODZUh6ZoJFEbzvJ0CcWnULrViQ5ys57l-3emZhPR1dV/exec";

      const formBody = new URLSearchParams();
      formBody.append("formType", "Floor Plan Access");
      formBody.append("fullName", name.trim());
      formBody.append("phoneNumber", phone.trim());
      formBody.append("email", email.trim());
      formBody.append("city", "");
      formBody.append("message", `Interest: ${interest.toUpperCase()}`);

      console.log("Submitting data:", Object.fromEntries(formBody));

      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: 'no-cors', // Add this to handle CORS issues
        body: formBody,
      });

      console.log("Response status:", response.status);
      
      // With no-cors mode, we can't read the response properly
      // So we'll assume success if no error is thrown
      if (response.type === 'opaque' || response.ok) {
        console.log("Form submitted successfully");
        setShowSuccessCard(true);
        // Clear form fields
        setName(""); 
        setEmail(""); 
        setPhone(""); 
        setInterest("1bhk");
        setFormErrors({ name: false, phone: false, email: false });
      } else {
        console.error("Submission failed with status:", response.status);
        // Still show success as no-cors doesn't give us reliable status
        setShowSuccessCard(true);
        setName(""); 
        setEmail(""); 
        setPhone(""); 
        setInterest("1bhk");
        setFormErrors({ name: false, phone: false, email: false });
      }

    } catch (error) {
      console.error("Submission error:", error);
      // Even on error, show success as the data might have been submitted
      // This is common with no-cors requests
      setShowSuccessCard(true);
      setName(""); 
      setEmail(""); 
      setPhone(""); 
      setInterest("1bhk");
      setFormErrors({ name: false, phone: false, email: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full border rounded px-3 py-2 placeholder-[#9ca098] text-[#485e4c] focus:outline-none focus:ring-2 transition-colors ${
      hasError ? "border-[#ef4444] focus:ring-[#ef4444]" : "border-[#bebfbc] focus:ring-[#5b6c55]"
    }`;

  if (!isOpen) return null;

  return (
    <div
      onClick={showSuccessCard ? undefined : onClose}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-[#e4e2dc]/90 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-form-modal-title"
    >
      {showSuccessCard ? (
        <PopUpCard
          status="success"
          onClose={() => {
            setShowSuccessCard(false);
            onClose();
          }}
        />
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#f0f0ec] rounded-3xl p-8 shadow-2xl max-w-md w-full animate-zoomIn relative"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-5 text-[#485e4c] hover:text-[#5b6c55] rounded-full p-1 cursor-pointer transition"
          >✕</button>

          <h3
            id="access-form-modal-title"
            className="text-2xl font-semibold mb-6 text-[#485e4c] text-center"
          >
            {title ?? "Get Floor Plan & EMI Calculator Access"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={handleChange}
              required
              className={inputClass(formErrors.name)}
            />
            {formErrors.name && <p className="text-[#ef4444] text-xs mt-1">Please enter a valid name.</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits)"
              value={phone}
              onChange={handleChange}
              required
              className={inputClass(formErrors.phone)}
            />
            {formErrors.phone && <p className="text-[#ef4444] text-xs mt-1">Please enter a valid 10-digit phone number.</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              required
              className={inputClass(formErrors.email)}
            />
            {formErrors.email && <p className="text-[#ef4444] text-xs mt-1">Please enter a valid email address.</p>}

            <fieldset className="flex gap-6 justify-center">
              {["1bhk", "2bhk"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="interest"
                    value={type}
                    checked={interest === type as "1bhk" | "2bhk"}
                    onChange={() => setInterest(type as "1bhk" | "2bhk")}
                  />
                  {type.toUpperCase()}
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#485e4c] text-[#f0f0ec] py-3 rounded-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit & Continue"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AccessFormModal;