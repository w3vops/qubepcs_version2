import styled from "styled-components";


export const EngineerWrapper = styled.section`
  width: 100%;
  padding: 100px 5vw;
  span{
  background-color: hsl(28, 84%, 60%, .5);
  padding: 10px;
  }
  .gatsby-image-wrapper{
  height: 300px;
  }
  @media only screen and (min-width: 600px){
   padding: 0;
   height: 80vh;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: auto;
  >div:last-of-type{
  padding: 0 5vw;
  }
   .gatsby-image-wrapper{
      height: initial;
    }
  }
`;