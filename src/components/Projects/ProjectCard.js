import ProjectCardText from './ProjectCardText'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className='project-card-image-container'>
        <a href={project.links.deploy}>
          <img 
            src={project.images.cover} 
            alt={project.title.toLowerCase()}
            loading="lazy"
          />
        </a>
      </div>
      <ProjectCardText project={project}/>
    </article>
  )
}