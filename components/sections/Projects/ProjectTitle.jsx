import Image from 'next/image'

const ProjectTitle = ({name, toggleImgState}) => {
  return (
    <div className="cursor-pointer relative group" onMouseEnter={toggleImgState} onMouseLeave={toggleImgState}>
        <div className="text-13 leading-16 sm:text-16 sm:leading-18">{name}</div>
        <div className="overflow-hidden w-full absolute bottom-0">
            <div className="-translate-x-full w-2/4 border-b-2 border-black group-hover:w-full group-hover:translate-x-0 transition-all duration-300 hidden xl:block"></div>
        </div>
        <Image src="/assets/icons/arrow-link.svg" alt="arrow" width={14} height={14} className="absolute -right-4 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xl:block" />
    </div>
  )
}

export default ProjectTitle;