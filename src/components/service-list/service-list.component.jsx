import React from 'react';
import {BigImageContainer, ServiceListWrapper} from "./service-list.styles";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {HeaderFour, Paragraph} from "../../utils/elements";

const ServiceList = () => {

    const data = useStaticQuery(graphql`
        query {
            airstrip: file(relativePath: { eq: "airport-travel-waiting-terminal-34145.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 5000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            crane: file(relativePath: { eq: "crane2.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 5000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            plan: file(relativePath: { eq: "plan.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 5000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            laptop: file(relativePath: { eq: "advice.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 5000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hands: file(relativePath: { eq: "plan2.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 5000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <ServiceListWrapper>
            <BigImageContainer>
                <Img fluid={data.airstrip.childImageSharp.fluid} alt='airstrip'/>
                <HeaderFour>Aviation consultancy <Paragraph>with focus on Safety Management Systems, Operational and Technical
                    Management Systems, Environmental Management, Risk Management, Change Management, Audits and
                    Training.</Paragraph></HeaderFour>
            </BigImageContainer>
            <BigImageContainer>
                <Img fluid={data.plan.childImageSharp.fluid} alt='plan'/>
                <HeaderFour>Project Planning and Scheduling</HeaderFour>
            </BigImageContainer>
            <BigImageContainer>
                <Img fluid={data.crane.childImageSharp.fluid} alt='crane'/>
                <HeaderFour>Construction Management and Site Supervision</HeaderFour>
            </BigImageContainer>
            <BigImageContainer>
                <Img fluid={data.laptop.childImageSharp.fluid} alt='laptop'/>
                <HeaderFour>Project Advisory, Consultation & Project Coordination</HeaderFour>
            </BigImageContainer>
            <BigImageContainer>
                <Img fluid={data.hands.childImageSharp.fluid} alt='woman planning'/>
                <HeaderFour>Project, Programme Management & Pre-Contract and Post-Contract Management</HeaderFour>
            </BigImageContainer>
        </ServiceListWrapper>
    );
};

export default ServiceList;
