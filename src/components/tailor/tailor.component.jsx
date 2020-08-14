import React from 'react';
import {TailorWrapper} from "./tailor.style";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {Container, HeaderTwo, Paragraph} from "../../utils/elements";

const Tailor = () => {

    const data = useStaticQuery(graphql`
      query {
      tape: file(relativePath: {eq: "tapes.jpg"}) {
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
        <TailorWrapper>
            <Img fluid={data.tape.childImageSharp.fluid} alt='tape measures'/>
            <Container>
                <HeaderTwo>We don't believe in one size fits all!</HeaderTwo>
                <Paragraph> We’re focused on providing our clients with a level of service that is tailored to their
                    specific needs, with the main goal of delivering projects at the lowest cost and with efficiency.</Paragraph>
            </Container>
        </TailorWrapper>
    );
};

export default Tailor;
