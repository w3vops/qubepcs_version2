import styled from "styled-components"
import { Link } from "gatsby"
import {palette} from "../../utils/elements";


export const ButtonWrapper = styled(Link)`
    font-weight: 700;
    text-transform: uppercase;
    width: fit-content;
    height: fit-content;
    position: relative;
    line-height: 40px;
    padding: 10px 20px;
    letter-spacing: 0.2em;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    outline: 1px solid transparent;
    -webkit-transition: all 0.5s ease 0.25s;
    transition: all 0.5s ease 0.25s;
    color: ${palette.byzantium};
  &::before {
  -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    background: ${palette.byzantium};
    left: -8px;
}
 &::after {
  -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    background: ${palette.byzantium};
    right: -8px;
}
  
  &:hover{
    color: white;
    background-color: ${palette.byzantium};
    border-color: ${palette.byzantium};
    outline: 0;
    &:before{
    left: 0;
    }
    &:after{
    right: 0;
    }
  }
`;

export const SecondaryButtonWrapper = styled(ButtonWrapper)`
  background-color: transparent;
  color: white;
   &::before {
  -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    background: white;
    left: -8px;
}
 &::after {
  -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    background: white;
    right: -8px;
}
  &:hover{
    color: ${palette.byzantium};
    background-color: white;
    border-color: white;
    outline: 0;
    &:before{
    left: 0;
    }
    &:after{
    right: 0;
    }
  }
`;

export const RawButton = styled.div`
    display: inline;
    font-weight: 700;
    cursor: pointer;
    font-size: .7rem;
    text-transform: uppercase;
    position: relative;
    line-height: 40px;
    padding: 10px 20px;
    letter-spacing: 0.2em;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    outline: 1px solid transparent;
    -webkit-transition: all 0.5s ease 0.25s;
    transition: all 0.5s ease 0.25s;
    color: ${palette.byzantium};
  &::before {
  -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    background: ${palette.byzantium};
    left: -8px;
}
 &::after {
  -webkit-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    background: ${palette.byzantium};
    right: -8px;
}
  
  &:hover{
    color: white;
    background-color: ${palette.byzantium};
    border-color: ${palette.byzantium};
    outline: 0;
    &:before{
    left: 0;
    }
    &:after{
    right: 0;
    }
  }
`;