import Image from "next/image";

const ProjectTitle = ({ name, toggleImgState, openProjectPage, width }) => {

  return (
    <div
      className="cursor-pointer relative overflow-hidden  group flex items-start"
      onMouseEnter={toggleImgState}
      onMouseLeave={toggleImgState}
      onClick={width > 1024 ? openProjectPage: () =>{}}
    >
      <div className="text-13 leading-16 sm:text-16 sm:leading-18">{name}</div>
      <div className="w-full absolute bottom-1 left-1.5">
        <div className="opacity-0 w-full border-b-2 border-black group-hover:opacity-100 transition-all hidden xl:block"></div>
      </div>
      <Image
        src="/assets/icons/arrow-link.svg"
        alt="arrow"
        width={14}
        height={14}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xl:block mt-3.5"
        onClick={width < 1024 ? openProjectPage: () =>{}}
      />
    </div>
  );
};

export default ProjectTitle;
