import React from 'react';
import {HomeLandingWrapper} from "./home-landing.styles";
import {HeaderOne} from "../../utils/elements";
import Img from  "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";

const HomeLanding = () => {

    const data = useStaticQuery(graphql`
      query {
      building: file(relativePath: {eq: "building.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plane: file(relativePath: {eq: "plane2.jpg"}) {
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
        <HomeLandingWrapper>
            <HeaderOne style={{gridArea: 'text', marginBottom: 0}}>Qube Pcs is your best professional consulting service</HeaderOne>
            <Img fluid={data.building.childImageSharp.fluid}  alt='building' style={{gridArea: 'firstImage'}}/>
            <Img fluid={data.plane.childImageSharp.fluid}  alt='plane' style={{gridArea: 'secondImage'}}/>
        </HomeLandingWrapper>
    );
};

export default HomeLanding;
