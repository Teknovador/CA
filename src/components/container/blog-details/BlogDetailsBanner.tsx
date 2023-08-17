import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/team/1.png";

const BlogDetailsBanner = () => {
  return (
    <div className="blog-details-area pd-top-120 pd-bottom-120">
      <div className="container">
        <Link className="cat" href="/">
          Taxation
        </Link>
        <h2>Filing payroll taxes electronically makes good business sense</h2>
        <div className="author-meta">
          <Image src={One} alt="img" />
          <p>
            <span>Ashton Porter . </span> January 19, 2023 . 02 Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
