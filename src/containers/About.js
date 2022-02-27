import ProjectCardText from '../components/Projects/ProjectCardText'
import { about, projects } from '../content'

export default function About () {
  return (
    <div className="about-wrapper">
      <pre>Hi, my name is </pre>
      <h1>{about.firstName}</h1>
      <p dangerouslySetInnerHTML={{
        __html: about.intro,
      }}></p>
      <hr />
      <h3>
        <a href="/projects">
        Recent projects
        </a>
      </h3>
      <div className='recent-projects-container'>
        {
          projects.map(project=>{
            return (
              <div className="project-text" key={project.title}>
                <ProjectCardText 
                  project={project} 
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}