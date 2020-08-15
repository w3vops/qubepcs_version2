import styled from "styled-components";


export const TailorWrapper = styled.section`
  width: 100%;
  padding: 50px 5vw;
  background-color: hsl(206, 33%, 96%);
  .gatsby-image-wrapper{
  width: 100%;
  height: 100%;
  }
  @media only screen and (min-width: 600px){
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10vw;
  }
`;