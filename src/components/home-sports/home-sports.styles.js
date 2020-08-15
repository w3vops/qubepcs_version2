import styled from "styled-components";


export const HomeSportsWrapper = styled.section`
  width: 100%;
  background-color: hsl(0, 0%, 30%);
  color: white;
  .gatsby-image-wrapper{
  height: 100%;
   img{
    filter: grayscale(1);
    transform: scaleX(-1);
  }
  }
  >div{
  padding: 50px 5vw;
  }
  @media only screen and (min-width: 600px){
  display: grid;
  padding-right: 5vw;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 100px;
  height: 80vh;
  >div{
  padding: 0;
  }
  h4{
  margin-top: 0;
  }
  }
`;