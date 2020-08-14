import React from 'react';
import {ProfessionalWrapper} from "./professional.styles";
import {Container, HeaderTwo, Paragraph} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Professional = () => {

    const data = useStaticQuery(graphql`
      query {
      professional: file(relativePath: {eq: "professional.jpg"}) {
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
        <ProfessionalWrapper>
            <Img fluid={data.professional.childImageSharp.fluid}/>
            <Container>
                <HeaderTwo>We work with the best professionals</HeaderTwo>
                <Paragraph>Our team is filled with highly qualified professionals with a wealth of knowledge and years
                    of
                    experience in their respective fields in projects all over the world. You hence can be assured of
                    getting advice and expertise of premium quality to help you improve your business performance in
                    terms of operations, profitability, management, structure and strategy.</Paragraph>
            </Container>
        </ProfessionalWrapper>
    );
};

export default Professional;
