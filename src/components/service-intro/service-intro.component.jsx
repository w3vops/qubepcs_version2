import React from 'react';
import {ServiceIntroWrapper} from "./service-intro.styles";
import {Paragraph} from "../../utils/elements";

const ServiceIntro = () => {
    return (
        <ServiceIntroWrapper>
            <Paragraph>QUBE PCS offers a wide range of professional management services tailored to meet each project’s
                needs, no matter the size and complexity. We also extend our capacity and capability through strong
                alliances with selected companies and supply chains assembled for specific sectors.</Paragraph>
        </ServiceIntroWrapper>
    );
};

export default ServiceIntro;
