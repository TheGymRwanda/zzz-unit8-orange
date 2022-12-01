import Image from "next/image";

const ProjectTitle = ({ name, openProjectPage, width, active, index }) => {

  return (
    <div
      className="cursor-pointer relative group flex items-start"
      onClick={width > 1024 ? openProjectPage: () =>{}}
    >
      <div className="text-13 leading-16 sm:text-21.5 sm:leading-18">{name}</div>
      <div className={`transition-opacity duration-700 ${(active === index ? "opacity-100": "opacity-0")}`}>
      <div className="overflow-hidden w-full absolute -bottom-1 left-1.5">
            <div className="-translate-x-full w-2/4 border-b-2 border-black group-hover:w-full group-hover:translate-x-0 transition-all duration-500 hidden xl:block"></div>
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
