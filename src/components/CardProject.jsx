import { CardProjectStyle } from '../styles/CardProjectStyle.js'

const CardProject = ({
  title,
  description,
  technologiesList,
  github,
  deploy,
}) => {
  return (
    <CardProjectStyle>
      <img
        src="https://us.123rf.com/450wm/naropano/naropano1606/naropano160600509/58727522-textura-de-fondo-oscuro-en-blanco-para-el-dise%C3%B1o-bordes-oscuros.jpg?ver=6"
        alt="proyect"
      />
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
