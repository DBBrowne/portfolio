import { skills } from '../content'

export default function Technologies () {
  return (
    <div className='technologies-container'>
      {
        Object.keys(skills).map(skill=>{
          return (
            <article key={skill} className="skill-container">
              <h4 className='text-titlecase'>{skill}</h4>
              <ul>
                {
                  skills[skill].map(tech=>{
                    return (
                      <li key={tech}>{tech}</li>
                    )
                  })
                }
              </ul>
            </article>
          )
        })
      }
    </div>
  )
}