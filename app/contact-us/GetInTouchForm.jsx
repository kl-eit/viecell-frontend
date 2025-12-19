"use client";
import React, { useState } from "react";
import Button from "../shared/Button/Button";
import { PhoneInput } from "../../components/ui/phone-input";
export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("✓ Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage("⚠ Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("⚠ Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-500 text-left">
   
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full border px-3.5 py-2.5  bg-white rounded-lg focus:outline-none  ${
            errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

    
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border px-3.5 py-2.5  bg-white rounded-lg focus:outline-none ${
            errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-lime-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

     
      <div>
        <PhoneInput
          type="tel"
          name="phone"
          placeholder="Phone Number"
         // value={formData.phone}
          onChange={handleChange}
          className={`w-full border px-3.5   bg-white rounded-lg focus:outline-none ${
            errors.phone ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-lime-300"
          }`}
        />
         
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

     
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full border px-3.5 py-2.5  bg-white rounded-lg focus:outline-none ${
            errors.subject ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-lime-300"
          }`}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>
     <div className="md:col-span-2">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full border px-3.5 py-2.5  bg-white rounded-lg focus:outline-none ${
            errors.message ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-lime-300"
          }`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      {submitMessage && (
        <div className={`p-3 rounded-lg text-sm ${
          submitMessage.includes("successfully")
            ? "bg-green-100 text-green-800"
            : "bg-orange-100 text-orange-800"
        }`}>
          {submitMessage}
        </div>
      )}
       <div className="md:col-span-2 text-center">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>
      
      </div>
    </form>
  );
}
