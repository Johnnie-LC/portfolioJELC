import { Header } from './Header'
import { Menu } from './Menu'
import { Banner } from './Banner'
import { JobDescription } from './JobDescription'
import { ProjectsContainer } from './ProjectsContainer'
import { Footer } from './Footer'
import { data } from '../data/data'

import React, { useState } from 'react'

//const backgroundUpDown = ['rgba(42, 50, 66, 1)', 'rgb(76,82,150)']
const backgroundUpDown = ['rgba(42, 50, 66, 1)', '#006ea7']
//const backgroundUpDown = ['#002b3d', '#007990']

const App = () => {
  const [scrollY, setScrollY] = useState(null)

  const handleScroll = (e) => {
    // console.log(e.target.scrollTop)
    // if (e.target.scrollTop > window.screen.width / 3) {
    //   setScrollY(e.target.scrollTop)
    // }
    // setScrollY(e.target.scrollTop)
  }

  return (
    <div onScroll={handleScroll} style={{ height: '100vh', overflowY: 'auto' }}>
      {/* <Header name="JELC" bground={backgroundUpDown} /> */}
      {/* <Menu /> */}
      <Banner {...data.personalInfo} bground={backgroundUpDown} />
      <JobDescription {...data.description} bground={backgroundUpDown} />
      <ProjectsContainer {...data.proyectsContent} bground={backgroundUpDown} />
      <Footer {...data.contactMe} bground={backgroundUpDown} />
    </div>
  )
}

export { App }
