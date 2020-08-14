import styled from "styled-components"
import { SectionWrapper } from "../home-about/home-about.style"
import { typeScale } from "../../utils/elements"

export const ValueWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  padding: 100px 5vw;
  >*{
  width: 100%;
  }
  @media only screen and (min-width: 600px){
  flex-direction: row;
  padding: 100px 0;
   >*{
  width: 50%;
  }
  >div:first-of-type{
  padding:0 5vw;
  }
  }
`;

export const TextSection = styled.div``;

export const List = styled.ul`
  margin-top: 50px;
`;

export const ListItem = styled.li`
  font-size: ${typeScale.header5};
`;

