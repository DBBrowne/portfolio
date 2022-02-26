import ProjectCard from '../components/common/Projects/ProjectCard'
import { projects } from '../content'

export default function Projects () {
  return (
    <div className='projects-container'>
      {
        projects.map(project => {
          return (
            <ProjectCard key={project.id} project={project}/>
          )
        })
      }
    </div>
  )
}