import ServiceCard from "./Components/ServiceCard";
import { servicesData } from "./Constants";
import Heading from "./Components/Heading";

export default function OurServices() {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white" id="OurServices">
      <Heading title="Our Services" />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
