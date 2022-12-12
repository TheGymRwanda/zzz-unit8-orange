import { useEffect, useRef, useState } from "react";
import ProjectTitle from "./ProjectTitle";

/* eslint-disable @next/next/no-img-element */
const ProjectItem = ({
  name,
  imgUri,
  description,
  projectUrl,
  setActive,
  active,
  index,
}) => {
  const imgRef = useRef();
  const [width, setWidth] = useState();

  useEffect(() => {
    (() => {
      window && setWidth(window.innerWidth);
    })();
  }, []);

  const openProjectPage = () => window.open(projectUrl, "blank");

  const toggleImgState = () =>
    imgRef.current.classList.toggle("project__image--active");

  return (
    <div
      className="flex flex-col xl:flex-row items-start project"
      onMouseEnter={() => {
        setActive(index);
        toggleImgState();
      }}
      onMouseLeave={toggleImgState}
    >
      <ProjectTitle
        name={name}
        active={active}
        index={index}
        openProjectPage={openProjectPage}
        width={width}
      />
      <div
        ref={imgRef}
        className="opacity-0 h-0 xl:hidden overflow-hidden max-w-202.75 transition-all duration-500 drop-shadow-pr mt-0 project__image"
      >
        <div className="rounded-xl overflow-hidden">
          <img
            src={imgUri}
            className="max-w-full cursor-pointer"
            alt={name}
            onClick={width < 1024 ? openProjectPage : () => {}}
          />
        </div>
        <div className="text-2xl mt-2">{description}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
