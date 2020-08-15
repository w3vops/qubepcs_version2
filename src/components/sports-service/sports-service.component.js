import React from 'react';
import {List, ListItem, SportsServiceWrapper} from "./sports-service.styles";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {Container, HeaderFour} from "../../utils/elements";

const SportsService = () => {

    const data = useStaticQuery(graphql`
      query {
      footballers: file(relativePath: {eq: "footballers.jpg"}) {
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
        <SportsServiceWrapper>
            <Img fluid={data.footballers.childImageSharp.fluid} alt='footballers'/>
            <Container>
                <HeaderFour>Our services</HeaderFour>
                <List>
                    <ListItem> Representation – Career Management including contract negotiations, transfers and mentoring.</ListItem>
                    <ListItem> Brokering – Intermediary Services</ListItem>
                    <ListItem>Brand Management through our network of associates</ListItem>
                    <ListItem>Legal Advice through our network of reputable law firms</ListItem>
                    <ListItem>Access to network of high calibre coaches</ListItem>
                </List>
            </Container>
        </SportsServiceWrapper>
    );
};

export default SportsService;
