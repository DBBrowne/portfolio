function BadgeContent({ logoUrl, logoAltText, badgeText }){
  return (
    <>
      <img src={logoUrl} alt={logoAltText || badgeText} />
      <span>{badgeText}</span>
    </>
  )
}

function NoLinkBadge({ logoUrl, logoAltText, badgeText}){
  return (
    <div className="social-badge" >
      <BadgeContent 
        logoUrl = {logoUrl}
        logoAltText = {logoAltText}
        badgeText = {badgeText}
      />
    </div>
  )
}

function LinkedBadge({ logoUrl, logoAltText, badgeText, badgeLinkUrl }){
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
  console.log(badgeData)
  return (
    <>
      {badgeData.badgeLinkUrl ? 
        <LinkedBadge {...badgeData} /> :
        <NoLinkBadge {...badgeData} />
      }
    </>
  )
}