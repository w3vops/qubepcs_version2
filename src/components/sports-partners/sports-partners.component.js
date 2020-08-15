import React from 'react';
import {ProfessionalWrapper} from "../professional/professional.styles";
import Img from "gatsby-image";
import {Container, HeaderTwo, Paragraph} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";

const SportsPartners = () => {

    const data = useStaticQuery(graphql`
      query {
      pitch: file(relativePath: {eq: "pitch.jpg"}) {
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
        <ProfessionalWrapper style={{paddingBottom: 0}}>
            <Img fluid={data.pitch.childImageSharp.fluid}/>
            <Container>
                <HeaderTwo>Our partners abroad</HeaderTwo>
                <Paragraph>Qube PCS Sports Management arm works jointly with UK firm EQ Sports Management with its UK FA
                    registered intermediaries and associates to provide additional service value. Both Directors from
                    each respective company have intimate interest in business affairs both in Ghana and the United
                    Kingdom, dedicated to the ongoing development and management of player careers.</Paragraph>
            </Container>
        </ProfessionalWrapper>
    );
};

export default SportsPartners;
