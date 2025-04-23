import React from "react";
import styled, { keyframes } from "styled-components";


const fontImport = `@import url('https://fonts.googleapis.com/css?family=Montserrat:700');`;


const cubeAnimation = keyframes`
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
`;

const Hero = styled.div`
  ${fontImport};
  background-color: #091f36;
  position: relative;
  height: 200px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
`;

const HeroTitle = styled.h1`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
`;

const Cube = styled.div`
  position: absolute;
  top: ${props => props.top || "80vh"};
  left: ${props => props.left || "45vw"};
  width: 10px;
  height: 10px;
  border: solid 1px ${props => props.light ? "#0055FF" : "#003399"};
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: ${cubeAnimation} 12s ease-in forwards infinite;
  animation-delay: ${props => props.delay || "0s"};
`;

const Demo = () => (
  <Hero>
    
    <Cube delay="0s" left="45px" top="80px" />
    <Cube delay="2s" left="300px" top="80px"  light/>
    <Cube delay="4s" left="600px" top="100px" />
    <Cube delay="6s" left="900px" top="180px"  light/>
    <Cube delay="0s" left="1200px" top="70px" />
    <Cube delay="2s" left="200px" top="100px"  light/>
    <Cube delay="6s" left="400px" top="150px" />
    <Cube delay="5s" left="700px" top="100px"  light/>
    <Cube delay="0s" left="1000px" top="50px" />
    <Cube delay="0s" left="1200px" top="180px" />
    
   
   

   
  </Hero>
);



export default Demo






