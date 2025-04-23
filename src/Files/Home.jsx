import React from 'react'
import styled from "styled-components"
import User from '../components/User'
import Demo from '../components/Demo'
import Projects from '../Files/Projects'
import Footer from '../components/Footer'
import Techstack from '../components/Techstack'
function Home() {

  return (
    <HomeContainer>
      <HomeDiv>
      <User/>
      <Demo/>
      <Projects />
      <ExpertTextDiv>
       <EPDiv>
       <p>Dev Gear </p>
       </EPDiv>
      </ExpertTextDiv>
      <Techstack/>
      <Footer/>
      </HomeDiv> 
      
     
      

        
    </HomeContainer>
  )
}

export default Home
const EPDiv=styled.div`
  
   width:40%;
   height:100%;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color:#293d3d;
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
   p{
      font-size:23px;
      text-shadow:2px 2px 2px black;
   }
`
const ExpertTextDiv=styled.div`
  margin-top:10px;
  box-sizing:border-box;
  width:100%;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family: "Kanit", sans-serif;
  color:white;
  margin-top:30px;
`
const HomeDiv=styled.div`
    margin-bottom:10px;
`
const HomeContainer=styled.div`
  width:100%;
  height:100vh;
  box-sizing:border-box;
  background-color: #091f36;
  overflow-y:auto;
 
`

