import Image from "next/image";

const ProjectTitle = ({ name, openProjectPage, width, active, index }) => {
  const MAXIMUN_SMALL_BREAKPOINTS_WIDTH = 1024;
  return (
    <div
      className="cursor-pointer relative group flex items-start mb-5.1575 md:mb-4.5 lg:mb-2.9 xl:mb-0"
      onClick={width > MAXIMUN_SMALL_BREAKPOINTS_WIDTH ? openProjectPage : null}
    >
      <div className="text-5.5xl leading-16 sm:text-7.8xl sm:leading-18 -tracking-tight sm:-tracking-tightest">
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
