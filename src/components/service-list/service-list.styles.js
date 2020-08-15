import styled from "styled-components";


export const ServiceListWrapper = styled.section`
  width: 100%;
  padding: 100px 0 0 ;
`;

export const BigImageContainer = styled.section`
  width: 100%;
  display: grid;
  padding: 0 5vw;
  margin-bottom: 50px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  .gatsby-image-wrapper{
  max-height: 190px;
  filter: grayscale(1);
  transition: 500ms ease-in-out;
  transform-origin: center bottom;
  &:hover{
  filter: grayscale(0);
  }
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
    height: 600px;
    padding: 0;
    margin-bottom: 0;
    &:nth-child(even){
    .gatsby-image-wrapper{
    order: 2;
    }
    h4{
    order: 1;
    }
    }
    .gatsby-image-wrapper{
      height: 100%;
      max-height: initial;
    }
    h4{
      padding: 80px 100px 0;
      }
  }
`;
