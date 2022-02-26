function BadgeContent({ logoUrl, logoAltText, badgeText }){
  return (
    <>
      <img src={logoUrl} alt={logoAltText || badgeText} />
      <span>{badgeText}</span>
    </>
  )
}

function LinkedBadgeContent({ logoUrl, logoAltText, badgeText, badgeLinkUrl }){
  return (
    <a className="social-badge" href={badgeLinkUrl}>
      <BadgeContent 
        logoUrl = {logoUrl}
        logoAltText = {logoAltText}
        badgeText = {badgeText}
      />
    </a>
  )
}

export default function SocialBadge ({ badgeData }){
  return (
    <>
      {badgeData.badgeLinkUrl ? 
        <LinkedBadgeContent {...badgeData} /> :
        <BadgeContent {...badgeData} />
      }
    </>
  )
}