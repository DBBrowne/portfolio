import ProjectCard from '../components/common/Projects/ProjectCard'
import { projects } from '../content'

export default function Projects () {
  return (
    <>
      <h2>Projects</h2>
      {
        projects.map(project => {
          return (
            <ProjectCard key={project.id}/>
          )
        })
      }
    </>
  )
}