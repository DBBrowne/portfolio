import SocialBadge from '../../components/common/Footer/SocialBadge'
import { badges, about } from '../../content'

const thisYear = new Date().getFullYear()


export default function Footer () {
  return (
    <footer>
      <ul className='social-badges-container button'>
        {Object.keys(badges).map(badgeKey => (
          <SocialBadge 
            key={badges[badgeKey].badgeText} 
            badgeData={badges[badgeKey]} 
          />
        ))}
      </ul>
      <div className='endtag'>
        <span>{thisYear}, {about.fullName}</span>
      </div>
    </footer>
  )
}