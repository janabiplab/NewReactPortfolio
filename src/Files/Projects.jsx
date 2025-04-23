import React ,{useState} from 'react'
import styled from "styled-components"
import Project from '../components/Project'
import {Link} from 'react-router-dom'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';





import Bellavita from '../assets/All_Images/Bellavita.png'
import Calculator from '../assets/All_Images/Calculator.png'
import QuotesGreat from '../assets/All_Images/quotesGreat.png'
import QuotesLife from '../assets/All_Images/quotesLife.png'
import Skycast from '../assets/All_Images/Skycast.png'
import Slackclone from '../assets/All_Images/Slackclone.png'
import ownTask from  '../assets/All_Images/ownTask.png'
import  AichatImg from '../assets/All_Images/AichatImg.png'







function Projects({disableScroll}) {

  const [selectedProject,setSelectedProject]=useState(null)
  const [sideProjectDisplay,setSideProjectDisplay]=useState(false)
  const closeDetails=()=>{
    setSelectedProject(null)
    setSideProjectDisplay(false)
  }
  const projects=[
    {i:1,
      Image:AichatImg,
      project_name:"FriendFusion AI ChatBot",
      about_project:{
        text1:" AI-powered chatbot using the Google Gemini API and the MERN stack, where friends can work together on coding projects in real time.",
        text2:"This smart chatbot not only helps generate code using AI but also allows users to collaborate, chat, and co-create their ideas with ease",
                     
      },
      url:"https://aichatappfrontend.onrender.com/",
      github:"https://github.com/janabiplab/AiChatAppFrontend",
      skills:[
          "All_Images/HTML.png",
          "All_Images/css.png",
          "All_Images/Javascript.jpeg",
          "All_Images/MongoDB.png",
          "All_Images/ExpressJS.png",
          "All_Images/React.jpeg",
          "All_Images/nodeJS.png",
          "All_Images/gimini.png",
          "All_Images/Redis.png",
          "All_Images/SocketIo.png",
          "All_Images/MaterialUi.png",
          "All_Images/styledComponents.webp"
      ]
    },
    { id:2,
      Image:ownTask,
      project_name:"OwnTask",
      about_project:{text1:"OwnTask is a task management application built using React, Firebase, Styled Components, HTML, CSS, and JavaScript, offering robust Firebase authentication for secure access. Users can create, update, delete, and search tasks by title, ensuring seamless task management.",
                     text2:"The OwnTask app provides an intuitive interface for managing tasks, with features like task creation, updating, deletion, and title-based search. Developed with React and Firebase, it ensures secure user authentication and a responsive design using Styled Components."},
     
       url:"https://own-task.netlify.app/",
       github:"https://github.com/janabiplab/OwnTask",
       skills:[
        "All_Images/HTML.png",
        "All_Images/css.png",
        "All_Images/Javascript.jpeg",
        "All_Images/React.jpeg",
        "All_Images/Firebase.png",
         "All_Images/styledComponents.webp"
        
       ]
      },
    {id:3,
      Image:Skycast,
      project_name:"Weather App Sky Cast",
      about_project:{text1:"This Open Weather App allows users to enter a city name and instantly fetch the current weather conditions for that location.",
                     text2:"Using HTML, CSS,JavaScript,React it integrates with a weather API to provide accurate and real-time weather updates."},
     
       
    
     url:"https://splendid-centaur-8375ff.netlify.app/",
     github:"https://github.com/janabiplab/WeatherApp" ,
     skills:[
      "All_Images/HTML.png",
      "All_Images/css.png",
      "All_Images/Javascript.jpeg",
      "All_Images/React.jpeg",
      "All_Images/OpenWeather.jpeg"
     ]  
      }, 

    { id:4,
      Image:Bellavita,
      project_name:"Bellavita Clone App",
      about_project:{text1:"This project is a Bellavita clone app built using HTML, CSS, JavaScript, and React, replicating the design and functionality of the original website.",
                     text2:"It offers a seamless and responsive user interface, showcasing products and features in an elegant and interactive way."
      },
      url:"https://lighthearted-brigadeiros-b6813a.netlify.app/",
      github:"https://github.com/janabiplab/Bellavita_App_Clone",
      skills:[
        "All_Images/HTML.png",
        "All_Images/css.png",
        "All_Images/Javascript.jpeg",
        "All_Images/React.jpeg",
        "All_Images/styledComponents.webp"
       ]
      
     

    },
    { id:5,
      Image:Slackclone,
      project_name:"Slack Clone",
      about_project:{text1:"This SlackClone project replicates the core functionalities of Slack, utilizing Styled Components for design, Redux for state management, and Firebase for real-time database and authentication.",
                     text2:"It provides an interactive platform for creating channels, sending messages, and managing user activity seamlessly."
      },
      url:"https://slackclone-86da2.web.app/",
      github:"https://github.com/janabiplab/SlackClone",
      skills:[
        "All_Images/HTML.png",
        "All_Images/css.png",
        "All_Images/Javascript.jpeg",
        "All_Images/React.jpeg",
        "All_Images/styledComponents.webp",
        "All_Images/Firebase.png"
       ]

    
     
    },
    { id:6,
      Image:Calculator,
      project_name:"Calculator",
      about_project:{
        text1:"This project is a scientific calculator built using HTML, CSS, and JavaScript, supporting basic arithmetic as well as advanced mathematical operations like sine, cosine, tangent, and more.",
        text2:"It provides a user-friendly interface, making it easy to perform both simple and complex calculations efficiently."
      },
      url:"https://inquisitive-bavarois-d6e6d3.netlify.app/",
      github:"https://github.com/janabiplab/Calculator",
      skills:[
        "All_Images/HTML.png",
        "All_Images/css.png",
        "All_Images/Javascript.jpeg"
       ]
     
    }, 
    { id:7,
      Image:QuotesGreat,
      project_name:"Quotes Generator",
      about_project:{
        text1:"This project is a Quotes Generator built using HTML, CSS, and JavaScript that displays a inspirational quote at the click of a button.",
        text2:"It features a visually appealing interface, offering users a simple yet engaging way to explore motivational quotes."
      },
      
      url:"https://glittering-lamington-c86aa0.netlify.app/",
      github:"https://github.com/janabiplab/QuotesOfGreatPeople",
      skills:[
        "All_Images/HTML.png",
        "All_Images/css.png",
        "All_Images/Javascript.jpeg"
       ]
   
     
     
    }
  ]
  return (
    <>
    <ProjectsContainer disableScroll={disableScroll}>
    <ProjectsMainContainer >
    <ProjectText>
      <Text>
        Projects
      </Text>

    </ProjectText>
      
    <AllProjectContainer>
    {projects.map((project)=>(

      <Project key={project.id} project={project} setSelectedProject={setSelectedProject} Project_display={setSideProjectDisplay}/>
      
    ))}
    </AllProjectContainer>
    </ProjectsMainContainer>
    </ProjectsContainer>
    {sideProjectDisplay && (
      <SelectProjectContainer className={sideProjectDisplay? 'active' : ''}>
         <ProjectDetails>
            <h4>{selectedProject.project_name}</h4>
            <CloseIcon  onClick={closeDetails}/>
         </ProjectDetails>
         <InnerContainer>
           <ImageContainer>
            <img src={selectedProject.Image}/>
           </ImageContainer>
           <DetailsContainer>
              <p>About Project</p>
              <DetailsD>
                 <small>{selectedProject.about_project.text1}</small>
                 <br/>
                 <small>{selectedProject.about_project.text2}</small>
              </DetailsD>
              <p>Tech Stack</p>
              <TechDiv>
                {selectedProject.skills.map((tech)=>(
                  <img src={tech}/>
                ))}
              </TechDiv> 
              <ButtonDiv>
                <Link to={selectedProject.github} target="_blank" style={{textDecoration:'none'}}>
                <Gitdiv >
                  Go to github
                  <GitHubIcon/>
                </Gitdiv>
                </Link>
                <Link  to={selectedProject.url} target="_blank" style={{textDecoration:'none'}} >
                 <LiveDiv>
                   Go to Live
                   <img src="All_Images/live.png" />
                 </LiveDiv>
                </Link>
              </ButtonDiv>
           </DetailsContainer>
         </InnerContainer>
      </SelectProjectContainer>
    )}

    </>

   
    
  )
}



