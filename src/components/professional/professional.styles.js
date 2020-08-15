import styled from "styled-components";


export const ProfessionalWrapper = styled.section`
   width: 100%;
   padding: 100px 5vw;
   h2{
   margin-top: -15px;
   }
   .gatsby-image-wrapper{
   transform: scaleX(-1);
   margin-bottom: 50px;
   }
   @media only screen and (min-width: 600px){
      height: 700px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 100px;
      padding: 100px 5vw 100px 0;
      .gatsby-image-wrapper{
      }
   }
`;