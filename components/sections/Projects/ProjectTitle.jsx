import Image from "next/image";

const ProjectTitle = ({ name, openProjectPage, width, active, index }) => {

  return (
    <div
      className="cursor-pointer relative overflow-hidden  group flex items-start"
      onClick={width > 1024 ? openProjectPage: () =>{}}
    >
      <div className="text-13 leading-16 sm:text-16 sm:leading-18">{name}</div>
      <div className={"transition-opacity duration-700 " + (active === index ? "opacity-100": "opacity-0")}>
        <div className="w-full absolute bottom-1 left-1.5">
          <div className="w-full border-b-2 border-black hidden xl:block"></div>
        </div>
        <Image
          src="/assets/icons/arrow-link.svg"
          alt="arrow"
          width={14}
          height={14}
          className="hidden xl:block mt-3.5"
          onClick={width < 1024 ? openProjectPage: () =>{}}
        />
      </div>
    </div>
  );
};

export default ProjectTitle;
