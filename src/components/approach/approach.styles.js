import styled from "styled-components";


export const ApproachWrapper = styled.section`
  width: 100%;
  padding: 50px 5vw;
  margin-top: 100px;
  background-color: hsl(32, 22%, 67%);
  
  
  @media only screen and (min-width: 600px){
    height: 80vh;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    >div:first-of-type{
      margin: 80px 5vw;
    }
  }
`;