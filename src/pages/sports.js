import React from 'react';
import SEO from "../components/seo";
import Layout from "../components/layout";
import SportsLanding from "../components/sports-landing/sports-landing.component";
import SportsExpertise from "../components/sports-expertise/sports-expertise.component";
import SportsService from "../components/sports-service/sports-service.component";
import SportsPartners from "../components/sports-partners/sports-partners.component";

const Sports = () => {
    return (
        <Layout>
            <SEO title="Services"/>
            <SportsLanding/>
            <SportsExpertise/>
            <SportsService/>
            <SportsPartners/>
        </Layout>
    );
};

export default Sports;
