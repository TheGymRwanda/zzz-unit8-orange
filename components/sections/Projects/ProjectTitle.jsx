import Image from "next/image";

const ProjectTitle = ({ name, openProjectPage, width, active, index }) => {
  const MINIMUM_MOBILE_WIDTH = 1024;
  return (
    <div
      className="cursor-pointer relative group flex items-start mb-5.1575 md:mb-4.5 lg:mb-2.9 xl:mb-0"
      onClick={width > MINIMUM_MOBILE_WIDTH ? openProjectPage : null}
    >
      <div className="text-13 leading-16 sm:text-21.5 sm:leading-18 -tracking-tight sm:-tracking-tight-l">
        {name}
      </div>
      <div className="overflow-hidden w-full absolute -bottom-1.5 left-0">
        <div
          className={`border-b-2 border-black transition-all duration-300 hidden xl:block ${
            active === index ? "w-full translate-x-0" : "-translate-x-full w-0"
          }`}
        ></div>
      </div>
      <div
        className={`mt-1.5 transition-all delay-300 duration-300 translate-x-1 translate-y-0 ${
          active === index ? "opacity-100 translate-y-0.75" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/icons/arrow-link.svg"
          alt="arrow"
          width={13}
          height={13}
          className="hidden xl:block"
        />
      </div>
    </div>
  );
};

export default ProjectTitle;
