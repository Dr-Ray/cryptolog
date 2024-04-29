

import React from 'react'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SwiperSlider = () => {
  return (
    <>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="" style={{height:"600px"}}>
          <div className="row align-items-md-center " style={{ "--bs-gutter-x": "0" }}>
            <div className="col-md-8 col-xl-6 order-first carousel-caption">
              <h1 className="fw-bold display-5">Investment environment with the best pricing</h1>
              <p className="lead mt-3 mb-4 d-none d-xl-block">Discover our Investment Opportunities and Choose the account that fits your trading goals.</p>
              <Link to="/login" className="btn btn-warning">Start trading<i className="fas fa-bolt ms-1"></i></Link>
              <Link to="/register" className="btn btn-link ms-3 d-none d-xl-inline">
                <i className="fas fa-arrow-right"></i>Create Account
              </Link>
            </div>
            <div className="col-md-12 col-xl-12 order-last" >
              <div className="in-carousel-image">
                <img src="img/in-cirro-slide-3.jpg" alt="slide" style={{ height: "600px", width: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>

        <div className=""  style={{height:"600px"}}>
          <div className="row align-items-md-center" style={{ "--bs-gutter-x": "0" }}>
            <div className="col-md-8 col-xl-6 order-first carousel-caption">
              <h1 className="fw-bold display-5">Save time. Get higher return. Multiply wealth.</h1>
              <p className="lead mt-3 mb-4 d-none d-xl-block">Over 100 most widely-used technical indicators. Control your investment with features like SL/TP.</p>
              <Link to="/login" className="btn btn-warning">Start trading<i className="fas fa-bolt ms-1"></i></Link>
              <Link to="/register" className="btn btn-link ms-3 d-none d-xl-inline"><i className="fas fa-arrow-right"></i>Create Account</Link>
            </div>
            <div className="col-md-12 col-xl-12 order-last" >
              <div className="in-carousel-image">
                <img src="img/in-cirro-slide-2.jpg" alt="slide" style={{ height: "600px", width: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>

        <div className=""  style={{height:"600px"}}>
          <div className="row align-items-md-center" style={{ "--bs-gutter-x": "0" }}>
            <div className="col-md-8 col-xl-6 order-first carousel-caption">
              <h1 className="fw-bold display-5">Trade with us for positive results!</h1>
              <p className="lead mt-3 mb-4 d-none d-xl-block">Trade directly without stress. You don’t need a digital wallet or an account with an exchange.</p>
              <Link to="/login" className="btn btn-warning">Start trading<i className="fas fa-bolt ms-1"></i></Link>
              <Link to="/register" className="btn btn-link ms-3 d-none d-xl-inline"><i className="fas fa-arrow-right"></i>Create Account</Link>
            </div>
            <div className="col-md-12 col-xl-12 order-last" >
              <div className="in-carousel-image">
                <img src="img/in-cirro-slide-1.jpg" alt="slide" style={{ height: "600px", width: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </Carousel>

    </>
  )
}

export default SwiperSlider
