import React from "react";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import Layout from "@/components/layout/Layout";
import TeamArea from "@/components/container/team/TeamArea";

const TeamPage = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <TeamArea />
      <ContactClient />
      <ContactInstagram />
    </Layout>
  );
};

export default TeamPage;
