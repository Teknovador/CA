import React from "react";
import Layout from "@/components/layout/Layout";
import AboutCustomer from "@/components/container/about/AboutCustomer";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import ContactClient from "@/components/container/contact/ContactClient";
import PricingArea from "@/components/container/case/PricingArea";

const Pricing = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <PricingArea />
      <AboutCustomer />
      <ContactClient />
      {/* <ContactInstagram /> */}
    </Layout>
  );
};

export default Pricing;
