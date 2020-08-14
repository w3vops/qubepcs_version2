import styled from "styled-components";


export const ErrorWrapper = styled.main`
  height: 100vh !important;
  width: 100% !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  //column-gap: 50px;
  p{
  margin: 30px 0 !important;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    >svg{
    height: 40vh;
    }
  }
  >svg{
   width: 95% !important;
   margin-left: 5% !important;
  }
  >div{
  display: flex;
  width: 95% !important;
  margin-left: 5% !important;
  flex-direction: column;
  justify-content: center;
  a{
  width: fit-content;
  text-decoration: none;
  margin: 0 !important;
  }
  }
`;
