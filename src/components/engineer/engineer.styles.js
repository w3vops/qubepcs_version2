import styled from "styled-components";


export const EngineerWrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  >div:last-of-type{
  padding: 0 5vw;
  }
  span{
  background-color: hsl(28, 84%, 60%, .5);
  padding: 10px;
  }
`;