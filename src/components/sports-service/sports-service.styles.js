import styled from "styled-components";


export const SportsServiceWrapper = styled.section`
  margin-top: 120px;
  color: white;
  width: 100%;
  background-color: hsl(84, 18%, 16%);
  h4{
  margin-left: 5px;
  }
  >div:last-of-type{
      padding: 0 5vw 38px;
  }
  .gatsby-image-wrapper{
  height: 350px;
  }
  
  @media only screen and (min-width: 600px){
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    >div:last-of-type{
      padding: 80px 5vw 100px;
    }
    .gatsby-image-wrapper{
      height: auto;
    }
  }
`;

export const List = styled.ul`
`;

export const ListItem = styled.li`
margin-bottom: 50px;
`;