import styled from "styled-components";

export const HomeLandingWrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(300px, 500px) .7fr .4fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
  'none firstImage secondImage'
  'none firstImage secondImage'
  'text firstImage secondImage'
  ;
  padding: 82px 0 50px 5vw;
  grid-gap: 20px;
  
  .gatsby-image-wrapper:last-of-type{
  position: relative;
  &::after{
  content: '';
  background-color: white;
  position: absolute;
  height: 25%;
  width: 100%;
  top: 75%
  }
  //&::before{
  //position: absolute;
  //font-family: "Font Awesome 5 Free",serif;
  //color: black;
  //top: 85%;
  //left: 50%;
  //content: "\\f063";
  //font-weight: 900;
  //font-size: 3rem;
  //height: 25px;
  //width: 25px;
  //z-index: 3;
  //}
  }
  
`;
