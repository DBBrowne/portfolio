import { NavLink } from 'react-router-dom'
import { about } from '../../content'

export default function Nav () {
  return (
    <nav>
      <h1>{about.firstName}</h1>
      <ul>
        <NavLink
          to="/"
          className="text-titlecase"
        >about</NavLink>
        <NavLink
          to="/blog"
        >blog</NavLink>
        <NavLink 
          to="/projects"
          className="text-titlecase"
        >projects</NavLink>
        <NavLink
          to="/technologies"
          className="text-titlecase"
        >technologies</NavLink>
        <NavLink 
          to="/contact"
          className="text-titlecase"
        >contact</NavLink>
      </ul>
    </nav>
  )
}

