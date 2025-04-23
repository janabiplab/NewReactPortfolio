import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import DetailsIcon from '@mui/icons-material/Details';

function Project({project,setSelectedProject,Project_display}) {
  const openDetails=()=>{
    Project_display(true)
    setSelectedProject(project)
  }
  return (
     <ProjectContainer >
      <ProjectName>
         <p>{project.project_name}</p>
      </ProjectName> 
      <PImgDiv>
        <img src={project.Image}/>
      </PImgDiv>
      <LiveGitDiv>
        <Link to={project.url} target="_blank" style={{textDecoration:"none"}} >
         <Ldiv>
            Go to Live
         </Ldiv>
         </Link>
        <Link to={project.url} target="_blank" style={{textDecoration:"none"}} > 
        <GDiv>
           Go to Github
           <GitHubIcon/>
        </GDiv>
        </Link>
      </LiveGitDiv>
      <DetailDiv onClick={openDetails}>
      Details
      <DetailsIcon/>
       </DetailDiv>   
      
     </ProjectContainer>
  )
}

export default Project
const DetailDiv=styled.div`
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  
  background-color:#005555;
  font-family: "Kanit", sans-serif;
  margin-top:5px;
  text-shadow:2px 2px 2px black;
  cursor:pointer;
  svg{
    text-shadow:2px 2px 2px black;
  }
`
const GDiv=styled.div`
   display:flex;
   align-items:center;
   margin-right:20px;
   background-color:#1a1a1a;
   color:white;
   padding:3px;
   border-radius:2px;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   &:hover{
    background-color:#b30047;
   }
`
const Ldiv=styled.div`
 display:flex;
 align-items:center;
 margin-left:20px;
 background-color:#293d3d;
 color:white;
 padding:3px;
border-radius:2px;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   &:hover{
    background-color:#990000;
   }


`
const LiveGitDiv=styled.div`
   width:100%;
  
   height:35px;
   display:flex;
   align-items:center;
   justify-content:space-between;
   font-family: "Kanit", sans-serif;

`

const PImgDiv=styled.div`
    width:100%;
    min-height:230px;
    max-height:230x;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
      width:270px;
      min-height:210px;
      max-height:210px;
      border-radius:5px;
    }
`
const ProjectName=styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:10px;
  background-color:#005555;
  height:50px;
  
  p{
    text-shadow:2px 2px 2px  black;
    font-family: "Kanit", sans-serif;
  }

`
const ProjectContainer=styled.div`
 
  max-width:300px;
  min-width:300px;
  height:100%;
  background-color:#008080;
  margin-bottom:20px;


  
  

 

`

