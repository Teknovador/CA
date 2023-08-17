/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/about/5.png";
import Three from "public/images/about/7.png";

import Four from "public/images/blog/1.png";
import Six from "public/images/blog/2.png";
import Seven from "public/images/blog/3.png";
import Five from "public/images/right-up.png";
import Eight from "public/images/right-up2.png";

const LatestArticle = () => {
  return (
    <>
      <div className="blog-area bg-relative bg-sky pd-top-115 pd-bottom-120">
        <Image
          className="top_image_bounce position-top-right"
          src={One}
          alt="img"
        />
        <Image
          className="top_image_bounce position-bottom-right"
          src={Two}
          alt="img"
        />
        <Image
          className="left_image_bounce position-bottom-left"
          src={Three}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title">// Latest Articles</h6>
                <h2 className="title">Blog & News From Us!</h2>
                <p className="content mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour,
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    <Link href="/">Finance</Link>
                    <Link href="/">Investment</Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Mastercards, just pushes deeper into crypto
                    </Link>
                  </h4>
                  <p className="date">January 19, 2023 . 02 Comments</p>
                </div>
                <div className="thumb">
                  <Image src={Four} alt="img" />
                </div>
                <Link className="read-more" href="/blog-details">
                  Read More <Image src={Five} alt="img" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    <Link href="/">Finance</Link>
                    <Link href="/">Company</Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Job market cooling, workers still have power
                    </Link>
                  </h4>
                  <p className="date">January 19, 2023 . 02 Comments</p>
                </div>
                <div className="thumb">
                  <Image src={Six} alt="img" />
                </div>
                <Link className="read-more" href="/blog-details">
                  Read More <Image src={Five} alt="img" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    <Link href="/">Tax</Link>
                    <Link href="/">Investment</Link>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      High inflations is hitting holiday travel plans
                    </Link>
                  </h4>
                  <p className="date">January 19, 2023 . 02 Comments</p>
                </div>
                <div className="thumb">
                  <Image src={Seven} alt="img" />
                </div>
                <Link className="read-more" href="/blog-details">
                  Read More <Image src={Five} alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-wrap text-center mt--50">
        <Link className="blog-page-btn left_image_bounce" href="/blog">
          <Image src={Eight} alt="img" />
        </Link>
      </div>
    </>
  );
};

export default LatestArticle;
