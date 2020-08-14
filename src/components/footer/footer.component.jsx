import React from 'react';
import {Divider, FooterWrapper, MainFooter} from "./footer.styles";
import {Container, HeaderFour, Paragraph} from "../../utils/elements";
import {RawButton} from "../button/button.styles";

const Footer = () => {
    return (
        <FooterWrapper>
            <MainFooter>
                <Container>
                    <HeaderFour>Qube Pcs</HeaderFour>
                    <Paragraph>We are a prominent provider of professional consultancy services to private and public
                        clients within
                        the sectors of construction, aviation, infrastructure, water & utilities, environmental
                        development,
                        property markets and football management.</Paragraph>
                </Container>
                <Container>
                    <HeaderFour>Navigate</HeaderFour>
                    <Paragraph>Home</Paragraph>
                    <Paragraph>Services</Paragraph>
                    <Paragraph>Clients</Paragraph>
                    <Paragraph>About Us</Paragraph>
                    <Paragraph>Sports Management</Paragraph>
                </Container>
                <Container>
                    <HeaderFour>Social Media</HeaderFour>
                    <Paragraph>Facebook</Paragraph>
                    <Paragraph>Twitter</Paragraph>
                    <Paragraph>Instagram</Paragraph>
                </Container>
                <Container>
                    <HeaderFour>Contact</HeaderFour>
                    <Paragraph>(+233) 02002 16915</Paragraph>
                    <Paragraph>(+44) 07342 834164</Paragraph>
                    <a href="mailto:info@qubepcs.com" target='_blank'
                       rel="noreferrer"><RawButton link='/' type='primary'>info@qubepcs.com</RawButton></a>
                </Container>
            </MainFooter>
            <Divider/>
            <Paragraph style={{textAlign: 'center', padding: '20px 0', margin: 0}}>© Copyright 2020. All rights
                reserved.</Paragraph>
        </FooterWrapper>
    );
};

export default Footer;
