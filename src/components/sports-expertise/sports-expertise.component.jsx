import React from 'react';
import {SportsExpertiseWrapper} from "./sports-expertise.styles";
import {HeaderTwo, Paragraph} from "../../utils/elements";

const SportsExpertise = () => {
    return (
        <SportsExpertiseWrapper>
            <HeaderTwo>We are not short of expertise</HeaderTwo>
            <Paragraph>Our team of GFA accredited Intermediaries, Scouts, some with professional footballing backgrounds
                as ex-players that can fully understand our clientele and provide clear and effective advice and support
                through their wealth of knowledge and experience.</Paragraph>
        </SportsExpertiseWrapper>
    );
};

export default SportsExpertise;
