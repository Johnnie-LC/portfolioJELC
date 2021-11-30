import { CardProjectStyle } from '../styles/CardProjectStyle.js'
import bacgroundImage from '../assets/img/texturaFondoOscuro.png'

const CardProject = ({
  title,
  description,
  technologiesList,
  github,
  deploy,
}) => {
  return (
    <CardProjectStyle>
      <img src={bacgroundImage} alt="proyect" />
      <div className="cardInfo">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {technologiesList.map((tecn, ind) => (
            <li key={ind}>{tecn}</li>
          ))}
        </ul>
        <a
          className="githubButton"
          title="Github"
          href={github}
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="deployButton"
          title="Deploy"
          href={deploy}
          target="_blank"
        >
          <i className="fas fa-rocket"></i>
        </a>
      </div>
    </CardProjectStyle>
  )
}

export default CardProject
