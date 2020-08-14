import React from 'react';
import {ApproachWrapper} from "./approach.styles";
import {Container, HeaderTwo, Paragraph} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Approach = () => {

    const data = useStaticQuery(graphql`
      query {
      group: file(relativePath: {eq: "group.jpg"}) {
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
        <ApproachWrapper>
            <Container>
                <HeaderTwo>We are your best bet</HeaderTwo>
                <Paragraph>With a comprehensive portfolio of commercial, institutional and infrastructure work on an
                    international level by our chartered professionals, QUBE PCS is your innovative approach to project
                    and programme delivery.</Paragraph>
            </Container>
            <Img fluid={data.group.childImageSharp.fluid}/>
        </ApproachWrapper>
    );
};

export default Approach;
