import React from "react";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import Layout from "@/components/layout/Layout";
import TeamDetailsArea from "@/components/container/team/TeamDetailsArea";
import ContactClientTwo from "@/components/container/contact/ContactClientTwo";

const TeamDetails = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <TeamDetailsArea />
      <ContactClientTwo />
      <ContactInstagram />
    </Layout>
  );
};

export default TeamDetails;
