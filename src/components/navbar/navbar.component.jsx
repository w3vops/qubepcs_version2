import React, {useState} from "react";
import {NavBarBrand, NavBarContainer, NavBarRow, NavMenuContainer, NavMenuIcon, NavMenuText} from "./navbar.styles";
import Burger from "../burger/burger.component";
import OverlayMenu from "../menu/overlay-menu.component";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";

const NavBar = () => {
    const data = useStaticQuery(graphql`
      query {
      logo: file(relativePath: {eq: "logo.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }  
  `)


    const [open, setOpen] = useState(false);

    return (
        <NavBarContainer>
            <NavBarRow>
                <OverlayMenu open={open} setOpen={setOpen}/>
                <NavBarBrand href="/">
                    <Img fluid={data.logo.childImageSharp.fluid}  alt='logo'/>
                </NavBarBrand>
                <NavMenuContainer>
                    <NavMenuText onClick={() => setOpen(!open)} open={open}>
                        {open ?  `close` : `menu`}
                    </NavMenuText>
                    <NavMenuIcon>
                        <Burger open={open} setOpen={setOpen}/>
                    </NavMenuIcon>
                </NavMenuContainer>
            </NavBarRow>
        </NavBarContainer>
    );
};

export default NavBar;