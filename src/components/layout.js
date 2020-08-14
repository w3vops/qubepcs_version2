/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import "./layout.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {blandNav, fixedScroll, NavScroll} from "../utils/navscroll";
import NavBar from "./navbar/navbar.component";
import Footer from "./footer/footer.component";

const Layout = ({children, navScroll}) => {

    useEffect(() => {
        if (typeof window !== `undefined` && navScroll) {
            NavScroll();
        }
        if (!navScroll){
            blandNav();
            fixedScroll();
        }
    }, [navScroll]);


    return (
        <>
            <NavBar/>
            {/*<PageTransition/>*/}
            <main>{children}</main>
            <Footer/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
