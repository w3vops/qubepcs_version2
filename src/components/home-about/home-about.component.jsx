import React from 'react';
import {HomeAboutWrapper} from "./home-about.style";
import {Container, HeaderFour, Paragraph} from "../../utils/elements";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import Button from "../button/button.component";

const HomeAbout = () => {


    const data = useStaticQuery(graphql`
      query {
      map: file(relativePath: {eq: "map.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plan: file(relativePath: {eq: "plan2.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      construction: file(relativePath: {eq: "crane2.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      advice: file(relativePath: {eq: "advice.jpg"}) {
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
        <HomeAboutWrapper>
            <Container style={{gridArea: 'text', marginLeft: '5vw'}}>
                <HeaderFour>What we do</HeaderFour>
                <Paragraph>We are a prominent provider of professional consultancy services to private and public clients
                    within the sectors of construction, aviation, infrastructure, water & utilities, environmental development,
                    property markets and football management.
                </Paragraph>
            </Container>
            <Button link='/services' type='primary' style={{gridArea: 'button', alignSelf: 'center'}}>See more</Button>
            <Img fluid={data.map.childImageSharp.fluid} alt='map' style={{gridArea: 'imageOne'}}/>
            <Img fluid={data.plan.childImageSharp.fluid} alt='map' style={{gridArea: 'imageTwo'}}/>
            <Img fluid={data.construction.childImageSharp.fluid} alt='map' style={{gridArea: 'imageThree'}}/>
            <Img fluid={data.advice.childImageSharp.fluid} alt='map' style={{gridArea: 'imageFour'}}/>
        </HomeAboutWrapper>
    );
};

export default HomeAbout;
