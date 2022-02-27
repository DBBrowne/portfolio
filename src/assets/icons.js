import { ReactComponent as CaseStudy } from './docsIcon.svg'
import { ReactComponent as Github } from './githubIcon.svg'
import { ReactComponent as LinkOut } from './link-out-svgrepo-com.svg'
import { ReactComponent as Email } from './iconmonstr-gmail-1.svg'
import { ReactComponent as LinkedIn } from './Font_Awesome_5_brands_linkedin.svg'

function IconCaseStudy (options){
  return (
    <CaseStudy {...options} />
  )
}
function IconGithub (options){
  return (
    <Github {...options} />
  )
}
function IconLinkOut (options){
  return (
    <LinkOut {...options} />
  )
}
function IconEmail (options){
  return (
    <Email {...options} />
  )
}
function IconLinkedIn (options){
  return (
    <LinkedIn {...options} />
  )
}

export const icons = {
  caseStudy: IconCaseStudy,
  github: IconGithub,
  linkOut: IconLinkOut,
  deploy: IconLinkOut,
  email: IconEmail,
  linkedin: IconLinkedIn,
}