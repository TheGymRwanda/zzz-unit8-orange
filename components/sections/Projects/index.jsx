import projectsData from "/data/projects";
import Title from "../../ui/Title";
import Wrapper from "../../Wrapper";
import ProjectItem from "./ProjectItem";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      <div className="xl:mb-31.7 lg:mb-25.95 sm:mb-22.95 mb-20.25 xl:min-h-177 mt-8.25 sm:mt-16.7 lg:mt-26.5 xl:mt-34">
        <Title name="Projects" />
        <div className="xl:flex items-start justify-between mt-2.75">
          <div className="xl:h-48">
            <div className="xl:absolute">
              <div className="flex flex-col relative xl:gap-6.5">
                {projectsData.map((project, index) => (
                  <ProjectItem
                    {...project}
                    key={index}
                    index={index}
                    setActive={setActive}
                    active={active}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden xl:block sticky w-full top-10 bg-red-600">
            {projectsData.map((project, index) => (
              <div
                className={`overflow-hidden absolute right-0 max-w-202.75 transition-all duration-700 drop-shadow-pr lg:-z-10 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={project.imgUri}
                    className="max-w-full"
                    alt={project.name}
                  />
                </div>
                <div className="text-2xl mt-2">{project.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
