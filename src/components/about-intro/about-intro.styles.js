import styled from "styled-components";


export const AboutIntroWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  .gatsby-image-wrapper{
  object-fit: cover;
  height: 100%;
  width: 100%;
  &::before{
  content: '';
  background-color: hsl(0, 0%, 0%, .7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  }
  }
  h2{
  position: absolute;
  z-index: 2;
  top: 25%;
  right: 10vw;
  color: white;
  width: 80%;
  }
  @media only screen and (min-width: 600px){
  h2{
  width: 50%;
  margin-right: 0;
  }
  }
  @media only screen and (max-width: 600px){
    h2{
    font-size: 2rem;
    }
  }
`;