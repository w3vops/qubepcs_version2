import styled from "styled-components";

export const ClientsWrapper = styled.section`
  width: 100%;
  padding: 100px 5vw;
  h2{
  max-width: 600px;
  }
`;

export const ClientsContainer = styled.div`
  width: 100%;
  display: grid;
    grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: auto;
  grid-gap: 100px;
  .gatsby-image-wrapper{
  img{
  object-fit: contain !important;
  }
  filter: grayscale(1);
  }
  @media only screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;