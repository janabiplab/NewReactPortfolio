import React from 'react'
import styled from "styled-components"

function Techstack() {
  return (
    <>
      <TechStackDiv>
          <LanguageDiv>
            <p> Languages</p>
            <LInnerDiv>
               
                <CommonDiv>
                <img src="All_Images/Python.jpeg" />
                Python
                </CommonDiv>
                <CommonDiv>
                <img src="All_Images/Javascript.jpeg" />
                Javascript
                </CommonDiv>
            </LInnerDiv>
          </LanguageDiv>
          <FrontendDiv>
            <p>Frontend</p>
            <div style={{display:'flex'  ,alignItems:'center', justifyContent:'space-evenly'}}>
            <  CommonDiv>
                <img src="All_Images/HTML.png" />
                Html
                </CommonDiv>
                <CommonDiv>
                <img src="All_Images/css.png" />
                Css
                </CommonDiv> 
            </div> 
            <div style={{display:'flex' ,alignItems:'center', justifyContent:'space-evenly',marginTop:'20px'}}>   
                <CommonDiv>
                <img src="All_Images/Javascript.jpeg" />
                Javascript
                </CommonDiv> 
                <CommonDiv>
                <img src="All_Images/React.jpeg" />
                 React
                </CommonDiv>  
            </div>

          </FrontendDiv>
          <BackendDiv>
            <p>Backend</p>
             <div style={{display:'flex'  ,alignItems:'center', justifyContent:'space-evenly',marginTop:'20px'}}>   
                <CommonDiv>
                <img src="All_Images/Django.png" />
                Django
                </CommonDiv> 
                <CommonDiv>
                <img src="All_Images/nodeJS.png" />
                 Node.Js
                </CommonDiv>  
                <CommonDiv>
                <img src="All_Images/ExpressJS.png" />
                 Express.Js
                </CommonDiv>  
            </div>
          </BackendDiv>
          <DatabaseDiv>
            <p>Database</p>
            <div style={{display:'flex'  ,alignItems:'center', justifyContent:'space-evenly',marginTop:'20px'}}>   
                <CommonDiv>
                <img src="All_Images/MongoDB.png" />
                  MongoDB
                </CommonDiv> 
                <CommonDiv>
                <img src="All_Images/MySQL.png" />
                 MySQL
                </CommonDiv>  
                 
            </div>
          </DatabaseDiv>
          <DsaDiv>
            <p>Proficiencies</p>
            <div style={{display:'flex'  ,alignItems:'center', justifyContent:"center"}}>   
                <CommonDiv>
                <img src="All_Images/DSA.png" />
                  DSA
                </CommonDiv> 
                 
                 
            </div>
          </DsaDiv>

    </TechStackDiv>
    </>
    
  )
}

export default Techstack

const DsaDiv=styled.div`
  min-width:270px;
  max-width:270px;
  height:100%;
  background-color:#476b6b;
  p{
    font-size:20px;
    text-align:center;
    text-shadow:2px 2px 2px black;
  }
`
const DatabaseDiv=styled.div`
  min-width:270px;
  max-width:270px;
  height:100%;
  background-color:#660066;
  p{
    font-size:20px;
    text-align:center;
    text-shadow:2px 2px 2px black;
  }
`
const BackendDiv=styled.div`
  min-width:270px;
  max-width:270px;
  height:100%;
  background-color:#005266;
  p{
    font-size:20px;
    text-align:center;
    text-shadow:2px 2px 2px black;
  }
`
const FrontendDiv=styled.div`
  min-width:270px;
  max-width:270px;
  height:100%;
  background-color:#3d5c5c;
  p{
    font-size:20px;
    text-align:center;
    text-shadow:2px 2px 2px black;
  }
`
const CommonDiv=styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   gap:3px;
   img{
    width:50px;
    height:50px;
    border-radius:2px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   }
`
const LInnerDiv=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-direction:column;
  gap:5px;
`
const LanguageDiv=styled.div`
  min-width:270px;
  max-width:270px;
  height:100%;
  background-color:#99004d;
  p{
    font-size:20px;
    text-align:center;
    text-shadow:2px 2px 2px black;
  }
`
const TechStackDiv=styled.div`
 
  display:flex;
  gap:2px;
  align-items:center;
  width:auto;
  overflow-x:auto;
  margin-top:20px;
  height:280px;
  
  background-color:rgb(21, 50, 83);
  font-family: "Kanit", sans-serif;
  margin-left:-20px;
  margin-right:-20px;
  color:white;
  
`
