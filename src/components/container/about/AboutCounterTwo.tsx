import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutCounterTwo = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="counter-area bg-sky pd-top-90 pd-bottom-120">
      <div className="container">
        <div className="counter-area-inner">
          <h2 className="overlay-title">Company</h2>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={12} duration={3} />}
                  </span>{" "}
                  k
                </h2>
                <h6>Successfully Project Done</h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={450} duration={3} />}
                  </span>
                </h2>
                <h6>Saticfied Global Clients</h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={25} duration={3} />}
                  </span>{" "}
                  m
                </h2>
                <h6>3,280 avg Rating</h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={358} duration={3} />}
                  </span>{" "}
                  +
                </h2>
                <h6>Successfully Project Done</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounterTwo;
