import React from 'react'
import styled,{createGlobalStyle} from "styled-components"
import {Link} from "react-router-dom"
import Resume from "../assets/All_Images/Resume.pdf"
import Footer from '../components/Footer'
import ResumeImg from "../assets/All_Images/resume.png"



function About() {
   
 
  return (
    <AboutMainContainer>
    <GlobalStyle/>
    <AboutContainer>
      <AboutMe>
        <Content>
          <p>I am a software developer passionate about building innovative and efficient solutions.
          I specialize in designing, developing, and optimizing software applications to meet user needs.
          I have a strong understanding of <span>data structures and algorithms</span>.I thoroughly enjoy solving problems and tackling challenges.
          </p>
          
        </Content>
      </AboutMe>
     

      <ResumeDiv>
        <ResumeInner>
          <ResumeLink to={Resume} target="_blank" download>
            My Resume 
            <img src={ResumeImg}/>
          </ResumeLink>
        </ResumeInner>
      </ResumeDiv>
      <hr/>
      <EngDiv>
          <img src="All_Images/software.jpg"/>
      </EngDiv>

      <InterestDiv>
        <p> Interest</p>
        <ul>
          <li>   I love reading detective books .</li>
          <li> Watching sports</li>
          <li> I love growing flowers as it brings beauty and tranquility
          to my surroundings.</li>
          <li>I enjoy listening to both Indian classical and Western
          music</li>
          
        </ul>
        
        
        
      </InterestDiv>

    </AboutContainer>
    <Footer/>
    
  </AboutMainContainer>
  )
}

export default About
const ResumeLink=styled(Link)`
    text-decoration:none;
    display:flex;
   align-items:center;
   font-size:18px;
   font-weight:400;
   color:white;
   gap:15px;
   text-shadow:2px 2px 2px black
  
`
const ResumeInner=styled.div`
   min-width:280px;
   height:100%;
   background-color:tomato;
   img{
    width:40px;
    height:40px;
   }
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:5px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   
  
`
const ResumeDiv=styled.div`
  width:100%;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;
  box-sizing:border-box;
  margin-bottom:50px;
  
`

const InterestDiv=styled.div`
   width:100%;
   height:auto;
   background-color:#293d3d;
   padding:10px;
   box-sizing:border-box;
   p{
    text-align:center;
    font-size:20px;
    text-shadow:2px 2px 2px black;
    
   }
  
`
const EngDiv=styled.div`
  width:100%;
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:50px;
  margin-bottom:50px;
  img{
    width:500px;
    height:100%;
    border-radius:5px;
  }
  @media screen and (max-width:500px){
    height:300px;
    img{
      width:300px;
    }
  }
`

const Content=styled.div`

padding:10px;
background-color: #03182c;
color:white;
text-align: justify;

font-size:20px;
width:80%;


span{
  background-color:yellow;
  color:black;
}
@media screen and (max-width:550px){
  font-size:18px;
}
@media screen and (max-width:350px){
  font-size:14px;
}



  
`
const SkillTextDiv=styled.div`
 
  display:flex;
  align-items:center;
  justify-content:center;
  h4{
  text-align:center;
  padding:3px;
  background-color:#0c3550;
  font-size:30px;
  color:whitesmoke;
  text-shadow:2px 2px 2px  black;
  border-radius:4px;
  width:200px;


 }
 @media screen and (max-width:350px){
  h4{
    font-size:27px;
  }
 }
   
`
const SkillsText=styled.div`

     
`
const AboutMe=styled.div`
 display:flex;
 align-items:center;
justify-content:center;
margin-top:20px;






`
const AboutContainer=styled.div`
 width:100%;
 padding:2px;
 box-sizing:border-box;

 background-color: #091f36;
 color:white;
 font-family: "Kanit", sans-serif;


`
const AboutMainContainer=styled.div`
   width:100%;
   height:100vh;
   overflow-y:auto;
`
const GlobalStyle=createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  };

`