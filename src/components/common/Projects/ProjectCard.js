import { ReactComponent as DocsIcon } from '../../../assets/docsIcon.svg'
import { ReactComponent as GithubIcon } from '../../../assets/githubIcon.svg'
import { ReactComponent as LinkOuticon } from '../../../assets/link-out-svgrepo-com.svg'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className='project-card-image-container'>
        <a href={project.links.caseStudy}>
          <img 
            src={project.images.cover} 
            alt={project.title.toLowerCase()}
          />
        </a>
      </div>
      <h3>{project.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: project.summary }}></p>
      

        
      <ul>
        <a href={project.links.github}>
          <GithubIcon />
        </a>
        <a href={project.links.caseStudy}>
          <DocsIcon />
        </a>
        <a href={project.links.deploy}>
          <LinkOuticon />
        </a>
      </ul>
    </article>
  )
}