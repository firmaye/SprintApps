import React from "react";
import img from "./assets/abt.jpg";
import Heading from "./Components/Heading";

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-4 md:mt-0 md:px-20" id="AboutUs">
      <Heading title="About Us" />
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-6 rounded-lg">
        <div className="md:w-1/2 text-gray-700 text-justify">
          <p className="mb-4">
            At Sprint apps, we are passionate about driving innovation in the
            software industry. Founded by a team of experienced professionals,
            our mission is to create powerful, user-friendly software solutions
            that empower businesses to optimize their operations and achieve
            their goals.
          </p>
          <p>
            With a commitment to excellence and a focus on customer
            satisfaction, we strive to build lasting relationships with our
            clients, helping them navigate the complexities of technology with
            ease and confidence. Together, we are shaping the future of business
            through cutting-edge software.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
          <img
            src={img}
            alt="About Us"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
