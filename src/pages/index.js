import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeLanding from "../components/home-landing/home-landing.component";
import HomeAbout from "../components/home-about/home-about.component";
import Tailor from "../components/tailor/tailor.component";
import Projects from "../components/projects/projects.components";
import Clients from "../components/clients/clients.component";
import HomeSports from "../components/home-sports/home-sports.component";
import Contact from "../components/contact/contact.component";
import Professional from "../components/professional/professional.component";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home"/>
            <HomeLanding/>
            <HomeAbout/>
            <Professional/>
            <Tailor/>
            <Projects/>
            <Clients/>
            <HomeSports/>
            <Contact/>
        </Layout>
    );
};

export default IndexPage;
