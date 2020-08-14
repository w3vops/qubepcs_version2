import React from 'react';
import {ServiceLandingWrapper} from "./service-landing.styles";
import {HeaderOne} from "../../utils/elements";

const ServiceLanding = () => {
    return (
        <ServiceLandingWrapper>
            <HeaderOne>We meet your need,</HeaderOne>
            <HeaderOne>no matter the size</HeaderOne>
            <HeaderOne>and complexity</HeaderOne>
            <HeaderOne>of your project</HeaderOne>
        </ServiceLandingWrapper>
    );
};

export default ServiceLanding;
