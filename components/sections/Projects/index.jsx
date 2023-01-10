import projects from "/data/projects";
import Image from "next/image";
import Title from "../../ui/Title";
import Wrapper from "../../Wrapper";
import ProjectItem from "./ProjectItem";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <Wrapper>
      <div className="xl:mb-31.7 lg:mb-25.75 sm:mb-22.95 mb-20.25 xl:min-h-177 mt-8.25 sm:mt-16.6 lg:mt-26.5 xl:mt-34">
        <Title name="Projects" />
        <div className="xl:flex items-start justify-between mt-2.75">
          <div className="xl:h-48">
            <div className="xl:absolute">
              <div className="flex flex-col relative xl:gap-6.5">
                {projects.map((project, index) => (
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
          <div className="sticky hidden w-full bg-red-600 xl:block top-10">
            {projects.map((project, index) => (
              <div
                className={`overflow-hidden absolute right-0 max-w-202.75 xl:max-w-2xl mediumXl:max-w-202.75 transition-all duration-700 drop-shadow-3xl lg:-z-10 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    width={811}
                    height={444}
                    src={project.imgUri}
                    className="max-w-full"
                    alt={project.name}
                  />
                </div>
                <div className="mt-2 text-2xl">{project.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
