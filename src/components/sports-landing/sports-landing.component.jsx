import React from 'react';
import {SportsLandingWrapper} from "./sports-landing.styles";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {HeaderOne} from "../../utils/elements";

const SportsLanding = () => {

    const data = useStaticQuery(graphql`
      query {
      sports: file(relativePath: {eq: "sports1.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     }
    `)
    return (
        <SportsLandingWrapper>
            <Img fluid={data.sports.childImageSharp.fluid}/>
            <HeaderOne>We support your sports career </HeaderOne>
        </SportsLandingWrapper>
    );
};

export default SportsLanding;
