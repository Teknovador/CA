import React, { useState } from "react";
import Image from "next/image";
import One from "public/images/bg/15.png";
import Three from "public/images/about/15.png";
import Two from "public/images/about/16.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import RequestForm from "../request-form/form";

const ServiceDetailsArea = () => {
  const [imgTab, setImgTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div
        id="service-details-area"
        className="service-details bg-sky pd-bottom-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Image src={One} alt="img" />
              <h2>How To Improve Your Tax Advisor Financial Consulting Services</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                est et expedita distinctio. libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                facere possimus, omnis voluptas assumenda est, omnis dolor quibusdam
                et aut officiis debitis aut rerum necessitatibus saepe eveniet
              </p>
              <h3>A Strategic Path of True Investment</h3>
              <p className="mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                est et expedita distinctio. libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                facere possimus, omnis voluptas assumenda est, omnis dolor quibusdam
                et aut officiis debitis aut rerum necessitatibus saepe eveniet
              </p>
            </div>
            <div className="col-md-4 pay-now">
              <RequestForm/>
            </div>
            <div className="col-md-12">
            <div className="faq-area cus-faq pd-top-110 bg-sky">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="section-title text-center">
                        <h2 className="title">
                          Solutions: all your questions answered
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion attax-accordion style-2 mt-5 mt-lg-0"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={
                            (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                          }
                          onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                        >
                          1. Where Can I Find Information?
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse${
                          imgTab === 0 ? " show " : ""
                        }`}
                      >
                        <div className="accordion-body">
                          Many desktop publishing packages and web page editors now use
                          Lorem Ipsum as their default model text, search for
                          &apos;lorem ipsum&apos; will uncover
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className={
                            (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                          }
                          onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                        >
                          2. What Are Your Terms And Conditions?
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse${
                          imgTab === 1 ? " show " : ""
                        }`}
                      >
                        <div className="accordion-body">
                          Many desktop publishing packages and web page editors now use
                          Lorem Ipsum as their default model text, search for
                          &apos;lorem ipsum&apos; will uncover
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={
                            (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                          }
                          onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                        >
                          3. Can I Buy Directly From The Factory?
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse${
                          imgTab === 2 ? " show " : ""
                        }`}
                      >
                        <div className="accordion-body">
                          Many desktop publishing packages and web page editors now use
                          Lorem Ipsum as their default model text, search for
                          &apos;lorem ipsum&apos; will uncover
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className={
                            (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                          }
                          onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                        >
                          4. What Kinds of Payment Do You Accept?
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse${
                          imgTab === 3 ? " show " : ""
                        }`}
                      >
                        <div className="accordion-body">
                          Many desktop publishing packages and web page editors now use
                          Lorem Ipsum as their default model text, search for
                          &apos;lorem ipsum&apos; will uncover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
