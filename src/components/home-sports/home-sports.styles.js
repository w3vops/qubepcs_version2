import styled from "styled-components";


export const HomeSportsWrapper = styled.section`
  width: 100%;
  height: 80vh;
  padding-right: 5vw;
  background-color: hsl(0, 0%, 30%);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 100px;
  color: white;
  .gatsby-image-wrapper{
  height: 100%;
   img{
    filter: grayscale(1);
    transform: scaleX(-1);
  }
  }
`;