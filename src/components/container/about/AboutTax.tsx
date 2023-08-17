/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/about/7.png";
import Two from "public/images/about/13.png";
import Three from "public/images/about/5.png";
import Four from "public/images/icon/4.png";
import Five from "public/images/icon/5.png";
import Six from "public/images/icon/6.png";
const AboutTax = () => {
  return (
    <div className="about-area pd-top-120 bg-relative pd-bottom-120">
      <Image
        className="top_image_bounce position-bottom-left"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-9 order-lg-last "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area pb-0 pe-0 mt-4 mt-lg-0 me-0">
              <Image className="about-img-1" src={Two} alt="img" />
              <Image
                className="about-img-5 top_image_bounce"
                src={Three}
                alt="img"
              />
            </div>
          </div>
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title me-xl-5 mb-0 mt-5 mt-lg-0">
              <h6 className="sub-title">// we are tax consultant</h6>
              <h2 className="title">
                We Are Tax Advisor & Financial Consultant Since 1990.
              </h2>
              <div className="media single-list-media mt-4">
                <div className="media-left">
                  <Image src={Four} alt="img" />
                </div>
                <div className="media-body align-self-center">
                  <h4>Years Experience</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </div>
              <div className="media single-list-media mt-4">
                <div className="media-left">
                  <Image src={Five} alt="img" />
                </div>
                <div className="media-body align-self-center">
                  <h4>Expert Team</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </div>
              <div className="media single-list-media mt-4">
                <div className="media-left">
                  <Image src={Six} alt="img" />
                </div>
                <div className="media-body align-self-center">
                  <h4>24/7 Full Support</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTax;
