import React from 'react';
import {ClientsContainer, ClientsWrapper} from "./clients.style";
import {HeaderTwo} from "../../utils/elements";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const Clients = () => {

    const data = useStaticQuery(graphql`
      query ClientQuery {
      images: allFile(filter: {relativeDirectory: {eq: "clients"}}) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }  
    }
  `)
    return (
        <ClientsWrapper>
            <HeaderTwo>Our clients have received nothing but excellent service from us</HeaderTwo>
            <ClientsContainer>
                {
                    data.images.nodes.map(image => <Img fluid={image.childImageSharp.fluid} alt="client's logos" key={image.id}/>)
                }
            </ClientsContainer>
        </ClientsWrapper>
    );
};

export default Clients;
