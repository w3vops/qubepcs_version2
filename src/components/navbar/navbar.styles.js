import styled from "styled-components";
import {typeScale} from "../../utils/elements";

export const NavBarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 25px 0;
  color: black;
  //background-color: white;
  z-index: 50;
  transition: top 90ms linear, padding 90ms linear;
`;

export const NavBarRow = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarBrand = styled.a`
  width: 60px;
  transition: all 1s ease-in-out;
  animation: rotate-logo 1s ease-in-out both;
  z-index: 10;
  @keyframes rotate-logo {
  from{
  opacity: 0;
  transform: rotate(360deg);
  }
  to{
  opacity: 1;
  transform: rotate(0);
  }
  }
`;

export const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
`;

export const NavMenuText = styled.h5`
  font-size: ${typeScale.header5};
  margin-right: 1rem;
  cursor: pointer;
  color: ${({ open }) => open ? 'white' : 'black'}
`;

export const NavMenuIcon = styled.div``;