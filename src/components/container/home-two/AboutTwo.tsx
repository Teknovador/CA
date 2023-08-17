/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/home/1.png";
import Two from "public/images/home/2.png";
import Three from "public/images/about/3.png";
import Four from "public/images/about/4.png";
import Five from "public/images/about/11.png";

import Link from "next/link";

const AboutTwo = () => {
  return (
    <div id="about-area" className="about-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-9 "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area cussi-about-thumber">
              <Image className="about-img-1" src={One} alt="img" />
              <Image className="about-img-2 cus-img-2" src={Two} alt="img" />
              <Image
                className="about-img-3 top_image_bounce"
                src={Three}
                alt="img"
              />
              <Image
                className="about-img-4 top_image_bounce"
                src={Four}
                alt="img"
              />
              <div className="exp-wrap">
                <div className="exp-inner">
                  <h2>25 +</h2>
                  <p>Years Experienced</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6 className="sub-title">// About Our Company</h6>
              <h2 className="title">
                Providing Quality Tax Services & Consulting
              </h2>
              <p className="content">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem quisquam est, qui dolorem ipsum quia dolor sit amet,
              </p>
              <p className="quote mt-4 pb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.&quot;
              </p>
              <div className="row">
                <div className="col-md-6 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> Professional
                    Team
                  </h5>
                </div>
                <div className="col-md-6 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> 24/7
                    Customer Support
                  </h5>
                </div>
              </div>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius" href="/about">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
