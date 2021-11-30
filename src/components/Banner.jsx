//import '../styles/Banner.css'
import Block from './Block'
import { BannerStyle } from '../styles/BannerStyle.js'
import 'animate.css/animate.min.css'

const personalInfo = {
  name: 'Johnnie',
  ocupation: 'Frontend Developer',
  github: 'https://github.com/Johnnie-LC',
  likedin: 'https://www.linkedin.com/in/johnnie-lopez-3343008/',
  technoloies: [
    'JavasCript',
    'React',
    'Redux',
    'webpack',
    'css',
    'sass',
    'bootstrap',
    'material UI',
  ],
}

const backgroundUp = 'rgba(42, 50, 66, 1)'
const backgroundDown = 'rgb(76,82,150)'

const Banner = () => {
  const { name, ocupation, technoloies, github, likedin } = personalInfo
  return (
    <>
      <BannerStyle inputColor={backgroundUp}>
        <div>
          <h2>
            Hi my name is{' '}
            <b className="animate__animated animate__pulse animate__slow animate__infinite">
              {name}
            </b>
          </h2>
          <p>{ocupation}</p>
          <p>
            <a href={github} title="Github" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href={likedin} title="LinkedIn" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </p>
          <h3>Technologies that I usually use</h3>
          <p>{technoloies.map((tech) => `- ${tech} `)}</p>
        </div>
      </BannerStyle>
      <Block
        upColor={backgroundUp}
        downColor={backgroundDown}
        orientation={'to right bottom'}
      />
    </>
  )
}
export { Banner }
