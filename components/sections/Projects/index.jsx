import projectsData from "/data/projects";
import Title from "../../ui/Title";
import Wrapper from "../../Wrapper";
import ProjectItem from "./ProjectItem";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      <div className="mt-34">
        <Title name="Projects" />
        <div className="xl:flex justify-between">
          <div className="flex flex-col relative mt-2.75">
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
          <div className="hidden xl:block overflow-hidden max-w-202.75 transition-all duration-700 drop-shadow-pr lg:-z-10">
            <div className="rounded-xl overflow-hidden">
              <img
                src={projectsData[active].imgUri}
                className="max-w-full"
                alt={projectsData[active].name}
              />
            </div>
            <div className="text-2xl mt-2">
              {projectsData[active].description}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
