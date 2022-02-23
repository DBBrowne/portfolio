import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
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

