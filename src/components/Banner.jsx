//import '../styles/Banner.css'
import Block from './Block'
import { BannerStyle } from '../styles/BannerStyle.js'
import 'animate.css/animate.min.css'
import { randomAnimate } from '../assets/randomAnimate'

const Banner = ({ name, ocupation, technoloies, github, likedin, bground }) => {
  return (
    <>
      {console.log(bground)}
      <BannerStyle inputColor={bground[0]}>
        <div>
          <h2 className={`animate__animated ${randomAnimate()}`}>
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
        upColor={bground[0]}
        downColor={bground[1]}
        orientation={'to right bottom'}
      />
    </>
  )
}
export { Banner }
