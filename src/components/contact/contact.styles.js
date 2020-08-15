import styled from "styled-components";


export const ContactWrapper = styled.section`
  width: 100%;
  background-color: #eee;
  padding: 100px 5vw;
 @media only screen and (min-width: 600px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10vw;
  align-items: center;
  >div:last-of-type a >div{
  font-size: 1.4rem;
  }
 }
`;

