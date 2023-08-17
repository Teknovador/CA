/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/service-icon/1.png";
import Three from "public/images/service-icon/2.png";
import Four from "public/images/service-icon/3.png";
import Five from "public/images/service-icon/4.png";
import Six from "public/images/service-icon/5.png";

const ServiceArea = () => {
  return (
    <div
      id="service-area"
      className="service-area bg-sky pd-top-110 bg-relative"
    >
      <Image
        className="left_image_bounce position-top-right"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h6 className="sub-title">// OUR SERVICES</h6>
              <h2 className="title">Loose And Experienced Tax Preparation</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Insurance Tax</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Three} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Financial Planning</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Four} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Audit & Assurancy</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Five} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Strategic Planning</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Six} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Finance Secure</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Management</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
