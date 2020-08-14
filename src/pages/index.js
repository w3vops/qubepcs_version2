import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeLanding from "../components/home-landing/home-landing.component";
import HomeAbout from "../components/home-about/home-about.component";
import Tailor from "../components/tailor/tailor.component";
import Projects from "../components/projects/projects.components";
import Clients from "../components/clients/clients.component";
import HomeSports from "../components/home-sports/home-sports.component";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home"/>
            <HomeLanding/>
            <HomeAbout/>
            <Tailor/>
            <Projects/>
            <Clients/>
            <HomeSports/>
        </Layout>
    );
};

export default IndexPage;
