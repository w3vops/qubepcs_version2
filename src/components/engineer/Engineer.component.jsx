import React from 'react';
import {EngineerWrapper} from "./engineer.styles";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import {Container, HeaderTwo, Paragraph} from "../../utils/elements";

const Engineer = () => {

    const data = useStaticQuery(graphql`
      query {
      engineer: file(relativePath: {eq: "engineer.jpg"}) {
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
        <EngineerWrapper>
            <Img fluid={data.engineer.childImageSharp.fluid}/>
            <Container>
                <HeaderTwo>Experience they say, is the best teacher</HeaderTwo>
                <Paragraph>QUBE PCS team of Civil Engineering, Commercial, Project and Programme
                    Management consult ants, have <span>over 40 years experience</span> successfully managing and
                    coordinating projects from inception to completion within varying sectors and
                    specialisms of industry for a ream of private and Public Organizations within the
                    United Kingdom, UAE, Canada and Africa.</Paragraph>
            </Container>
        </EngineerWrapper>
    );
};

export default Engineer;
