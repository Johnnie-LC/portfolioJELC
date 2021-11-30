import { Header } from './Header'
import { Menu } from './Menu'
import { Banner } from './Banner'
import { JobDescription } from './JobDescription'
import { ProjectsContainer } from './ProjectsContainer'
import { Footer } from './Footer'
import { data } from '../data/data'

//const backgroundUpDown = ['rgba(42, 50, 66, 1)', 'rgb(76,82,150)']
const backgroundUpDown = ['rgba(42, 50, 66, 1)', '#006ea7']
//const backgroundUpDown = ['#002b3d', '#007990']

const App = () => (
  <>
    <Header name="Johnnie" />
    <Menu />
    <Banner {...data.personalInfo} bground={backgroundUpDown} />
    <JobDescription {...data.description} bground={backgroundUpDown} />
    <ProjectsContainer {...data.proyectsContent} bground={backgroundUpDown} />
    <Footer {...data.contactMe} bground={backgroundUpDown} />
  </>
)

export { App }
