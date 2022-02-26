import { ReactComponent as DocsIcon } from '../../assets/docsIcon.svg'
import { ReactComponent as GithubIcon } from '../../assets/githubIcon.svg'
import { ReactComponent as LinkOutIcon } from '../../assets/link-out-svgrepo-com.svg'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className='project-card-image-container'>
        <a href={project.links.deploy}>
          <img 
            src={project.images.cover} 
            alt={project.title.toLowerCase()}
          />
        </a>
      </div>
      <h3>{project.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: project.summary }}></p>

      <div className='tags-container'>
        {
          project.tags.map(tag=>{
            return (<span className="tag" key={tag}>{tag}</span>)
          })
        }
      </div>
        
      <ul>
        <a 
          href={project.links.github}
          aria-label={`${project.title} Github`}
        >
          <GithubIcon />
        </a>
        <a 
          href={project.links.caseStudy || project.links.github}
          aria-label={`${project.title} case study`}
        >
          <DocsIcon />
        </a>
        <a 
          href={project.links.deploy || project.links.github}
          aria-label={`${project.title} Live Site`}
        >
          <LinkOutIcon />
        </a>
      </ul>
    </article>
  )
}