export default Projects

const LiveDiv=styled.div`
  display:flex;
  gap:3px;
  align-items:center;
  cursor:pointer;
  padding:5px;
  background-color:#3333ff;
  border-radius:2px;
  color:white;
  &:hover{
     background-color:#ff0066;
  }
  img{
    width:20px;
    height:20px;
  }
 
`
const Gitdiv=styled.div`
  display:flex;
  gap:3px;
  align-items:center;
  cursor:pointer;
  padding:5px;
  background-color:#206040;
  border-radius:2px;
  color:white;
  &:hover{
     background-color:#17422d;
  }
  @media screen and (max-width:400px){
    font-size:13px;
  }
`
const ButtonDiv=styled.div`

  width:100%;
  box-sizing:border-box;
  display:flex;
  gap:10px;
  align-items:center;
  width:auto;
  margin-top:10px;
`

const TechDiv=styled.div`
  width:100%;
  height:auto;
  /* background-color:#333333; */
  padding:10px;
  border-radius:3px;
  box-sizing:border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  
  img{
    width:50px;
    height:50px;
    border-radius:2px;
  }
  @media screen and (max-width:400px){
    img{
      width:40px;
      height:40px;
    }
  }
`
const DetailsD=styled.div`
  width:100%;
  height:auto;
  background-color:#333333;
  padding:5px;
  border-radius:3px;
  box-sizing:border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  small{
    font-size:15px;
    text-align:justify;
  }
  @media screen and (max-width:400px){
    small{
      font-size:13px;
    }
  }

`
const ProjectDetails=styled.div`
     width:100%;
     height:40px;
     display:flex;
     align-items:center;
     justify-content:space-between;
     padding:5px;
     background-color:#333333;
     h4{
      font-size:20px;
      text-align:center;
      text-shadow:2px 2px 2px black;
      
      margin-left:10px;
     }
     svg{
      color:white;
      margin-right:5px;
      cursor:pointer;
     }
     
`

