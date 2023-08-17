import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceBanner from "@/components/container/service/ServiceBanner";
import ServiceArea from "@/components/container/service/ServiceArea";
import ProcessTwo from "@/components/container/service/Process";
import PricingTwo from "@/components/container/service/PricingTwo";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import AboutCounterTwo from "@/components/container/about/AboutCounterTwo";
import AboutCustomerTwo from "@/components/container/about/AboutCustomerTwo";

const Service = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <ServiceBanner />
      <ServiceArea />
      <AboutCounterTwo />
      <ProcessTwo />
      <PricingTwo />
      <AboutCustomerTwo />
      <ContactClient />
      {/* <ContactInstagram /> */}
    </Layout>
  );
};

export default Service;
