import { ProyectsStyle } from '../styles/ProyectsStyle.js'
import CardProject from './CardProject'
import Block from './Block'

const ProjectsContainer = ({ title, description, projects, bground }) => {
  return (
    <>
      <ProyectsStyle inputColor={bground[0]}>
        <div className="containerProjects">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="containerProject">
            {projects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))}
          </div>
        </div>
      </ProyectsStyle>
      <Block
        upColor={bground[0]}
        downColor={bground[1]}
        orientation={'to right bottom'}
      />
    </>
  )
}

export { ProjectsContainer }
