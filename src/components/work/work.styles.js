import styled from "styled-components";


export const WorkWrapper = styled.section`
  height: 80vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr .7fr;
  grid-template-rows: auto;
  grid-gap: 120px;
  >div:first-of-type{
  margin-left: 5vw;
  padding-top: 100px;
  }
`;