import styled from "styled-components";


export const ServiceListWrapper = styled.section`
  width: 100%;
  padding: 100px 0 0 ;
`;

export const BigImageContainer = styled.section`
  width: 100%;
  height: 600px;
  display: grid;
  h4{
  padding: 80px 100px 0;
  }
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  .gatsby-image-wrapper{
  height: 100%;
  filter: grayscale(1);
  transition: 500ms ease-in-out;
  transform-origin: center bottom;
  &:hover{
  filter: grayscale(0);
  }
  }
`;