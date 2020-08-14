import styled from "styled-components";
import {typeScale} from "../../utils/elements";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(321, 38%, 35%, .95);
  height: 100vh;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
   & >:nth-child(even) > *{
  animation:  ${({ open }) => open ? 'slide-left 0.8s ease-in-out 0.3s both,' +
    'color-change 0.5s ease-out 1.3s both' : 'none'};
  }
  & >:nth-child(odd) > *{
  animation:  ${({ open }) => open ? 'slide-right 0.8s ease-in-out 0.3s both,' +
    'color-change 0.5s ease-out 1.3s both' : 'none'};
  }
  
  @media screen and (max-width: 520px) {
    height: 115vh;
  }
`;
export const MenuContent = styled.h4`
  color: white;
  font-size: ${typeScale.header5};
  font-family: 'Teko', sans-serif;
  margin-bottom: 1vh;
  cursor: pointer;
  transition: all 500ms ease-in;
  transform-origin: left;
  position: relative;
  &::before{
  content: '';
  position: absolute;
  -webkit-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
  width: 0;
  height: 4px;
  background-color: hsl(321, 38%, 35%, .9);
  top: calc(50% - 2px);
  }
  &:hover{
  &::before{
  width: 100%;
  }
  }
  @media only screen and (min-width: 600px){
    font-size: ${typeScale.header3};
  }
`;