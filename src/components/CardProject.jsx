import { CardProjectStyle } from '../styles/CardProjectStyle.js'

const CardProject = ({ title, description }) => {
  return (
    <CardProjectStyle>
      <img src="#" alt="proyect" />
      <div className="cardInfo">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>see</button>
      </div>
    </CardProjectStyle>
  )
}

export default CardProject
