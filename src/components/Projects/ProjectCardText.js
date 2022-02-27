import { icons } from '../../assets/icons'

export default function ProjectCardText ({ project }){
  return (
    <>
      <h3>{project.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: project.summary }}></p>

      <div className='tags-container'>
        {
          project.tags.map(tag=>{
            return (<span className="tag" key={tag}>{tag}</span>)
          })
        }
      </div>
        
      <ul className='project-links-list'>
        {Object.keys(project.links).map((target=>{
          return (
            <a 
              key={target}
              href={project.links[target]}
              aria-label={`${project.title} Github`}
            >
              {icons[target]()}
            </a>
          )
        }))}
      </ul>
    </>
  )
}