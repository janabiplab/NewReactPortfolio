import React from 'react'
import styled from 'styled-components'
import Projects from './Projects'
import Footer from '../components/Footer'

function ProjectsWithNav() {
  return (
      <ProjectsNavContainer>
        <Projects/>
        <Footer/>
      </ProjectsNavContainer>
  )
}

export default ProjectsWithNav

const ProjectsNavContainer=styled.div`
  width:100%;
  height:100vh;
  overflow-y:auto;
  font-family: "Kanit", sans-serif;
  background-color: #091f36;
  
`