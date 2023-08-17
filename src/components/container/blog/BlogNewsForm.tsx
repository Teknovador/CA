import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/blog/1.png";
import Up from "public/images/right-up.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
import Four from "public/images/blog/4.png";
import Five from "public/images/blog/5.png";

import SearchIcon from "public/images/search.png";

const BlogNewsForm = () => {
  return (
    <div className="blog-area bg-relative bg-light pd-top-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2 className="title">Blog & News From Us!</h2>
              <div className="widget-search mt-4">
                <input type="text" placeholder="Search In Blog" />
                <Link href="/">
                  <Image src={SearchIcon} alt="img" />
                </Link>
              </div>
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
                <Image src={One} alt="img" />
              </div>
              <Link className="read-more" href="/blog-details">
                Read More <Image src={Up} alt="img" />
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
                <Image src={Two} alt="img" />
              </div>
              <Link className="read-more" href="/blog-details">
                Read More <Image src={Up} alt="img" />
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
                <Image src={Three} alt="img" />
              </div>
              <Link className="read-more" href="/blog-details">
                Read More <Image src={Up} alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-inner">
              <div className="details">
                <div className="cat-wrap">
                  <Link href="/">Finance</Link>
                  <Link href="/">Investment</Link>
                </div>
                <h4>
                  <Link href="/blog-details">
                    Just pushes deeper into crypto Mastercards
                  </Link>
                </h4>
                <p className="date">January 19, 2023 . 02 Comments</p>
              </div>
              <div className="thumb">
                <Image src={Four} alt="img" />
              </div>
              <Link className="read-more" href="/blog-details">
                Read More <Image src={Up} alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-inner">
              <div className="details">
                <div className="cat-wrap">
                  <Link href="/">Finance</Link>
                  <Link href="/">Investment</Link>
                </div>
                <h4>
                  <Link href="/blog-details">
                    Tax, Invex just pushes deeper into crypto
                  </Link>
                </h4>
                <p className="date">January 19, 2023 . 02 Comments</p>
              </div>
              <div className="thumb">
                <Image src={Five} alt="img" />
              </div>
              <Link className="read-more" href="/blog-details">
                Read More <Image src={Up} alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-inner">
              <div className="details">
                <div className="cat-wrap">
                  <Link href="/">Finance</Link>
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
                <Image src={Three} alt="img" />
              </div>
              <Link className="read-more" href="/blog-details">
                Read More <Image src={Up} alt="img" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <div className="paginations">
            <Link className="prev page-numbers" href="/">
              <i className="fa fa-angle-left"></i>
            </Link>
            <Link className="page-numbers" href="/">
              1
            </Link>
            <span className="page-numbers current">2</span>
            <Link className="page-numbers" href="/">
              3
            </Link>
            <Link className="next page-numbers" href="/">
              <i className="fa fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsForm;
