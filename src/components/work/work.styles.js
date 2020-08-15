import styled from "styled-components";


export const WorkWrapper = styled.section`
  width: 100%;
  padding: 0 5vw;
  
  @media only screen and (min-width: 600px){
    height: 80vh;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr .7fr;
    grid-template-rows: auto;
    grid-gap: 120px;
    >div:first-of-type{
      margin-left: 5vw;
      padding-top: 100px;
    }
  }
`;