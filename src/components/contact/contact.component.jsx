import React from 'react';
import {ContactWrapper} from "./contact.styles";
import {Container, HeaderFour, HeaderTwo, Paragraph} from "../../utils/elements";
import {RawButton} from "../button/button.styles";

const Contact = () => {
    return (
        <ContactWrapper>
            <Container>
                <HeaderTwo>Do not hesitate to reach us</HeaderTwo>
                <Paragraph>We are ready to connect with you. You can contact us at any time. <br/> We are ready to serve your
                    needs.</Paragraph>
            </Container>
            <Container>
                <HeaderFour>Mail us</HeaderFour>
                <a href="mailto:info@qubepcs.com" target='_blank'
                   rel="noreferrer"><RawButton style={{fontSize: '1.4rem'}}>info@qubepcs.com</RawButton></a>
            </Container>
        </ContactWrapper>
    );
};

export default Contact;
