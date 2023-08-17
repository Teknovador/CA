import React from "react";
import Layout from "@/components/layout/Layout";
import ContactBanner from "@/components/container/contact/ContactBanner";
import ContactForm from "@/components/container/contact/ContactForm";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";

const Contact = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <ContactBanner />
      <ContactForm />
      <ContactClient />
      {/* <ContactInstagram /> */}
    </Layout>
  );
};

export default Contact;
