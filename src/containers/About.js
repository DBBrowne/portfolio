import ProjectCardText from '../components/Projects/ProjectCardText'
import { about, projects, blogRecent } from '../content'

// interleave projects and blogs
const totalProjectCards = (projects.length + blogRecent.length)
const recentProjectCards = []
let projectsCounter = 0
let blogCounter = 0
while (recentProjectCards.length < totalProjectCards){
  if (projectsCounter < projects.length){
    recentProjectCards.push(projects[projectsCounter])
    projectsCounter++
  }
  if (blogCounter < blogRecent.length){
    recentProjectCards.push(blogRecent[blogCounter])
    blogCounter++
  }
}

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
          recentProjectCards.map(project=>{
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