import React from "react";
import Link from "next/link";
import Image from "next/image";

import One from "public/images/blog/09.png";
import Two from "public/images/icon/7.png";
import Three from "public/images/blog/10.png";
import Four from "public/images/team/1.png";
import Five from "public/images/team/2.png";
import Six from "public/images/widget/1.png";
import Seven from "public/images/widget/2.png";
import Eight from "public/images/widget/3.png";

const BlogDetailsArea = () => {
  return (
    <div className="blog-area pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-page-content">
              <div className="single-blog-inner">
                <div className="thumb">
                  <Image src={One} alt="img" />
                </div>
                <div className="details">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there
                    isn&apos;t anything embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary,{" "}
                  </p>
                  <p>
                    making this the first true generator on the Internet. It
                    uses a dictionary of over words, combined with a handful
                    model sentence structures, to generate Lorem Ipsum which
                    looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </p>
                  <blockquote>
                    <Image src={Two} alt="img" />
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est,
                    </p>
                    <Link href="/">David Kingston</Link>
                  </blockquote>
                  <p>
                    making this the first true generator on the Internet. It
                    uses a dictionary of over words, combined with a handful
                    model sentence structures, to generate Lorem Ipsum which
                    looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </p>
                  <Image className="mt-4" src={Three} alt="img" />
                  <h4 className="mt-5">Make Yourself Accountable</h4>
                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth,
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is who loves or pursues or desires to
                    obtain pain of itself,{" "}
                  </p>
                  <div className="tag-and-share">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tags d-inline-block">
                          <strong>Tags : </strong>
                          <Link href="/">Advisor,</Link>
                          <Link href="/">Financials,</Link>
                          <Link href="/">Tax</Link>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3 mt-sm-0 text-sm-end align-self-center">
                        <div className="blog-share">
                          <strong>Share This : </strong>
                          <ul>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-comment">
                <div className="mb-3">
                  <h3>2 Comments</h3>
                </div>
                <ul className="comment-list">
                  <li className="comment">
                    <article id="div-comment-12" className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image className="avatar" alt="" src={Four} />
                          Jonson Makie
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia
                        </p>
                      </div>
                      <div className="date">
                        <Link
                          rel="nofollow"
                          className="comment-reply-link"
                          href="/"
                        >
                          January 19, 2023
                        </Link>
                      </div>
                      <div className="reply">
                        <Link
                          rel="nofollow"
                          className="comment-reply-link"
                          href="/"
                        >
                          Reply
                        </Link>
                      </div>
                    </article>
                  </li>
                  <li className="comment">
                    <article id="div-comment-12" className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image className="avatar" alt="" src={Five} />
                          Willam Jone
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia
                        </p>
                      </div>
                      <div className="date">
                        <Link
                          rel="nofollow"
                          className="comment-reply-link"
                          href="/"
                        >
                          January 19, 2023
                        </Link>
                      </div>
                      <div className="reply">
                        <Link
                          rel="nofollow"
                          className="comment-reply-link"
                          href="/"
                        >
                          Reply
                        </Link>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
              <form className="blog-comment-form">
                <div className="mb-3">
                  <h3>Leave a Reply</h3>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-input-inner">
                      <input type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-input-inner">
                      <input type="text" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-input-inner">
                      <input type="text" placeholder="Website" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-black border-radius">
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="td-sidebar">
              <div className="widget widget_search">
                <form className="search-form">
                  <div className="form-group">
                    <input type="text" placeholder="Search" />
                  </div>
                  <button className="submit-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="widget widget_catagory">
                <h4 className="widget-title">Catagory</h4>
                <ul className="catagory-items">
                  <li>
                    <Link href="/blog">
                      <i className="fa fa-angle-double-right"></i> Investment
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fa fa-angle-double-right"></i> Taxation
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fa fa-angle-double-right"></i> Insight
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fa fa-angle-double-right"></i> Financial
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fa fa-angle-double-right"></i> Strategy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent News</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Image src={Six} alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info">January 19, 2023</div>
                        <h6 className="title">
                          <Link href="/blog-details">
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Image src={Seven} alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info">January 19, 2023</div>
                        <h6 className="title">
                          <Link href="/blog-details">
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Image src={Eight} alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info">
                          <span>January 19, 2023</span>
                        </div>
                        <h6 className="title">
                          <Link href="/blog-details">
                            Condtum Integer urna at faucibus
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_tag_cloud mb-0">
                <h4 className="widget-title">Tags</h4>
                <div className="tagcloud">
                  <Link href="/">Marketing</Link>
                  <Link href="/">Learn</Link>
                  <Link href="/">Business</Link>
                  <Link href="/">Portfolio</Link>
                  <Link href="/">Project</Link>
                  <Link href="/">Art</Link>
                  <Link href="/">Personal</Link>
                  <Link href="/">Landing</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
