/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import twelve from "public/images/about/12.png";
import one from "public/images/team/1.png";
import two from "public/images/team/2.png";
import three from "public/images/team/3.png";
import four from "public/images/team/4.png";
const TeamTwo = () => {
  return (
    <div className="team-area pd-top-115 pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h6 className="sub-title">// Our Team</h6>
              <h2 className="title">Meet the Professionals</h2>
              <p className="content mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-team-inner text-center">
              <Image className="hover-img" src={twelve} alt="img" />
              <div className="thumb">
                <Image src={one} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/team-details">Alextina Ditarson</Link>
                </h4>
                <p>Senior Tax Advisor</p>
                <div className="social">
                  <Link href="/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-inner text-center">
              <Image className="hover-img" src={twelve} alt="img" />
              <div className="thumb">
                <Image src={two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/team-details">Alan Macdonald</Link>
                </h4>
                <p>Senior Tax Advisor</p>
                <div className="social">
                  <Link href="/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-inner text-center">
              <Image className="hover-img" src={twelve} alt="img" />
              <div className="thumb">
                <Image src={three} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/team-details">William Adams</Link>
                </h4>
                <p>Senior Tax Advisor</p>
                <div className="social">
                  <Link href="/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-inner text-center">
              <Image className="hover-img" src={twelve} alt="img" />
              <div className="thumb">
                <Image src={four} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/team-details">Advisor Ditarson</Link>
                </h4>
                <p>Senior Tax Advisor</p>
                <div className="social">
                  <Link href="/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTwo;
