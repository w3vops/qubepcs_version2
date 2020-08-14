import React from 'react';
import {WorkWrapper} from "./work.styles";
import {Container, HeaderFour, Paragraph} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Work = () => {

    const data = useStaticQuery(graphql`
      query {
      work: file(relativePath: {eq: "work.jpg"}) {
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
        <WorkWrapper>
            <Container>
                <HeaderFour>How we do what we do</HeaderFour>
                <Paragraph>We work closely with clients, surveyors, architects, contractors and consultants throughout
                    all phases of design development and building processes to ensure projects are delivered with the
                    most effective outcomes.</Paragraph>
            </Container>
            <Img fluid={data.work.childImageSharp.fluid} alt='team members working and laughing'/>
        </WorkWrapper>
    );
};

export default Work;
