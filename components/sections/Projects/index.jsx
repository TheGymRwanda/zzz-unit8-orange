/* eslint-disable @next/next/no-img-element */
import projectsData from '/data/projects'
import Title from '../../ui/Title'
import Wrapper from '../Wrapper'
import ProjectItem from './ProjectItem'
import { useState } from 'react'

const Projects = () => {
    const [active, setActive] = useState(0);

  return (
    <Wrapper>
        <div className="mt-34">
            <Title name="Projects" />
            <div className="xl:flex justify-between relative mt-2.75">
                <div className="flex flex-col relative">
                    {
                        projectsData.map((project, index) =>(
                            <ProjectItem {...project} key={index} index={index} setActive={setActive} active={active} />
                        ))
                    }
                </div>
                {
                    projectsData.map((project, index) =>(
                        <div
                            className={`overflow-hidden absolute right-0 max-w-202.75 transition-all duration-700 drop-shadow-pr lg:-z-10 ${active === index ? 'opacity-100': 'opacity-0'}`}
                            key={index}
                        >
                            <div className="rounded-xl overflow-hidden">
                            <img src={project.imgUri} className="max-w-full" alt={project.name} />
                            </div>
                            <div className="text-2xl mt-2">{project.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default Projects