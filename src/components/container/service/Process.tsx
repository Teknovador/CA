/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import One from "public/images/service/7.png";

const ProcessTwo = () => {
  return (
    <div className="work-process bg-black p-4 p-lg-0">
      <div className="row">
        <div className="col-lg-6">
          <div className="work-process-thumb">
            <Image src={One} alt="img" />
            <div className="quote-wrap">
              <h4>Quality, Trust, and Expertise</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 align-self-center">
          <div className="section-title style-white mb-0 pd-top-100 pd-bottom-100">
            <h6 className="sub-title">// Our Process</h6>
            <h2 className="title">Our Work Process</h2>
            <div className="media single-list-media style-2 mt-4">
              <div className="media-left">01</div>
              <div className="media-body align-self-center">
                <h4>Make An Appointment</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered
                </p>
              </div>
            </div>
            <div className="media single-list-media style-2 mt-4">
              <div className="media-left">02</div>
              <div className="media-body align-self-center">
                <h4>Meet Our Professional</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered
                </p>
              </div>
            </div>
            <div className="media single-list-media style-2 mt-4">
              <div className="media-left">03</div>
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
  );
};

export default ProcessTwo;
