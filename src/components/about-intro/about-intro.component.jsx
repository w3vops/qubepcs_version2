import React from 'react';
import {AboutIntroWrapper} from "./about-intro.styles";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {HeaderTwo} from "../../utils/elements";

const AboutIntro = () => {

    const data = useStaticQuery(graphql`
      query {
      image: file(relativePath: {eq: "team.jpg"}) {
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
        <AboutIntroWrapper>
            <Img fluid={data.image.childImageSharp.fluid} alt='team image'/>
            <HeaderTwo>We have a team of flexible, proactive, versatile, and highly capable individuals</HeaderTwo>
        </AboutIntroWrapper>
    );
};

export default AboutIntro;
