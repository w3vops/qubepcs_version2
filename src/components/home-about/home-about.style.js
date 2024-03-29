import styled from "styled-components";


export const HomeAboutWrapper = styled.section`
  height: 150vh;
  width: 100%;
  padding: 100px 0 130px 0;
  background-color: #eee;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  grid-template-areas: 
  'text text . button'
  '. imageTwo . imageFour'
  'imageOne imageTwo imageThree imageFour'
  'imageOne . imageThree .'
  ;
  @media only screen and (max-width: 600px){
  height: initial;
  display: block;
  padding: 30px 5vw 50px ;
  .gatsby-image-wrapper{
  display: none;
  }
  }
`;