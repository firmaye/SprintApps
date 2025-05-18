import React from "react";

const FeatureCard = ({ title, icon }) => {
  return (
    <div className="flex  hover:shadow-lg  h-full">
      <div className="text-4xl mb-4 text-white">{icon}</div>
      <h3 className="text-xl font-bold text-white m-2">{title}</h3>
    </div>
  );
};

export default FeatureCard;
