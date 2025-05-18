import React from "react";

import bg_image from "./assets/bg_software.jpg";
import { featuresData } from "./Constants";
import FeatureCard from "./Components/FeatureCard";
import Heading from "./Components/Heading";

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <Heading title={" Why choose Sprint App?"} />
      <div
        className=" w-full min-h-screen bg-cover bg-left"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="flex flex-col items-start justify-start h-[calc(100vh-64px)] px-6 md:px-20 w-full p-6">
          <div className="w-full space-y-6 py-6">
            {featuresData.map((feature) => (
              <div key={feature.id} className="w-full">
                <FeatureCard
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description} // Added if needed
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
