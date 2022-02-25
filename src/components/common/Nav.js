import { Link } from 'react-router-dom'
import { about } from '../../content'

export default function Nav () {
  return (
    <nav>
      <h1>{about.firstName}</h1>
      <ul>
        <Link to="/" className="text-titlecase">about</Link>
        <Link to="/blog" className="text-titlecase">blog</Link>
        <Link to="/projects" className="text-titlecase">projects</Link>
        <Link to="/technologies" className="text-titlecase">technologies</Link>
        <Link to="/contact" className="text-titlecase">contact</Link>
      </ul>
    </nav>
  )
}

