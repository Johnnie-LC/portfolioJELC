import { Header } from './Header'
import { Menu } from './Menu'
import { Banner } from './Banner'
import { JobDescription } from './JobDescription'
import { ProjectsContainer } from './ProjectsContainer'
import { Footer } from './Footer'

const App = () => (
  <>
    <Header name="Johnnie" />
    <Menu />
    <Banner />
    <JobDescription />
    <ProjectsContainer />
    <Footer />
  </>
)

export { App }
