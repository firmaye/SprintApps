import React from "react";

const ProjectCard = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <button className="px-4 py-2 bg-[#003366] text-white rounded-md hover:bg-[#78afd4] transition-colors duration-300 self-start">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
