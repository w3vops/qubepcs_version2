import styled from "styled-components";


export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 100px 5vw 0;
`;

export const MainFooter =styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 40px;
  >div:nth-of-type(2){
  p{
  margin: 10px;
  cursor: pointer;
  }
  }
`;

export const CopyrightSection = styled.div``;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  margin: 50px auto 0;
  background-color: #eeeeee;
`;