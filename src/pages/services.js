import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceLanding from "../components/service-landing/service-landing.component";
import ServiceList from "../components/service-list/service-list.component";
import ServiceIntro from "../components/service-intro/service-intro.component";

const ServicePage = () => {
    return (
        <Layout>
            <SEO title="Services"/>
            <ServiceLanding/>
            <ServiceIntro/>
            <ServiceList/>
        </Layout>
    );
};

export default ServicePage;
