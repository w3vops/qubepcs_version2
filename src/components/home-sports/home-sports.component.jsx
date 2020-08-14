import React from 'react';
import {HomeSportsWrapper} from "./home-sports.styles";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {Container, HeaderFour, Paragraph} from "../../utils/elements";
import Button from "../button/button.component";

const HomeSports = () => {

    const data = useStaticQuery(graphql`
      query LandingSportsQuery {
      image: file(relativePath: {eq: "sports2.jpg"}) {
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
        <HomeSportsWrapper>
            <Img fluid={data.image.childImageSharp.fluid}/>
            <Container>
                <HeaderFour>Sports Management</HeaderFour>
                <Paragraph>Our team of GFA accredited Intermediaries, Scouts, some with professional footballing
                    backgrounds as ex-players that can fully understand our clientele and provide clear and effective
                    advice and support through their wealth of knowledge and experience.</Paragraph>
                <Button link='/sports' type='secondary'>See more</Button>
            </Container>
        </HomeSportsWrapper>
    );
};

export default HomeSports;
