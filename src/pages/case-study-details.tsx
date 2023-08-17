import React from "react";
import Layout from "@/components/layout/Layout";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import CaseStudyDetailsArea from "@/components/container/case/CaseStudyDetailsArea";

const CaseStudyDetails = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <CaseStudyDetailsArea />
      <ContactClient />
      <ContactInstagram />
    </Layout>
  );
};

export default CaseStudyDetails;
