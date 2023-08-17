import React from "react";
import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/container/home-two/BannerTwo";
import BannerVideoTwo from "@/components/container/home-two/BannerVideoTwo";
import Intro from "@/components/container/home-two/Intro";
import AboutTwo from "@/components/container/home-two/AboutTwo";
import ServiceTwo from "@/components/container/home-two/ServiceTwo";
import AboutThree from "@/components/container/home-two/AboutThree";
import TeamTwo from "@/components/container/home-two/TeamTwo";
import Cta from "@/components/container/home-two/Cta";
import CaseStudyTwo from "@/components/container/home-two/CaseStudyTwo";
import CallBack from "@/components/container/home-two/CallBack";
import LatestArticle from "@/components/container/home-two/LatestArticle";
import AboutCounter from "@/components/container/about/AboutCounter";
import AboutCustomerThree from "@/components/container/about/AboutCustomerThree";
import ContactClientThree from "@/components/container/contact/ContactClientThree";
import ContactInstagramTwo from "@/components/container/contact/ContactInstagramTwo";
import HomeFaq from "@/components/container/home-two/HomeFaq";

const HomeTwo = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <BannerTwo />
      <BannerVideoTwo />
      <Intro />
      <AboutTwo />
      <AboutCounter />
      <ServiceTwo />
      <AboutThree />
      <TeamTwo />
      <Cta />
      <AboutCustomerThree />
      <CaseStudyTwo />
      <HomeFaq />
      <CallBack />
      <LatestArticle />
      <ContactClientThree />
      {/* <ContactInstagramTwo /> */}
    </Layout>
  );
};



export default HomeTwo;
