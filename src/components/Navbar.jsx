import React ,{useState,useEffect}from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';


import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Humberger from "./Humberger";
import {Link} from 'react-router-dom'



function Navbar() {
  
  return (
    <NavbarContainer>
        <HambergerContainer>
          <Humberger/>
        </HambergerContainer>
        <Logo>Biplab<Span>Jana</Span></Logo>

        <NavbarMainContainer>
          <StyledLink to="/">
             <HomeIcon/>
             <p>Home</p>
          </StyledLink>
          <StyledLink to="/About">
             <InfoIcon/>
             <p>About</p>
          </StyledLink>
          <StyledLink to="/Projects">
             <WorkIcon/>
             <p>Projects</p>
          </StyledLink>
          <StyledLink to="/Contact">
             <ContactMailIcon/>
             <p>Contact</p>
          </StyledLink>
           
             
        </NavbarMainContainer>

    
       
    <hr/>
    </NavbarContainer>
  )
}

export default Navbar
const HambergerContainer=styled.div`
   color:white;
   @media screen and (min-width:830px){

    display:none;
    
   }
`
const StyledLink=styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
    color:white;
    
    svg{
      font-size:24px;
    }
    p{
      font-size:15px;
      margin-left:.2rem;
      text-shadow:1px 1px black;
    }
    &:hover{
      color:#99ccff;
    }
    @media screen and (max-width:600px){
      p{
         display:none;
      }
      svg{
        font-size:20px;
      }
      
    }

    @media screen and (max-width:300px){
      svg{
        font-size:18px;
      }
    }
`

const NavbarMainContainer=styled.div`
   display:flex;
   flex:6;
   align-items:center;
   justify-content:space-evenly;
   @media screen and (max-width:830px){

       display:none;

   }
`
const Span=styled.span`
   margin-left:0px;
   font-size:25px;
   color:#0049B7;
   margin-top:30px;
`

const Logo=styled.p`
  
    flex:6;
    text-align:center;
    text-shadow:2px 2px black;
    font-size:18px;
    @media screen and (max-width:300px){
      
      font-size:15px;
    }
    
`
const NavbarContainer=styled.div`
    display:flex;
    width:100vw;
    height:2rem;
    background-color: #021931;
    color:white;
    align-items:center;
    padding:.3rem;
    justify-content:space-evenly;
`