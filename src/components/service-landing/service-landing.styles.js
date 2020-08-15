import styled from "styled-components";


export const ServiceLandingWrapper = styled.section`
  height: 100vh;
  width: 100%;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(321, 38%, 35%, .5);
  h1{
  margin: 0 0 5px;
  }
  @media only screen and (max-width: 600px){
  h1{
  font-size: 2.3rem;
  }
  }
`;