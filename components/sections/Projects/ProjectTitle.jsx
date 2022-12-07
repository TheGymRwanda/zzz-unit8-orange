import Image from "next/image";

const ProjectTitle = ({ name, openProjectPage, width, active, index }) => {

  return (
    <div
      className="cursor-pointer relative group flex items-start"
      onClick={width > 1024 ? openProjectPage: () =>{}}
    >
      <div className="text-13 leading-16 sm:text-21.5 sm:leading-18 -tracking-tight sm:-tracking-tight-l">{name}</div>
      <div className="overflow-hidden w-full absolute -bottom-1.5 left-0">
          <div className={`border-b-2 border-black transition-all duration-300 hidden xl:block ${(active === index ? "w-full translate-x-0": "-translate-x-full w-0")}`}></div>
      </div>
      <div className={`mt-1.5 transition-all duration-300 translate-y-0.75 ${(active === index ? "opacity-100 translate-y-0": "opacity-0")}`}>
        <Image
          src="/assets/icons/arrow-link.svg"
          alt="arrow"
          width={14}
          height={14}
          className="hidden xl:block"
        />
      </div>
    </div>
  );
};

export default ProjectTitle;
