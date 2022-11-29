import projectsData from '/data/projects'
import Title from '../../ui/Title'
import Wrapper from '../Wrapper'
import ProjectItem from './ProjectItem'

const Projects = () => {

  return (
    <Wrapper>
        <div className="mt-34">
            <Title name="Projects" />
            <div className="flex flex-col relative mt-2.75">
                {
                    projectsData.map((project, index) =>(
                        <ProjectItem {...project} key={index} />
                    ))
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default Projects