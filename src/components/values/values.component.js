import React, {useEffect, useRef} from "react"
import { List, ListItem, TextSection, ValueWrapper } from "./values.style"
import { Title } from "../home-about/home-about.style"
import Img from "gatsby-image/index"
import { graphql, useStaticQuery } from "gatsby"
import {gsap, Power3, ScrollTrigger} from "gsap/all";

const HomeValue = () => {
    let listItems = useRef(null);
    useEffect(() => {
        typeof window !== `undefined` ? gsap.registerPlugin(ScrollTrigger) : console.log();
        gsap.from(listItems.children, {
            scrollTrigger: {
                trigger: listItems,
                start: 'top bottom',
            }, duration: .8, delay: .5, opacity: 0, y: 20, stagger: .4, ease: Power3.easeIn})
    })

  const data = useStaticQuery(graphql`
  query ValuesQuery {
  image: file(relativePath: {eq: "footprint.jpg"}) {
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
    <ValueWrapper>
      <TextSection>
        <Title>Our core values</Title>
        <List ref={el => listItems = el}>
          <ListItem>Customer focused</ListItem>
          <ListItem>Quality driven</ListItem>
          <ListItem>Professional</ListItem>
          <ListItem>Goal orientated</ListItem>
          <ListItem>Continuously improving</ListItem>
          <ListItem> Flexible</ListItem>
          <ListItem>Open and integrated</ListItem>
          <ListItem> Respectful</ListItem>
        </List>
      </TextSection>
      <Img fluid={data.image.childImageSharp.fluid}/>
    </ValueWrapper>
  )
}

export default HomeValue
