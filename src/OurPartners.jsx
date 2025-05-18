import React from "react";
import { PartnersData } from "./Constants";
import Heading from "./Components/Heading";
function OurPartners() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Heading title="Our Partners" />

        {/* Grid container - 3 columns on medium+, 2 columns on small screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {PartnersData.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
