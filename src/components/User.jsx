import React from 'react'
import styled from "styled-components"
import Engineer from "../assets/Image/myImage.jpg"

function User() {
  return (
    <UserContainer>
        <ImageContainer>
           <img src={Engineer}/>
        </ImageContainer>
        <DetailsContainer>
           <Details>
                <p> Hi! I'm <span>Biplab Jana </span>, a passionate Full-Stack Developer with expertise in
                    modern web technologies like React, Node.js, and MongoDB. I enjoy
                    building scalable applications and creating seamless user experiences.</p>
           </Details>
        </DetailsContainer>
    </UserContainer>

  )
}

export default User
const Details=styled.div`
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   background-color:#0049B7;
   text-align: justify;
   padding:8px;
   border-radius:5px;
   color:white;
   p{
    font-size:20px;
    font-weight: 300;
   
   }
   span{
    color:yellow;
   }
   @media screen and (max-width:950px){
   
   p{
    font-size:19px;
   }
 }
   @media screen and (max-width:600px){
   
   p{
    font-size:17px;
   }
 }
   @media screen and (max-width:400px){
    width:220px;
     p{
      font-size:15px;
     }
   }
   
`

const DetailsContainer=styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  width:520px;
  @media screen and (max-width:950px){
      width:480px;
      margin-left:6px;
  }
  @media screen and (max-width:600px){
      width:350px;
      margin-left:6px;
  }
  @media screen and (max-width:400px){
      width:230px;
  }


`
const ImageContainer=styled.div`
 
 
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:10px;
  

  img{
      width:300px;
      height:300px;
      border-radius:50%;
      border:4px solid yellowgreen;
     
     
  }
  @media screen and (max-width:950px){
   
   margin-bottom:20px;
   img{
     width:250px;
     height:250px;
     border-radius:50%;
     border:4px solid yellowgreen;
     
   }
 }
  @media screen and (max-width:600px){
   
    margin-bottom:20px;
    img{
      width:210px;
      height:210px;
      border-radius:50%;
      border:4px solid yellowgreen;
      
    }
  }
  @media screen and (max-width:400px){
  
   
    
    margin-bottom:20px;
    img{
      width:210px;
      height:210px;
      border-radius:50%;
      border:4px solid yellowgreen;
      
    }
  }
    
`
const UserContainer=styled.div`
 width:100%;
 height:auto;
 box-sizing:border-box;
 display:flex;
 justify-content:space-evenly;
 flex-wrap:wrap;
 padding:5px;


 


    
`