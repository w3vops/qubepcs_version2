import React from 'react';
import {ProjectsWrapper} from "./projects.style";
import {HeaderFour, HeaderTwo, Paragraph} from "../../utils/elements";

const Projects = () => {
    return (
        <ProjectsWrapper>
            <HeaderFour>Our projects</HeaderFour>
            <HeaderTwo>We are global</HeaderTwo>
            <Paragraph>We have worked with Clients, Contractors and Designers both nationally and internationally on
                varying complex projects including: Aviation, Mixed-use commercial developments, Corporate developments,
                Utilities, Highways and Universities and School complexes infrastructures.</Paragraph>
        </ProjectsWrapper>
    );
};

export default Projects;
