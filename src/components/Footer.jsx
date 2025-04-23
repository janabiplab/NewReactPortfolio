import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';

import Resume from "../assets/All_Images/Resume.pdf"
import ResumeImage from "../assets/All_Images/resume.png"
import LinkedIn from '../assets/All_Images/LinkedIn.png'
import Email from "../assets/All_Images/Email.png"


function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
      <hr/>
    <FooterMainContainer>
      
     <DownloadResume>
      <LinkedResume to={Resume} target="_blank" download>
      <img src={ResumeImage} />  
       <p>My Resume</p>    
      </LinkedResume>
     </DownloadResume>
     <ContactContainer>
        <p>Contact Me by Phone <span>6295474411</span></p>
        
     </ContactContainer>
     <EmailContainer>
        <img src={Email}/>
        <p>biplabjana.jana@gmail.com</p>

     </EmailContainer>
     <ProjectContainer>
       <a href="/Projects">
        <WorkIcon/>
       </a>

     </ProjectContainer>
     <InfoContainer>
      <a href="/About">
        <InfoIcon/>
      </a>
     </InfoContainer>

     <HomeAboutContainer>
      <a href="/">
        <HomeIcon/>
      </a>

     </HomeAboutContainer>
    </FooterMainContainer>
    <h5>© 2025 Biplab Jana. All Rights Reserved.</h5>
    </InnerContainer>

    </FooterContainer>
  )
}

export default Footer




const HomeAboutContainer=styled.div`

 grid-column:8/10;
 grid-row:2/-1;
 display:flex;
align-items:center;
justify-content:center;
background-color:#293d3d;
border-radius:3px;
&:hover{
      border:.6px solid black;
      background-color:#476b6b;
    }
svg{
  width:50px;
  height:50px;
  color:white;
}
@media screen and (max-width:570px){
    grid-column:8/11;
    grid-row:3/-1;
  
  }
  @media screen and (max-width:350px){
    grid-column:9/13;
    grid-row:4/-1;
  
  }

`
const InfoContainer=styled.div`
 grid-column:6/8;
 grid-row:2/-1;
 display:flex;
align-items:center;
justify-content:center;
background-color:#293d3d;
border-radius:3px;
&:hover{
      border:.6px solid black;
      background-color:#476b6b;
    }
svg{
  width:50px;
  height:50px;
  color:white;
}
@media screen and (max-width:570px){
    grid-column:5/8;
    grid-row:3/-1;
  
  }
  @media screen and (max-width:350px){
    grid-column:5/9;
    grid-row:4/-1;
   
  }

` 
const ProjectContainer=styled.div`
grid-column:4/6;
grid-row:2/-1;
display:flex;
align-items:center;
justify-content:center;
background-color:#293d3d;
border-radius:3px;
&:hover{
      border:1px solid black;
      background-color:#476b6b;
    }
svg{
  width:50px;
  height:50px;
  color:white;
}
@media screen and (max-width:570px){
    grid-column:2/5;
    grid-row:3/4;
    svg{
      color:#c230a9;
    }
   
  }
  @media screen and (max-width:350px){
    grid-column:1/5;
    grid-row:4/-1;
    svg{
      /* color:#c230a9; */
    }
   
  }


`

const EmailContainer=styled.div`

grid-column:8/-1;
grid-row:1/2;
display:flex;
align-items:center;
justify-content:center;
color:white;
background-color:#293d3d;
border-radius:3px;
&:hover{
      border:.6px solid black;
      background-color:#476b6b;
    }
img{
  width:50px;
  height:50px;
}
p{
  
  margin-left:20px;
}
@media screen and (max-width:570px){
    grid-column:1/-1;
    grid-row:2/3;
  
  }
  @media screen and (max-width:350px){
    grid-column:1/-1;
    grid-row:3/4;
   
  }

`

const ContactContainer=styled.div`
    
    grid-column:4/8;
    grid-row:1/2;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    color:white;
    background-color:#293d3d;
    &:hover{
      border:.6px solid black;
      background-color:#476b6b;
  
    }

   img{
    width:50px;
    height:50px;
   }
   p{
    margin-right:20px;
    
   }
   span{
    color:tomato;
    font-weight:bold;
   }
   @media screen and (max-width:570px){
    grid-column:6/-1;
    grid-row:1/2;
    
  }
  @media screen and (max-width:350px){
    grid-column:1/-1;
    grid-row:2/3;
    
  }
    
   

   
`
const LinkedResume=styled(Link)`
   
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;

  text-decoration:none;
 img{
  width:50px;
  height:50px;
 }
 p{
  font-size:15px;
  color:white;
  
 }
`
const DownloadResume=styled.div`
 
  grid-column:1/4;
  grid-row:1/2;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  background-color:#293d3d;
  border-radius:3px;
  
  &:hover{
      border:.6px solid black;
      background-color:#476b6b;
  }
  @media screen and (max-width:570px){
    grid-column:1/6;
    grid-row:1/2;
  
  }
  @media screen and (max-width:350px){
    grid-column:1/-1;
    grid-row:1/2;
   
  }

  
`
const FooterMainContainer=styled.div`
 display:grid;
 grid-gap:3px;
 padding:20px;
 grid-template-columns:repeat(12,1fr);
 grid-template-rows:100px 100px;
 color:white;
  svg{
    width:40px;
    height:40px;
    
  }

 @media screen and (max-width:800px){
     img{
      width:30px;
      height:30px;
     }
     p{
      font-size:12px;
     }
     svg{
      width:30px;
      height:30px;
      
     }
    
   }
   @media screen and (max-width:570px){
    grid-template-columns:repeat(12,1fr);
    grid-template-rows:80px 80px 80px ;
   
  }
  @media screen and (max-width:350px){
    grid-template-columns:repeat(12,1fr);
    grid-template-rows:80px 80px 80px 80px;
   
  }


`
const InnerContainer=styled.div`
 margin-bottom:15px;
`

const FooterContainer=styled.div`
 box-sizing:border-box;
 width:100%;
 heigh:auto;
 padding:6px;
 background-color:#1f2e2e;
 color:white;
 hr{
  text-align:center;
  width:80%;
 }
 h5{
  text-align:center;
  color:#696565;
  font-size:12px;
 }
 @media screen and (max-width:1000px){
  h5{
    font-size:15px;
  }
 }
 @media screen and (max-width:600px){
  h5{
    font-size:11px;
  }
 }
 @media screen and (max-width:400px){
  h5{
    font-size:8px;
  }
 }


`