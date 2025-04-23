import React from 'react'
import styled from 'styled-components'
import WhatsApp from "../assets/All_Images/WhatsApp.jpeg"
import Email from "../assets/All_Images/Email.png"
import Resume from "../assets/All_Images/resume.pdf"
import resumeImage from "../assets/All_Images/resume.png"
import {Link} from 'react-router-dom'

import Footer from "../components/Footer"
function Contact() {
  return (
    <ContactMainContainer>
    <ContactContainer>
       <p>Contact</p>
       <ContactInfo>
         <small>Contact me by Phone <span>6295474411</span></small>
       </ContactInfo>
       <p>LinkedIn</p>
       <LinkedInInfo>
       <LinkInfo to="https://www.linkedin.com/in/biplab-jana-9025782a3/" target="_blank">
         <small> Follow me on LinkedIn</small>
         <img src="All_Images/LinkedIn.png"/>
         </LinkInfo> 
       </LinkedInInfo>
    </ContactContainer>
    <Footer/>
    </ContactMainContainer>
    
  )
}

export default Contact
const LinkInfo=styled(Link)`
   display:flex;
   gap:10px;
   align-items:center;
   justify-content:center;
   text-decoration:none;
   margin-top:4px;
  
  
`
const LinkedInInfo=styled.div`
   width:280px;
   height:40px;
   background-color:white;
   padding:10px;
  
   
   border-radius:2px;
   img{
     width:30px;
     height:30px;
   }
   small{
    font-weight:400;
    font-size:15px;
   }
`

const ContactInfo=styled.div`
  width:280px;
  background-color:#800335;
  padding:10px;
  margin-bottom:20px;
  border-radius:2px;
  display:flex;
  align-items:center;
  justify-content:center;
  small{
    font-size:16px;
    color:white;
  }
  span{
    color:tomato;
    background-color:black;
    padding:3px;
  }
`

const ContactContainer=styled.div`

  width:100%;
  height:auto;
  padding:10px;
  font-family: "Kanit", sans-serif;
  box-sizing:border-box;
  
  p{
    font-size:20px;
    color:white;
  }


 


`

const ContactMainContainer=styled.div`
  width:100%;
  height:100vh;
  box-sizing:border-box;
  overflow-y:auto;
  background-color: #091f36;
`