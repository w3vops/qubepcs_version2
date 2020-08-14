import React, {useEffect} from "react";
import {MenuContent, StyledMenu} from "./overlay-menu.styles";
import {Link} from "gatsby";


const OverlayMenu = ({open, setOpen}) => {

    const isHidden = !!open;
    // const tabIndex = isHidden ? 0 : -1;

    useEffect(() => {
        if (open) {
            document.querySelector("html").classList.add("hide-overflow");
        } else {
            document.querySelector("html").classList.remove("hide-overflow");
        }
    });

    return (
        <StyledMenu open={open} aria-hidden={!isHidden}>
            <Link to="/">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    Home
                </MenuContent>
            </Link>
            <Link to="/services">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    Services
                </MenuContent>
            </Link>
            <Link to="/#clients">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    Clients
                </MenuContent>
            </Link>
            <Link to="/about">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    About Us
                </MenuContent>
            </Link>
            <Link to="/sports">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                   Sports Management
                </MenuContent>
            </Link>
        </StyledMenu>
    );
};

export default OverlayMenu;