const DetailsContainer=styled.div`
  flex:6;
  padding:5px;
  margin-left:10px;
  box-sizing:border-box;
  @media screen and (min-width:801px){
    overflow-y:auto;
    height:auto;
    margin-bottom:30px;
  }
   @media screen and (max-width: 800px) {
    margin-left:0;
    height:auto;
  
    margin-bottom:25px;
    /* max-height: 300px;  */
  }
 


  
 
`
const InnerContainer=styled.div`
  width:100%;
  height:100%;
  display:flex;
 
  overflow-x:hidden;
  margin-top:10px;
  box-sizing:border-box;
  @media screen and (min-width:800px){
    overflow-y:hidden;
  }
  @media screen and (max-width:800px){
    flex-direction:column;
    height:100%;
    overflow-y:auto;
   
  }
`
const ImageContainer=styled.div`
  flex:6;
  width:100%;
  box-sizing:border-box;
  img{
    width:100%;
    max-height:350px;
    min-height:350px;
    object-fit:cover;
    border:3px solid lightseagreen;
    border-radius:5px;
    box-sizing:border-box;
    
  }
   @media screen and (max-width: 800px) {
    margin-left:0;
    min-height:350px;
    max-height:350px;
   
  }
  

`



 

const SelectProjectContainer=styled.div`

  position: fixed;
  bottom: -500px; /* Start hidden below the screen */
  width: 100%;
  background-color:#0d0d0d;
  color: white;
 
  height: 500px;
  transition: bottom 0.4s ease;
  box-sizing:border-box;
  overflow:hidden;
  padding-bottom:40px;
 

  &.active {
    bottom: 0; /* Slide up into view */
  }
  
`
const AllProjectContainer=styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  height:390px;
  width:auto;
  overflow-y:hidden;
  overflow-x:auto;
  margin-top:20px;
 
 

  
`

const Text=styled.div`
 
 /* HTML: <div class="ribbon">Your text content</div> */

  font-size: 28px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;

  --s: 1.8em; /* the ribbon size */
  --d: .6em;  /* the depth */
  --c: .8em;  /* the cutout part */
  
  padding: 0 calc(var(--s) + 2*var(--d) + .5em) var(--d);
  line-height: 1.8;
  background: 
    linear-gradient(90deg,#0004 var(--d),#0000 0 calc(100% - var(--d)),#0004 0) 
     50% 0/calc(100% - 2*(var(--s) + var(--d))) calc(100% - var(--d)),
    conic-gradient(from 135deg at 50% -50%,#0004 25%,#0008 0)
     var(--s)              100%/calc(3*var(--d)) var(--d),
    conic-gradient(from 135deg at 50% -50%,#0004 25%,#0008 0)
     calc(100% - var(--s)) 100%/calc(3*var(--d)) var(--d);
  background-repeat: no-repeat;
  background-color: #da1c2b; /* the main color */
  clip-path: polygon(0 0,calc(var(--s) + var(--d)) 0,calc(var(--s) + var(--d)) var(--d),calc(var(--s) + 2*var(--d)) var(--d),calc(var(--s) + 2*var(--d)) 0,calc(100% - var(--s) - 2*var(--d)) 0,calc(100% - var(--s) - 2*var(--d)) var(--d),calc(100% - var(--s) - var(--d)) var(--d),calc(100% - var(--s) - var(--d)) 0,100% 0,calc(100% - var(--c)) calc(50% - var(--d)/2),100% calc(100% - var(--d)),calc(100% - var(--s)) calc(100% - var(--d)),calc(100% - var(--s)) 100%,calc(100% - var(--s) - 3*var(--d)) 100%,calc(100% - var(--s) - 3*var(--d)) calc(100% - var(--d)),calc(var(--s) + 3*var(--d)) calc(100% - var(--d)),calc(var(--s) + 3*var(--d)) 100%,var(--s) 100%,var(--s) calc(100% - var(--d)),0 calc(100% - var(--d)),var(--c) calc(50% - var(--d)/2));
  width: fit-content;

 
  @media screen and (max-width:1100px){
    font-size:23px;
  }
  @media screen and (max-width:900px){
    font-size:21px;
  }
  @media screen and (max-width:600px){
    font-size:19px;
  }
  @media screen and (max-width:350px){
    font-size:17px;
  }





`
const ProjectText=styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   margin-top:20px;

`
const ProjectsMainContainer=styled.div`
   
`

const ProjectsContainer=styled.div`
  width:100%;
  /* height: ${(props) => (props.disableScroll ? "auto" : "100vh")}; */
  background-color: #091f36;
  color:white;
  

  box-sizing:border-box;
 


`




