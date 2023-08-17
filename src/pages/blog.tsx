import React from "react";
import BlogBanner from "@/components/container/blog/BlogBanner";
import Layout from "@/components/layout/Layout";
import BlogVideoBanner from "@/components/container/blog/BlogVideoBanner";
import BlogNewsForm from "@/components/container/blog/BlogNewsForm";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
const blog = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <BlogBanner />
      <BlogVideoBanner />
      <BlogNewsForm />
      <ContactClient />
      <ContactInstagram />
    </Layout>
  );
};

export default blog;
