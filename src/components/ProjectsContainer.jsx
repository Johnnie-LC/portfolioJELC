import { ProyectsStyle } from '../styles/ProyectsStyle.js'
import CardProject from './CardProject'
import Block from './Block'

const proyectsContent = {
  title: 'Projects',
  description:
    'Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.',
  projects: [
    {
      title: 'SED FEUGIAT LOREM',
      id: 1,
      url: 'www.google.com',
      github: 'https://github.com/Johnnie-LC',
      deploy: 'https://johnnie-lc.github.io/Movies/',
      src: 'https://us.123rf.com/450wm/naropano/naropano1606/naropano160600509/58727522-textura-de-fondo-oscuro-en-blanco-para-el-dise%C3%B1o-bordes-oscuros.jpg?ver=6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
      technologiesList: [
        'JavaScript',
        'Redux',
        'Sass',
        'styled-component',
        'webpack',
      ],
    },
    {
      title: 'SED FEUGIAT LOREM',
      id: 2,
      url: 'www.google.com',
      github: 'https://github.com/Johnnie-LC',
      deploy: 'https://johnnie-lc.github.io/Movies/',
      src: 'https://us.123rf.com/450wm/naropano/naropano1606/naropano160600509/58727522-textura-de-fondo-oscuro-en-blanco-para-el-dise%C3%B1o-bordes-oscuros.jpg?ver=6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
      technologiesList: [
        'JavaScript',
        'Redux',
        'Sass',
        'styled-component',
        'webpack',
      ],
    },
    {
      title: 'SED FEUGIAT LOREM',
      id: 3,
      url: 'www.google.com',
      github: 'https://github.com/Johnnie-LC',
      deploy: 'https://johnnie-lc.github.io/Movies/',
      src: 'https://us.123rf.com/450wm/naropano/naropano1606/naropano160600509/58727522-textura-de-fondo-oscuro-en-blanco-para-el-dise%C3%B1o-bordes-oscuros.jpg?ver=6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
      technologiesList: [
        'JavaScript',
        'Redux',
        'Sass',
        'styled-component',
        'webpack',
      ],
    },
    {
      title: 'SED FEUGIAT LOREM',
      id: 4,
      url: 'www.google.com',
      github: 'https://github.com/Johnnie-LC',
      deploy: 'https://johnnie-lc.github.io/Movies/',
      src: 'https://us.123rf.com/450wm/naropano/naropano1606/naropano160600509/58727522-textura-de-fondo-oscuro-en-blanco-para-el-dise%C3%B1o-bordes-oscuros.jpg?ver=6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
      technologiesList: [
        'JavaScript',
        'Redux',
        'Sass',
        'styled-component',
        'webpack',
      ],
    },
  ],
}
const backgroundUp = 'rgba(42, 50, 66, 1)'
const backgroundDown = 'rgb(76,82,150)'

const ProjectsContainer = () => {
  const { title, description, projects } = proyectsContent
  return (
    <>
      <ProyectsStyle>
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
        upColor={backgroundUp}
        downColor={backgroundDown}
        orientation={'to right bottom'}
      />
    </>
  )
}

export { ProjectsContainer }
