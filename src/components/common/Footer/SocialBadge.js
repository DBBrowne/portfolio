function BadgeContent({ logo, logoAltText, badgeText }){
  return (
    <>
      <img src={logo} alt={logoAltText || badgeText} />
      <span>{badgeText}</span>
    </>
  )
}

function NoLinkBadge({ logo, logoAltText, badgeText }){
  return (
    <div className="social-badge" >
      <BadgeContent 
        logo = {logo}
        logoAltText = {logoAltText}
        badgeText = {badgeText}
      />
    </div>
  )
}

function LinkedBadge({ logo, logoAltText, badgeText, badgeLinkUrl }){
  return (
    <a className="social-badge" href={badgeLinkUrl}>
      <BadgeContent 
        logo = {logo}
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
        <LinkedBadge {...badgeData} /> :
        <NoLinkBadge {...badgeData} />
      }
    </>
  )
}