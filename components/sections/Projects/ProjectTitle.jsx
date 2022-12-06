import Image from "next/image";

const ProjectTitle = ({ name, openProjectPage, width, active, index }) => {

  return (
    <div
      className="cursor-pointer relative group flex items-start mb-5.1575 md:mb-4.5 lg:mb-2.9 xl:mb-0"
      onClick={width > 1024 ? openProjectPage: () =>{}}
    >
      <div className="text-13 leading-16 sm:text-21.5 sm:leading-18">{name}</div>
      <div className={`transition-opacity duration-500 ${(active === index ? "opacity-100": "opacity-0")}`}>
      <div className="overflow-hidden w-full absolute -bottom-1 left-1.5">
            <div className={`border-b-2 border-black transition-all duration-500 hidden xl:block ${(active === index ? "w-full translate-x-0": "-translate-x-full w-2/4")}`}></div>
        </div>
        <Image
          src="/assets/icons/arrow-link.svg"
          alt="arrow"
          width={14}
          height={14}
          className="hidden xl:block mt-3.5"
        />
      </div>
    </div>
  );
};

export default ProjectTitle;
