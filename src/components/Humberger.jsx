import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import styled from 'styled-components'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HambergerMenu>
      <button  onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <Menu>
          <a href="/" onClick={toggleMenu}>
              <HomeIcon style={{fontSize:'20px'}}/>
              Home
          </a>
          <a href="/About" onClick={toggleMenu}>
              <InfoIcon style={{fontSize:'20px'}}/>
              About
              </a>
          <a href="/Projects" onClick={toggleMenu}>
              <WorkIcon style={{fontSize:'18px'}}/>
              Projects
          </a>
          <a href="/Contact" onClick={toggleMenu}><ContactMailIcon style={{fontSize:'18px'}}/>Contact</a>
        </Menu>
      )}
    </HambergerMenu>
  );
};

export default HamburgerMenu;

const Menu=styled.div`
    position:absolute;
    width:90px;
    top:40px;
    left:30px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    
    
    a:nth-child(1){
      font-size:12px;
      
      svg{
        margin-left:-8px;
        color:#d6b20f;
      }
    }
    a:nth-child(2){
      font-size:12px;
      
      svg{
        margin-left:-8px;
        color:#4dda41;
      }
    }
    a:nth-child(3){
      font-size:12px;
      
      svg{
        margin-left:-4px;
        color:#1d78ce;
      }
    }
    a:nth-child(4){
      font-size:12px;
      
      svg{
        margin-left:-1px;
        color:#db23bd;
      }
    }

    a{  
        display:flex;
        align-items:center;
        justify-content:space-around;
        

        text-decoration: none;
        padding: 8px 12px;
        
    }
    a:hover{
        background-color: #33ffff;
        color:white;
        text-shadow:1px 1px 1px black;
    }
  
`
const HambergerMenu=styled.div`
  position:relative;
  button{
    font-size: 26px;
    background: none;
    border: none;
    cursor: pointer;
    padding-left:8px;
    color:white;
    text-shadow:1px 1px 1px black;
  }
`
