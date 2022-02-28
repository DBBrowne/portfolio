import { NavLink } from 'react-router-dom'
import { about } from '../../content'
import { ReactComponent as LeftArrow } from '../../assets/left-arrow-svgrepo-com.svg'

function WrappedNavLink({ link }){
  return (
    <NavLink
      to={link.to}
      className="text-titlecase"
    >
      <span>{link.text || link.to}</span>
      <LeftArrow />
    </NavLink>
  )
}
const links = [
  { to: '', text: 'about' },
  { to: 'blog' },
  { to: 'projects' },
  { to: 'technologies' },
  { to: 'contact' }
]

export default function Nav () {
  return (
    <nav>
      <h1>{about.firstName}</h1>
      <ul>
        {
          links.map(link => {
            return <WrappedNavLink key={link.to} link={link} />
          })
        }
      </ul>
    </nav>
  )
}

