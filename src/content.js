import _about from './content/about.json'
import _badges from './content/badges.json'
import _contact from './content/contact.json'
import _projects from './content/projects.json'
import _skills from './content/skills.json'
import _logosExternal from './content/logosExternal.json'

// set badge logo url from external resources if not in badges
Object.keys(_badges).forEach(key => {
  if (!(_badges[key].logoUrl)){
    _badges[key].logoUrl = _logosExternal[key]
  }
})

export const about = _about
export const badges = _badges
export const contact = _contact
export const projects = _projects
export const skills = _skills
export const logosExternal = _logosExternal