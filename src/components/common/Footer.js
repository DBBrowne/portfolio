import SocialBadge from './lib/SocialBadge'
import { badges, about } from '../../content'

const thisYear = new Date().getFullYear()


export default function Footer () {
  return (
    <footer>
      <ul className='social-badges-container'>
        {Object.keys(badges).map(badgeKey => (
          <SocialBadge key={badges[badgeKey].badgeText} {...badges[badgeKey]} />
        ))}
      </ul>
      <div className='endtag'>
        <span>{thisYear}, {about.name}</span>
      </div>
    </footer>
  )
}