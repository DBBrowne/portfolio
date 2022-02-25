import { about } from '../content'

export default function About () {
  return (
    <div className="about-wrapper">
      <pre>Hi, my name is </pre>
      <h1>{about.firstName}</h1>
      <p dangerouslySetInnerHTML={{
        __html: about.intro,
      }}></p>
    </div>
  )
}