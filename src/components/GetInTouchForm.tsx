"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Container from "./Container";
import PopUpCard from "./PopUpCard";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  city: string;
  message: string;
}

const GetInTouchForm = () => {
  const initialFormData: FormData = {
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
    city: false,
  });
  const [showCard, setShowCard] = useState(false);

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        return /^[a-zA-Z\s]+$/.test(value);
      case "phoneNumber":
        return /^[0-9]{10}$/.test(value);
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "city":
        return value.trim().length > 0;
      default:
        return true;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name in formErrors) {
      setFormErrors({ ...formErrors, [name]: !validateInput(name, value) });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors = {
      fullName: !validateInput("fullName", formData.fullName),
      phoneNumber: !validateInput("phoneNumber", formData.phoneNumber),
      email: !validateInput("email", formData.email),
      city: !validateInput("city", formData.city),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    // Log the form data
    console.log("Form Submitted:", formData);

    // Show popup and reset
    setShowCard(true);
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (showCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCard]);

  const inputClass = (hasError: boolean) =>
    `bg-transparent border ${
      hasError ? "border-red-500" : "border-lime-500"
    } rounded-md px-4 py-2 placeholder-gray-500 text-lime-800 focus:outline-none focus:ring-2 ${
      hasError ? "focus:ring-red-500" : "focus:ring-lime-500"
    }`;

  return (
    <>
      <section className="bg-green-50 text-white py-16 px-4">
        <Container>
          <h2 className="text-3xl font-semibold mb-2 text-lime-600">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-2">
            Fill in your details and our team will get in touch with you
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="mb-1 text-sm font-medium text-lime-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass(formErrors.fullName)}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="mb-1 text-sm font-medium text-lime-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your number"
                className={inputClass(formErrors.phoneNumber)}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-medium text-lime-600"
              >
                Email ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClass(formErrors.email)}
                required
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="mb-1 text-sm font-medium text-lime-600"
              >
                City of Residence
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className={inputClass(formErrors.city)}
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="message"
                className="mb-1 text-sm font-medium text-lime-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="bg-transparent border border-lime-500 rounded-md px-4 py-2 placeholder-gray-500 text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-md font-semibold transition cursor-pointer"
              >
                SUBMIT
              </button>
            </div>
          </form>

          {showCard && (
            <PopUpCard status="success" onClose={() => setShowCard(false)} />
          )}
        </Container>
      </section>
    </>
  );
};

export default GetInTouchForm;
