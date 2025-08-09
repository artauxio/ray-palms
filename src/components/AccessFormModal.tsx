"use client";

import { useState, useEffect } from "react";
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
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const validateInput = (fieldName: string, value: string) => {
    switch (fieldName) {
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
    const { name: field, value } = e.target;

    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "phone") setPhone(value);

    if (field in formErrors) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: !validateInput(field, value),
      }));
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
      onSubmit({ name, email, phone, interest });

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyVIyvy1UxhjbTsDQgHIcb_9S2OZuV-GIes8I-PX7VbY3evebE2ipzLm5FntW_DJdKl-A/exec";

      await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          phoneNumber: phone,
          email,
          city: "",
          message: `Interest: ${interest.toUpperCase()}`,
        }),
        mode: "no-cors",
      });

      setShowSuccessCard(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full border rounded px-3 py-2 placeholder-[#9ca098] text-[#485e4c] focus:outline-none focus:ring-2 transition-colors ${
      hasError
        ? "border-[#ef4444] focus:ring-[#ef4444]"
        : "border-[#bebfbc] focus:ring-[#5b6c55]"
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
            // Clear form on modal close
            setName("");
            setEmail("");
            setPhone("");
            setInterest("1bhk");
            setFormErrors({ name: false, phone: false, email: false });
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
          >
            ✕
          </button>

          <h3
            id="access-form-modal-title"
            className="text-2xl font-semibold mb-6 text-[#485e4c] text-center"
          >
            {title ?? "Get Floor Plan & EMI Calculator Access"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                required
                onChange={handleChange}
                className={inputClass(formErrors.name)}
                aria-invalid={formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
              />
              {formErrors.name && (
                <p
                  id="name-error"
                  className="text-[#ef4444] text-xs mt-1"
                  role="alert"
                >
                  Please enter a valid name.
                </p>
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
                aria-invalid={formErrors.phone}
                aria-describedby={formErrors.phone ? "phone-error" : undefined}
              />
              {formErrors.phone && (
                <p
                  id="phone-error"
                  className="text-[#ef4444] text-xs mt-1"
                  role="alert"
                >
                  Please enter a valid 10-digit phone number.
                </p>
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
                aria-invalid={formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
              />
              {formErrors.email && (
                <p
                  id="email-error"
                  className="text-[#ef4444] text-xs mt-1"
                  role="alert"
                >
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <fieldset className="flex gap-6 justify-center" aria-label="Apartment Interest">
              <label className="flex items-center gap-2 cursor-pointer text-[#485e4c] font-medium select-none transition-colors hover:text-[#5b6c55]">
                <input
                  type="radio"
                  name="interest"
                  value="1bhk"
                  checked={interest === "1bhk"}
                  onChange={() => setInterest("1bhk")}
                  className="accent-[#485e4c] cursor-pointer"
                />
                1 BHK
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[#485e4c] font-medium select-none transition-colors hover:text-[#5b6c55]">
                <input
                  type="radio"
                  name="interest"
                  value="2bhk"
                  checked={interest === "2bhk"}
                  onChange={() => setInterest("2bhk")}
                  className="accent-[#485e4c] cursor-pointer"
                />
                2 BHK
              </label>
            </fieldset>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#485e4c] text-[#f0f0ec] py-3 rounded-lg font-semibold flex items-center justify-center transition-colors disabled:bg-[#7d927b] disabled:cursor-not-allowed hover:bg-[#5b6c55]"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#f0f0ec]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
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
