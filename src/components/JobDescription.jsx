import '../styles/JobDescriptionStyles.js'
import { JobDescriptionStyles } from '../styles/JobDescriptionStyles'
import Block from './Block'
import 'animate.css/animate.min.css'
import user from '../assets/img/user.png'

const JobDescription = ({ titulo, descripcion, bground }) => {
  return (
    <>
      <JobDescriptionStyles bgColor={bground[1]} id="About me">
        <div className="containerDescription">
          <div className="sideLeft">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="sideRight animate__animated animate__pulse animate__slow animate__infinite">
            <img src={user} alt="Johnnie" />
          </div>
        </div>
      </JobDescriptionStyles>
      <Block
        upColor={bground[1]}
        downColor={bground[0]}
        orientation={'to left bottom'}
      />
    </>
  )
}
export { JobDescription }
