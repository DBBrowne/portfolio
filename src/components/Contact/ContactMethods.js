import { contact } from '../../content'
import { icons } from '../../assets/icons'

export default function ContactMethods () {
  return (
    <div className='contact-methods'>
      {
        Object.keys(contact).map(method => {
          return (
            <a 
              className='social-badge contact'
              href={contact[method].badgeLinkUrl}
              key={contact[method].badgeText} 
            >
              {icons[method]()}
              <span> {contact[method].badgeText}</span>
            </a>
          )
        })
      }
    </div>
  )
}