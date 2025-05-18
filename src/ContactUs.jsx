import React from "react";
import Heading from "./Components/Heading";
import { useState } from "react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const services = [
    "Product Design",
    "Website Development",
    "Mobile Apps development",
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="Contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Heading title="Contact Us" />
          <p className="text-xl text-gray-600">What can we do for you?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-4 mb-8">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What can we do for you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Phone
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  +251 912 255 199
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Email
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  sprintapps@gmail.com
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Working Hours
                </h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
