import '../styles/JobDescriptionStyles.js'
import { JobDescriptionStyles } from '../styles/JobDescriptionStyles'
import Block from './Block'
import 'animate.css/animate.min.css'

const description = {
  titulo: 'About me',
  descripcion:
    'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.',
}

const backgroundDown = 'rgba(42, 50, 66, 1)'
const backgroundUp = 'rgb(76,82,150)'

const JobDescription = () => {
  const { titulo, descripcion } = description
  return (
    <>
      <JobDescriptionStyles bgColor={backgroundUp}>
        <div className="containerDescription">
          <div className="sideLeft">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="sideRight animate__animated animate__pulse animate__slow animate__infinite">
            <img
              src="https://us.123rf.com/450wm/naropano/naropano1606/naropano160600509/58727522-textura-de-fondo-oscuro-en-blanco-para-el-dise%C3%B1o-bordes-oscuros.jpg?ver=6"
              alt="Johnnie"
              width="200"
              height="200"
            />
          </div>
        </div>
      </JobDescriptionStyles>
      <Block
        upColor={backgroundUp}
        downColor={backgroundDown}
        orientation={'to left bottom'}
      />
    </>
  )
}
export { JobDescription }
