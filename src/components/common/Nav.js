import { NavLink } from 'react-router-dom'
import { about } from '../../content'

export default function Nav () {
  return (
    <nav>
      <h1>{about.firstName}</h1>
      <ul>
        <NavLink exact to="/" className="text-titlecase" >about</NavLink>
        <NavLink to="/blog" className="text-titlecase"activeStyle={{ color: 'red' }} activeClassName="active">blog</NavLink>
        <NavLink to="/projects" className="text-titlecase"activeStyle={{ color: 'red' }} activeClassName="active">projects</NavLink>
        <NavLink to="/technologies" className="text-titlecase"activeStyle={{ color: 'red' }} activeClassName="active">technologies</NavLink>
        <NavLink to="/contact" className="text-titlecase"activeStyle={{ color: 'red' }} activeClassName="active">contact</NavLink>
      </ul>
    </nav>
  )
}

