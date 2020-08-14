import React from 'react';
import SEO from "../components/seo";
import Layout from "../components/layout";
import AboutLanding from "../components/about-landing/about-landing.component";
import AboutIntro from "../components/about-intro/about-intro.component";
import Engineer from "../components/engineer/Engineer.component";
import Work from "../components/work/work.component";
import Approach from "../components/approach/approach.component";

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="Services"/>
            <AboutLanding/>
            <AboutIntro/>
            <Engineer/>
            <Work/>
            <Approach/>
        </Layout>
    );
};

export default AboutPage;
