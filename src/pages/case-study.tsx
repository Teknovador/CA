import React from "react";
import Layout from "@/components/layout/Layout";
import CaseStudyArea from "@/components/container/case/CaseStudyArea";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";

const CaseStudy = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <CaseStudyArea />
      <ContactClient />
      <ContactInstagram />
    </Layout>
  );
};

export default CaseStudy;
