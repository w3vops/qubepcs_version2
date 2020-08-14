import React from 'react';
import SEO from "../components/seo";
import Layout from "../components/layout";
import SportsLanding from "../components/sports-landing/sports-landing.component";
import SportsExpertise from "../components/sports-expertise/sports-expertise.component";

const Sports = () => {
    return (
        <Layout>
            <SEO title="Services"/>
            <SportsLanding/>
            <SportsExpertise/>
        </Layout>
    );
};

export default Sports;
