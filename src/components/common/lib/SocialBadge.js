export default function SocialBadge ({ logoUrl, logoAltText, badgeText, badgeLinkUrl }){
  return (
    <a className="social-badge" href={badgeLinkUrl}>
      <img src={logoUrl} alt={logoAltText} />
      <span>{badgeText}</span>
    </a>
  )
}