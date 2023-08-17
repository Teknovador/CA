import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/blog/1.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
const Blog = () => {
  return (
    <div className="blog-area bg-relative pd-top-115">
      <div className="container">
        <div className="section-title">
          <h6 className="sub-title">Latest Articles</h6>
          <h2 className="title">Attax News & Blog</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-inner style-2">
              <div className="thumb">
                <Image src={One} alt="img" />
              </div>
              <div className="cat-wrap mb-2">
                <Link className="color-main" href="/">
                  Finance
                </Link>
              </div>
              <h4>
                <Link href="/blog-details">
                  Mastercards, just pushes deeper into crypto
                </Link>
              </h4>
              <p className="date">January 19, 2023</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-inner style-2">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="cat-wrap">
                <Link className="color-main" href="/">
                  Company
                </Link>
              </div>
              <h4>
                <Link href="/blog-details">
                  Job market cooling, workers still have power
                </Link>
              </h4>
              <p className="date">January 19, 2023</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-inner style-2">
              <div className="thumb">
                <Image src={Three} alt="img" />
              </div>
              <div className="cat-wrap">
                <Link className="color-main" href="/">
                  Tax
                </Link>
              </div>
              <h4>
                <Link href="/blog-details">
                  High inflations is hitting holiday travel plans
                </Link>
              </h4>
              <p className="date">January 19, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
