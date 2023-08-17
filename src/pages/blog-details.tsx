import React from "react";
import Layout from "@/components/layout/Layout";
import BlogDetailsBanner from "@/components/container/blog-details/BlogDetailsBanner";
import BlogDetailsArea from "@/components/container/blog-details/BlogDetailsArea";
import BlogDetailsInstagram from "@/components/container/blog-details/BlogDetailsInstagram";

const BlogDetails = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={0}
    >
      <BlogDetailsBanner />
      <BlogDetailsArea />
      <BlogDetailsInstagram />
    </Layout>
  );
};

export default BlogDetails;
