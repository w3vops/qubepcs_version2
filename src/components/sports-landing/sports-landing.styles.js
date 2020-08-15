import styled from "styled-components";

export const SportsLandingWrapper = styled.section`
  width: 100%;
  height: 100vh;
  color: white;
  background-color: black;
  h1{
  position: absolute;
  z-index: 2;
  top: 30%;
  max-width: 500px;
  right: 5vw;
  }
  .gatsby-image-wrapper{
  height: 100%;
  width: 100%;
  &::before{
  content: '';
  background-color: hsl(0, 0%, 0%, .5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  }
  }
  @media only screen and (max-width: 600px){
      h1{
        top: 25%;
        padding: 5vw;
      }
  }
`;