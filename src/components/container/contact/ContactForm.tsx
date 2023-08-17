/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/about/4.png";
import Two from "public/images/icon/8.png";
import Three from "public/images/icon/9.png";
import Four from "public/images/icon/10.png";

const ContactForm = () => {
  return (
    <div
      id="contact-page-area"
      className="contact-page-area bg-sky pd-top-120 pd-bottom-120 bg-relative"
    >
      <Image
        className="left_image_bounce position-top-right"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="contact-page-inner">
          <div className="row justify-content-center">
            <div className="col-lg-6 pe-xl-5">
              <h3 className="mb-xl-5 mb-4">Write a message</h3>
              <div className="single-input-inner style-bg">
                <input type="text" placeholder="Name" />
              </div>
              <div className="single-input-inner style-bg">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="single-input-inner style-bg">
                <input type="text" placeholder="Email" />
              </div>
              <div className="single-input-inner style-bg">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="btn-wrap">
                <a className="btn btn-black border-radius" href="#">
                  Send A Message
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">// Quick Contact</h6>
                <h2 className="title">
                  Solutions: all your questions answered
                </h2>
                <p className="content">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione
                </p>
                <div className="media single-list-media style-3 mt-4">
                  <div className="media-left">
                    <Image src={Two} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Have any question?</p>
                    <h4>Free +88 (7800) 0002</h4>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4">
                  <div className="media-left">
                    <Image src={Three} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Write email</p>
                    <h4>wostix@gmail.com</h4>
                  </div>
                </div>
                <div className="media single-list-media style-3 mt-4 mb-0">
                  <div className="media-left">
                    <Image src={Four} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <p>Visit anytime</p>
                    <h4>30 golden street. New York</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
