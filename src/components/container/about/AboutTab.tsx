/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import One from "public/images/about/7.png";
import Two from "public/images/about/14.png";

const AboutTab = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <div id="about-area" className="about-area bg-sky bg-relative pd-bottom-90">
      <Image
        className="top_image_bounce position-bottom-left"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 col-md-9 "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area pb-0 pe-0 me-0">
              <Image className="about-img-1" src={Two} alt="img" />
            </div>
          </div>
          <div
            className="col-lg-5 align-self-end "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title about-section-title mb-0">
              <h6 className="sub-title">// TRUSTED COMPANY</h6>
              <h2 className="title title-small">
                We are Trusted by More than 8900
              </h2>
              <ul
                className="mission-vision-tab nav nav-pills mb-3 mt-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      (imgTab == 0 ? " active " : " ") +
                      " btn btn-black border-radius nav-link"
                    }
                    onClick={() => setImgTab(0)}
                  >
                    Our Mission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      (imgTab == 1 ? " active " : " ") +
                      " btn btn-black border-radius nav-link"
                    }
                    onClick={() => setImgTab(1)}
                  >
                    Our Vission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      (imgTab == 2 ? " active" : " ") +
                      " btn btn-black border-radius nav-link"
                    }
                    onClick={() => setImgTab(2)}
                  >
                    Our History
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade${
                    imgTab === 0 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="mission-vision-content">
                    <p>
                      Mission enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem nesciunt. Neque porro quisquam
                      est,
                    </p>
                    <p>
                      Qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt
                    </p>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 1 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="mission-vision-content">
                    <p>
                      Vission enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem nesciunt. Neque porro quisquam
                      est,
                    </p>
                    <p>
                      Qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt
                    </p>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 2 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="mission-vision-content">
                    <p>
                      History enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem nesciunt. Neque porro quisquam
                      est,
                    </p>
                    <p>
                      Qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt
                    </p>
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

export default AboutTab;
