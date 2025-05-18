import React from "react";
import Icon from "@mdi/react"; // Import the Icon component

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl mb-4">
        <Icon path={icon} size={1} />{" "}
        {/* Render the icon using the Icon component */}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
