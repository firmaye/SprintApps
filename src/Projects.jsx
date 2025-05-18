import React from "react";
import Heading from "./Components/Heading";
import { ProjectsData } from "./Constants";
import ProjectCard from "./Components/ProjectsCard";

const Projects = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" id="Projects">
      <div className="max-w-7xl mx-auto">
        <Heading title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
