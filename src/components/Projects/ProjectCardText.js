import { icons } from '../../assets/icons'

export default function ProjectCardText ({ project }){
  return (
    <>
      <h3>{project.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: project.summary }}></p>

      <div className='tags-container'>
        {
          project.tags && project.tags.map(tag=>{
            return (<span className="tag" key={tag}>{tag}</span>)
          })
        }
      </div>
        
      <ul className='project-links-list'>
        {Object.keys(project.links).map((target=>{
          return (
            <a 
              key={target}
              href={project.links[target] || project.links.github}
              rel="noopener noreferrer"
              target="_blank" 
              aria-label={`${project.title} ${target}`}
            >
              {icons[target]()}
            </a>
          )
        }))}
      </ul>
    </>
  )
}