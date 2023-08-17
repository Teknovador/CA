import React from "react";
import Image from "next/image";
import One from "public/images/icon/1.png";
import Two from "public/images/icon/2.png";
import Three from "public/images/icon/3.png";
const AboutIntro = () => {
  return (
    <div className="intro-area bg-light pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={One} alt="img" />
              </div>
              <div className="details">
                <h4>Best Taxation Service</h4>
                <p>
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3 pe-lg-3">
              <div className="thumb mb-4">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>Business Strategy & Growth</h4>
                <p>
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner ps-lg-3">
              <div className="thumb mb-4">
                <Image src={Three} alt="img" />
              </div>
              <div className="details">
                <h4>Highly Dedicated Worker</h4>
                <p>
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
