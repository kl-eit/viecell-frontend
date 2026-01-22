"use client";
import React, { useState } from "react";
import Button from "../component/Button/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    appointmentDate: "",
    symptoms: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.appointmentDate)
      newErrors.appointmentDate = "Appointment date is required";
   
    if (!formData.symptoms.trim())
      newErrors.symptoms = "Please describe your symptoms";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage(
          "✓ Appointment booked successfully! We'll contact you soon.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          appointmentDate: "",
          
          symptoms: "",
          agreeToTerms: false,
        });
      } else {
        setSubmitMessage("⚠ Error booking appointment. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("⚠ Error booking appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-500 text-left"
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className={`border px-3.5 py-2.5  bg-white rounded-lg w-full focus:outline-none  ${
            errors.name
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`border px-3.5 py-2.5  bg-white rounded-lg w-full focus:outline-none  ${
            errors.email
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <PhoneInput
          country={"in"}
          value={formData.phone}
          onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
          inputProps={{
            name: "phone",
            required: true,
          }}
          inputStyle={{
            width: "100%",
            height: "44px",
            borderRadius: "8px",
            border: errors.phone ? "1px solid #ef4444" : "1px solid #d1d5db",
          }}
          containerStyle={{ width: "100%" }}
          placeholder="Phone Number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className={`border px-3.5 py-2.5  bg-white rounded-lg w-full focus:outline-none  ${
            errors.country
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300"
          }`}
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="appointmentDate"
          className="block text-gray-600 text-sm mb-2"
        >
          Appointment Date
        </label>
        <input
          id="appointmentDate"
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          className={`border px-3.5 py-2.5  bg-white rounded-lg w-full focus:outline-none  ${
            errors.appointmentDate
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300"
          }`}
        />
        {errors.appointmentDate && (
          <p className="text-red-500 text-sm mt-1">{errors.appointmentDate}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <textarea
          name="symptoms"
          placeholder="Briefly describe your symptoms or reason for visit"
          value={formData.symptoms}
          onChange={handleChange}
          className={`border px-3.5 py-2.5  bg-white rounded-lg w-full h-32 resize-none focus:outline-none  ${
            errors.symptoms
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300"
          }`}
        />
        {errors.symptoms && (
          <p className="text-red-500 text-sm mt-1">{errors.symptoms}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="w-4 h-4 accent-lime-800"
          />
          <span className="text-gray-600 text-sm">
            I agree to the{" "}
            <a href="#" className="text-lime-800 underline">
              Terms & Privacy Policy
            </a>
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
        )}
      </div>
      {submitMessage && (
        <div
          className={`md:col-span-2 p-3 bg-white rounded-lg text-sm ${
            submitMessage.includes("successfully")
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {submitMessage}
        </div>
      )}
      <div className="flex justify-center md:col-span-2">
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Confirm Appointment"}
        </Button>
      </div>
    </form>
  );
}
