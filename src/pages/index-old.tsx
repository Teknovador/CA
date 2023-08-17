import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOne from "@/components/container/home/BannerOne";
import BannerVideo from "@/components/container/home/BannerVideo";
import Tax from "@/components/container/home/Tax";
import AboutUsOne from "@/components/container/home/AboutUsOne";
import Marqueue from "@/components/container/home/Marqueue";
import Strategy from "@/components/container/home/Strategy";
import Case from "@/components/container/home/Case";
import Team from "@/components/container/home/Team";
import Testimonial from "@/components/container/home/Testimonial";
import Blog from "@/components/container/home/Blog";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import ContactClientThree from "@/components/container/contact/ContactClientThree";

const Home = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <BannerOne />
      <BannerVideo />
      <Tax />
      <AboutUsOne />
      <Marqueue />
      <Strategy />
      <Case />
      <Team />
      <Testimonial />
      <Blog />
      <ContactClientThree />
      <ContactInstagram />
    </Layout>
  );
};

export default Home;
