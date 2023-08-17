import React, { useEffect, useRef } from "react";

const Footer = () => {
  const backToTopButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backToTopButton = backToTopButtonRef.current;

    if (backToTopButton) {
      const handleScroll = () => {
        backToTopButton.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        backToTopButton.removeEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      };
    }
  }, [backToTopButtonRef]);

  return (
    <footer className="footer-area bg-cover">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
              <h2 className="animate-text-footer">
                <span className="waviy ms-2">
                  <span style={{ "--i": 1 } as React.CSSProperties}>L</span>
                  <span
                    className="ms-1"
                    style={{ "--i": 2 } as React.CSSProperties}
                  >
                    e
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 3 } as React.CSSProperties}
                  >
                    t
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 4 } as React.CSSProperties}
                  >
                    &apos;
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 5 } as React.CSSProperties}
                  >
                    s
                  </span>
                  <span
                    className="ms-2"
                    style={{ "--i": 6 } as React.CSSProperties}
                  >
                    S
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 7 } as React.CSSProperties}
                  >
                    t
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 8 } as React.CSSProperties}
                  >
                    a
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 9 } as React.CSSProperties}
                  >
                    r
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 10 } as React.CSSProperties}
                  >
                    t
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 11 } as React.CSSProperties}
                  >
                    e
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 12 } as React.CSSProperties}
                  >
                    d
                  </span>
                </span>
              </h2>

              <p>
                For furthur info & support,{" "}
                <a href="contact.html">Contact us.</a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="footer-subscribe">
                <div className="single-input-inner">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <a className="btn btn-white" href="#">
                    Send
                  </a>
                </div>
                <span>We&apos;ll contact you shortly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about pe-xl-4">
              <h4 className="widget-title">The Address</h4>
              <div className="details">
                <p>GLS Evanu 51, Sector 92, Gurgaon, Haryana 122001</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">The Email</h4>
              <div className="details">
                <p>aamityagi1@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">The Phone</h4>
              <div className="details">
                <p>+91 8130052608</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Working Hours</h4>
              <div className="details">
                <p>Mon - Saturday: 9 AM - 6 PM Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 align-self-center mb-1 mb-lg-0">
              <p>Copyright © {new Date().getFullYear()} RELAYUP. All rights reserved.</p>
            </div>
            <div className="col-lg-5 align-self-center text-lg-center mb-3 mb-lg-0">
              <p>Privacy Policy / Terms & Services</p>
            </div>
            <div className="col-lg-3 text-lg-end">
              <ul className="social-media">
                <li>
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="back-to-top" ref={backToTopButtonRef}>
        <span className="back-top">Back to top</span>
      </div>
    </footer>
  );
};

export default Footer;
