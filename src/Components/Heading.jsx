import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="">
      {" "}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        {title}
      </h2>
      <div className="w-20 h-1 mx-auto bg-[#003366] mb-12 rounded-full"></div>
    </div>
  );
};

export default Heading;
