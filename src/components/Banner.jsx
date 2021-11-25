//import '../styles/Banner.css'
import Block from './Block'
import { BannerStyle } from '../styles/BannerStyle.js'

const personalInfo = {
  name: 'Johnnie',
  ocupation: 'Frontend Developer',
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
  const { name, ocupation, technoloies } = personalInfo
  return (
    <>
      <BannerStyle inputColor={backgroundUp}>
        <div>
          <h2>
            Hi my name is <b>{name}</b>
          </h2>
          <p>{ocupation}</p>
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
