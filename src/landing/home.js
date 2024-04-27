import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import SwiperSlider from './swiper';


const HomeLanding = () => {
  const container = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
          {
              "symbols": [
                  {
                      "description": "BTC/USDT",
                      "proName": "BINANCE:BTCUSDT"
                    },
                    {
                      "description": "ETH/USDT",
                      "proName": "BINANCE:ETHUSDT"
                    },
                    {
                      "description": "SOL/USDT",
                      "proName": "BINANCE:SOLUSDT"
                    },
                    {
                      "description": "BNB/USDT",
                      "proName": "BINANCE:BNBUSDT"
                    },
                    {
                      "description": "DOGE/USDT",
                      "proName": "BINANCE:DOGEUSDT"
                    },
                    {
                      "description": "MATIC/USDT",
                      "proName": "BINANCE:MATICUSDT"
                    },
                    {
                      "description": "SHIB/USDT",
                      "proName": "BINANCE:SHIBUSDT"
                    },
                    {
                      "description": "GALA/USDT",
                      "proName": "BINANCE:GALAUSDT"
                    },
                    {
                      "description": "OP/USDT",
                      "proName": "BINANCE:OPUSDT"
                    },
                    {
                      "description": "DOT/USDT",
                      "proName": "BINANCE:DOTUSDT"
                    }
                  ],
                  "showSymbolLogo": true,
                  "colorTheme": "dark",
                  "isTransparent": false,
                  "displayMode": "compact",
                  "locale": "en"
                }`;
    container.current.appendChild(script);
  }, []);
  return (
    <main>

      <SwiperSlider/>

      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>

      <section className="py-5 in-cirro-7">
        <div className="container my-2">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 mt-1">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2 g-md-2 gx-lg-2 text-center">
                <div className="col">
                  <img src="img/in-cirro-2-icon-1.svg" alt="icon" width="64" height="64" />
                  <h6 className="fw-bold mt-2">Wide Range of Trading Instruments</h6>
                </div>
                <div className="col">
                  <img src="img/in-cirro-2-icon-2.svg" alt="icon" width="64" height="64" />
                  <h6 className="fw-bold mt-2">Unparalleled Trading Conditions</h6>
                </div>
                <div className="col">
                  <img src="img/in-cirro-2-icon-3.svg" alt="icon" width="64" height="64" />
                  <h6 className="fw-bold mt-2">Globally Licensed & Regulated</h6>
                </div>
                <div className="col">
                  <img src="img/in-cirro-2-icon-4.svg" alt="icon" width="64" height="64" />
                  <h6 className="fw-bold mt-2">Committed to Forex Education</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 col-lg-5">
              <h1 className="mb-3">Build a Better Future with CexAffiliate</h1>
              <p>We offer a safe, dependable, and open environment for trading cryptocurrencies, stocks, forex, commodities, indices, and options; providing direct access to the financial markets with the advantages of competitive pricing, close spreads, low commission, and protection against negative balances.</p>
              <div className="row row-cols-1 row-cols-md-3 gy-2 g-md-2 gx-lg-2 mt-1">
                <div className="col">
                  <div className="card">
                    <div className="card-body text-center">
                      <p className="fs-4 text-info mb-0">4000+</p>
                      <p className="text-muted">Markets</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body text-center">
                      <p className="fs-4 text-info mb-0">8255</p>
                      <p className="text-muted">Staffs</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body text-center">
                      <p className="fs-4 text-info mb-0">983732</p>
                      <p className="text-muted">Traders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="py-5 bg-primary text-white in-cirro-1">
        <div className="container">
          <div className="row gy-2 gy-md-2 gx-lg-3">
            <div className="col-md-12 col-lg-5">
              <h1 className="text-white">Experience superior trading conditions</h1>
              <p>View our impressive trading statistics and find out more about how we execute trading orders.</p>
            </div>
            <div className="col-md-12 col-lg-7">

            </div>
            <div className="col-12 mt-5">
              <div className="row row-cols-1 row-cols-md-4 row-cols-lg-6 gx-5 gy-3 gy-lg-0">
                <div className="col">
                  <div className="ticker-image d-flex align-items-center">
                    <img className="opacity-75" src="img/in-cirro-1-ticker-1.svg" alt="ticker-logo" width="138" height="34" />
                  </div>
                  <div className="ticker-price">
                    2,120.67 (3.40%)<span className="ticker-down-arrow"><i className="fas fa-circle-down"></i></span>
                  </div>
                </div>
                <div className="col">
                  <div className="ticker-image d-flex align-items-center">
                    <img className="opacity-75" src="img/in-cirro-1-ticker-2.svg" alt="ticker-logo" width="139" height="35" />
                  </div>
                  <div className="ticker-price">
                    244.97 (2.70%)<span className="ticker-up-arrow"><i className="fas fa-circle-up"></i></span>
                  </div>
                </div>
                <div className="col">
                  <div className="ticker-image d-flex align-items-center">
                    <img className="opacity-75" src="img/in-cirro-1-ticker-3.svg" alt="ticker-logo" width="135" height="27" />
                  </div>
                  <div className="ticker-price">
                    160.87 (5.01%)<span className="ticker-down-arrow"><i className="fas fa-circle-down"></i></span>
                  </div>
                </div>
                <div className="col">
                  <div className="ticker-image d-flex align-items-center">
                    <img className="opacity-75" src="img/in-cirro-1-ticker-4.svg" alt="ticker-logo" width="130" height="20" />
                  </div>
                  <div className="ticker-price">
                    639.30 (1.20%)<span className="ticker-up-arrow"><i className="fas fa-circle-up"></i></span>
                  </div>
                </div>
                <div className="col d-none d-lg-block">
                  <div className="ticker-image d-flex align-items-center">
                    <img className="opacity-75" src="img/in-cirro-1-ticker-5.svg" alt="ticker-logo" width="137" height="32" />
                  </div>
                  <div className="ticker-price">
                    121.08 (2.30%)<span className="ticker-up-arrow"><i className="fas fa-circle-up"></i></span>
                  </div>
                </div>
                <div className="col d-none d-lg-block">
                  <div className="ticker-image d-flex align-items-center">
                    <img className="opacity-75" src="img/in-cirro-1-ticker-6.svg" alt="ticker-logo" width="114" height="31" />
                  </div>
                  <div className="ticker-price">
                    104.78 (1.08%)<span className="ticker-up-arrow"><i className="fas fa-circle-up"></i></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="py-5 in-cirro-2">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <h1 className="mb-1">Trade Crypto Easily.</h1>
              <p className="lead">Join the world's fast-growing trading platform for positive results!</p>
              <p className="lead"><b>Get 20% commission by using our platform!</b></p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2 g-md-2 gx-lg-2">
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <img src="img/in-cirro-2-icon-1.svg" alt="icon" width="46" height="46" />
                  <h2 className="h5 mt-4">Live Trading</h2>
                  <p>Trade a wide range of popular assets, stocks, forex, crypto and commodities.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <img src="img/in-cirro-2-icon-2.svg" alt="icon" width="46" height="46" />
                  <h2 className="h5 mt-4">Swift Earning</h2>
                  <p>Earn from the financial market, transactions worth billions taking place every day.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <img src="img/in-cirro-2-icon-3.svg" alt="icon" width="46" height="46" />
                  <h2 className="h5 mt-4">Innovative Platform</h2>
                  <p>Learn basic concepts of trading/investment and why you should be a part of it.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <img src="img/in-cirro-2-icon-4.svg" alt="icon" width="46" height="46" />
                  <h2 className="h5 mt-4">Trading Insights</h2>
                  <p>Get analysis, signals and actionable trade ideas from our expert analysts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 in-cirro-3">
        <div className="container">
          <div className="row d-flex align-items-center gx-5 mb-3">
            <div className="col-md-12 col-lg-5 mb-5 mb-md-3 mb-lg-0">
              <span className="badge bg-secondary mb-3">Popular instruments</span>
              <h1 className="mt-2 mb-1">Live prices on popular markets</h1>
              <p className="lead mb-4">Inform your decisions with timely dispatches from our team of global analysts.</p>
              <Link to="/login" className="btn btn-link"><i className="fas fa-arrow-right"></i>Find out more</Link>
            </div>

          </div>
        </div>
      </section>



      <section className="py-5 in-cirro-13">
        <div className="container mt-3">
          <div className="row d-flex align-items-center gx-5 mb-3">
            <div className="col-md-12 col-lg-5">
              <h1>Unlocking Financial Freedom: Your Path to a Debt-Free Future</h1>
              <p className="lead mb-3">We believe that everyone deserves a chance to live a debt-free life, unburdened by financial stress. Whether you're an individual struggling with personal debt or a business seeking to eliminate financial liabilities, we have the tools and expertise to make it happen.</p>
              <ul className="fa-ul lh-lg">
                <li><span className="fa-li"><i className="fas fa-check-square text-info"></i></span>Personalized Financial Solutions</li>
                <li><span className="fa-li"><i className="fas fa-check-square text-info"></i></span>Innovative Business Strategies</li>
                <li><span className="fa-li"><i className="fas fa-check-square text-info"></i></span>Education and Empowerment</li>
                <li><span className="fa-li"><i className="fas fa-check-square text-info"></i></span>Transparent and Ethical Practices</li>
              </ul>
              <p className="small text-muted mt-3">Find out more about <Link to="/" className="link-info text-decoration-none">how we operate.</Link></p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 bg-primary text-white in-cirro-8">
        <div className="container my-2">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2 g-md-2 gx-lg-2">
            <div className="col d-flex align-items-center mb-3 mb-md-0">
              <div>
                <h1 className="text-white">Begin your journey!</h1>
                <p className="lead mb-4">Explore different trade types to trade on your preferred market.</p>
                <Link to="/login" className="btn btn-link"><i className="fas fa-arrow-right"></i>Start Trading</Link>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card text-center">
                <div className="card-body">
                  <img className="mt-1" src="img/in-cirro-2-icon-5.svg" alt="icon" width="56" height="56" />
                  <h5 className="fw-bold mt-4 text-white">Market Analysis</h5>
                  <p>More than 100 most widely-used technical indicators and widgets. Control your trades with features like Stop Loss/Take Profit.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card text-center">
                <div className="card-body">
                  <img className="mt-1" src="img/in-cirro-2-icon-2.svg" alt="icon" width="56" height="56" />
                  <h5 className="fw-bold mt-4 text-white">Global Access</h5>
                  <p>Select from a list of options on widely traded assets representing a particular market sector or national economy.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-stretch">
              <div className="card text-center">
                <div className="card-body">
                  <img className="mt-1" src="img/in-cirro-2-icon-6.svg" alt="icon" width="56" height="56" />
                  <h5 className="fw-bold mt-4 text-white">Various Assets</h5>
                  <p>Trade your way with CexAffiliate’s app for mobile and desktop. Trading hourly, daily or weekly provides unique opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5 in-cirro-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-2 text-center mt-1">
                <div className="col">
                  <div className="icon-wrap icon-wrap-large bg-primary rounded-circle flex-shrink-0 mb-2">
                    <img src="img/in-avo-6-icon-1.png" alt="icon" width="54" height="54" />
                  </div>
                  <h6 className="text-secondary">Wide Range of Trading Instruments</h6>
                </div>
                <div className="col">
                  <div className="icon-wrap icon-wrap-large bg-primary rounded-circle flex-shrink-0 mb-2">
                    <img src="img/in-avo-6-icon-2.png" alt="icon" width="54" height="54" />
                  </div>
                  <h6 className="text-secondary">Unparalled Trading Conditions</h6>
                </div>
                <div className="col">
                  <div className="icon-wrap icon-wrap-large bg-primary rounded-circle flex-shrink-0 mb-2">
                    <img src="img/in-avo-6-icon-3.png" alt="icon" width="54" height="54" />
                  </div>
                  <h6 className="text-secondary">Globaly Licensed &amp; Regulated</h6>
                </div>
                <div className="col">
                  <div className="icon-wrap icon-wrap-large bg-primary rounded-circle flex-shrink-0 mb-2">
                    <img src="img/in-avo-6-icon-4.png" alt="icon" width="54" height="54" />
                  </div>
                  <h6 className="text-secondary">Commited to Forex Education</h6>
                </div>
                <div className="col d-none d-lg-block">
                  <div className="icon-wrap icon-wrap-large bg-primary rounded-circle flex-shrink-0 mb-2">
                    <img src="img/in-avo-6-icon-5.png" alt="icon" width="54" height="54" />
                  </div>
                  <h6 className="text-secondary">Regular Contents &amp; Promotions</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-md-2 row-cols-lg-3 mt-3 mt-md-5 gy-4 gy-md-0">
            <div className="col d-md-none d-lg-block">
              <div className="card card-body">
                <div className="col d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="mb-0">Learn</h3>
                    <p className="text-muted">Knowledge to get started</p>
                  </div>
                  <div className="icon-wrap bg-primary rounded-circle flex-shrink-0 ms-2">
                    <i className="fas fa-graduation-cap fa-xl text-info"></i>
                  </div>
                </div>
                <ul className="fa-ul lh-lg mt-2 mb-4">
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>FREE Demo Account</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Step-by step tutorials &amp; articles</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Online webinars &amp; local seminars</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Your own Account Manager</li>
                </ul>
                <Link to="/" className="btn btn-outline-primary rounded-pill">Demo account<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
              </div>
            </div>
            <div className="col">
              <div className="card card-body">
                <div className="col d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="mb-0">Trade</h3>
                    <p className="text-muted">Take your first profit</p>
                  </div>
                  <div className="icon-wrap bg-primary rounded-circle flex-shrink-0 ms-2">
                    <i className="fas fa-chart-area fa-xl text-info"></i>
                  </div>
                </div>
                <ul className="fa-ul lh-lg mt-2 mb-4">
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Tight spreads</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Superfast trade execution</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Hi-tech forex trading tools</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Ultimate risk protection &amp; security</li>
                </ul>
                <Link to="/register" className="btn btn-outline-primary rounded-pill">Real account<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
              </div>
            </div>
            <div className="col">
              <div className="card card-body">
                <div className="col d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="mb-0">Invest</h3>
                    <p className="text-muted">Choose the best portfolio</p>
                  </div>
                  <div className="icon-wrap bg-primary rounded-circle flex-shrink-0 ms-2">
                    <i className="fas fa-file-contract fa-xl text-info"></i>
                  </div>
                </div>
                <ul className="fa-ul lh-lg mt-2 mb-4">
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>No need to be a Pro</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Large number of strategies</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Profit whenever Managers earn</li>
                  <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Full control of your Investment</li>
                </ul>
                <Link to="/login" className="btn btn-outline-primary rounded-pill">Start Investing<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      <br />


      <section className="py-5 in-cirro-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-body">
                <div className="row gx-0 d-flex align-items-center position-relative">
                  <div className="col-md-5 col-lg-6">
                    <img className="testi-image" src="img/in-cirro-4-people.png" alt="testimonial" width="418" height="441" />
                  </div>
                  <div className="col-md-7 col-lg-6">
                    <blockquote className="blockquote">
                      <p>CexAffiliate provide clients with excellent customer service and guarantees account safety.</p>
                    </blockquote>
                    <h2 className="h6 mt-3 mb-0">Anita T.</h2>
                    <span className="blockquote-footer">Day Trader</span>
                    <br /><br />
                    <div className="mt-3 mt-md-0 ps-md-5">
                      <Link to="/about" className="btn btn-link"><i className="fas fa-arrow-right"></i>See More About Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5 in-cirro-3">
        <div className="container">
          <div className="row d-flex align-items-center gx-5 mb-3">
            <div className="col-md-12 col-lg-5 mb-5 mb-md-3 mb-lg-0">
              <span className="badge bg-secondary mb-3">Crypto Purchases</span>
              <h1 className="mt-2 mb-1">Buy Crypto with Ease!</h1>
              <p className="lead mb-4">Same process, fast approach. Learn everything in one piece.</p>
              <Link to="/register" className="btn btn-link"><i className="fas fa-arrow-right"></i>Get Started</Link>
            </div>
            <div className="col-md-12 col-lg-7 mt-md-5">
              <div className="card card-body ms-lg-5">
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-md-12 col-lg-10">
              <div className="card card-body text-center">
                <h2 className="mt-2 mb-3">Fast account opening in <span className="text-highlight">3 simple steps</span></h2>
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col">
                    <div className="icon-wrap bg-primary rounded-circle flex-shrink-0 mb-1">
                      <font className="fw-bold fs-4" color="white">1</font>
                    </div>
                    <h5 className="mt-1">Register</h5>
                    <p>Choose an account type and submit your application</p>
                  </div>
                  <div className="col">
                    <div className="icon-wrap bg-primary rounded-circle flex-shrink-0 mb-1">
                      <font className="fw-bold fs-4" color="white">2</font>
                    </div>
                    <h5 className="mt-1">Fund</h5>
                    <p>Fund your account using a wide range of funding methods</p>
                  </div>
                  <div className="col">
                    <div className="icon-wrap bg-primary rounded-circle flex-shrink-0 mb-1">
                      <font className="fw-bold fs-4" color="white">3</font>
                    </div>
                    <h5 className="mt-1">Trade</h5>
                    <p>Start trading all available crypto and stocks that you like</p>
                  </div>
                </div>
                <Link to="/register" className="btn btn-outline-primary rounded-pill mt-2">Create Account<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
              </div>
            </div>
          </div>

        </div>
      </section>




      <div align="center">
        <h1 className="uk-margin-remove">Choose your <span className="in-highlight">account</span> type</h1>
        <p className="uk-text-lead uk-text-muted uk-margin-small-top">Simply select your preferred account type and get started below.</p>
      </div>

      <div className="row row-cols-md-2 row-cols-lg-3 mt-3 mt-md-5 gy-4 gy-md-0">
        <div className="col d-md-none d-lg-block">
          <div className="card card-body">

            <h3 className="mb-0">Starter</h3>
            <p className="text-muted">Minimum Funding <span className="badge bg-primary mb-3"><font color="white">USD 1,000+</font></span></p>
            <hr />

            <ul className="fa-ul lh-lg mt-2 mb-4">
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>40-50% ROI</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Moneyback Guarantee</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>24/7 Customer Service*</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Advanced risk management</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Low minimum deposit</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>20% Trade Commission</li>
            </ul>
            <Link to="/login" className="btn btn-outline-primary rounded-pill">Get Started<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
          </div>
        </div>
        <div className="col">
          <div className="card card-body">

            <h3 className="mb-0">Silver</h3>
            <p className="text-muted">Minimum Funding <span className="badge bg-primary mb-3"><font color="white">USD 10,000+</font></span></p>
            <hr />

            <ul className="fa-ul lh-lg mt-2 mb-4">
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>70-150% ROI</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Moneyback Guarantee</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>24/7 Customer Service*</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Advanced risk management</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Low minimum deposit</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>20% Trade Commission</li>
            </ul>
            <Link to="/login" className="btn btn-outline-primary rounded-pill">Get Started<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
          </div>
        </div>
        <div className="col">
          <div className="card card-body">

            <h3 className="mb-0">Gold</h3>
            <p className="text-muted">Minimum Funding <span className="badge bg-primary mb-3"><font color="white">USD 50,000+</font></span></p>
            <hr />

            <ul className="fa-ul lh-lg mt-2 mb-4">
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>100-300% ROI</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Moneyback Guarantee</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>24/7 Customer Service*</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Advanced risk management</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>Low minimum deposit</li>
              <li><span className="fa-li"><i className="fas fa-check text-primary"></i></span>20% Trade Commission</li>
            </ul>
            <Link to="/login" className="btn btn-outline-primary rounded-pill">Get Started<i className="fas fa-arrow-right fa-sm ms-1"></i></Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/" className="btn btn-info">See other plans<i className="fas fa-arrow-right ms-1"></i></Link>
      </div>


      <br />



      <section className="pt-2 mb-n3">
        <div align="center">
          <h1>Stories from <span className="in-highlight">traders</span> within...</h1>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-0 gx-md-0 gx-lg-3 gy-3 gy-md-3 gy-lg-0">
            <div className="col">
              <div className="card position-relative">
                <div className="card-body">
                  <img className="position-absolute bottom-0 end-0" src="img/blockit/palm.png" alt="client-testimoni" width="200" />
                  <blockquote className="blockquote text-muted">
                    <p>For the past three years, I have worked with CexAffiliate. The service I got feels highly great. The comfort I experience from knowing that our money is being so wisely managed is immeasurable.</p>
                  </blockquote>
                  <div className="mt-4">
                    <img className="mb-2" src="img/favicon.ico" alt="client-logo" width="62" height="62" />
                    <h6 className="mb-0">Lauren Peterson</h6>
                    <span className="blockquote-footer">Daytrader at CexAffiliate</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card position-relative">
                <div className="card-body">
                  <img className="position-absolute bottom-0 end-0" src="img/blockit/palm.png" alt="client-testimoni" width="200" />
                  <blockquote className="blockquote text-muted">
                    <p>This is not thesame with other investment platforms that I have used previously. I would encourage anybody to get in here at CexAffiliate if they truly want to grow and improve their investment portfolio.</p>
                  </blockquote>
                  <div className="mt-4">
                    <img className="mb-2" src="img/favicon.ico" alt="/client-logo" width="62" height="62" />
                    <h6 className="mb-0">Davies Robert</h6>
                    <span className="blockquote-footer">Trader at CexAffiliate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div align="center">
            <Link to="customers.html" className="uk-button uk-button-text">See more traders stories from all over the world<i className="fas fa-arrow-circle-right uk-margin-small-left"></i></Link>
          </div>
        </div>
      </section>




      <section className="py-5 in-cirro-14" style={{ background: " url(img/in-cirro-14-background.png) no-repeat bottom, linear-gradient(0deg, #F5F7F9 50%, #fff 100%)" }}>
        <div className="container my-2">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 mt-1">
              <h1 className="text-center">Connect to global capital markets</h1>
              <p className="text-center">Access 4,000+ trading instruments and professional asset management on <span className="text-highlight">award-winning platforms.</span></p>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gy-2 g-md-2 gx-lg-2 text-center mt-3">
                <div className="col d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-body">
                      <img className="mt-2" src="img/in-cirro-2-icon-1.svg" alt="icon" width="54" height="54" />
                      <h5 className="fw-bold mt-2 mb-1">Forex</h5>
                      <p>Trade 70 major, minor & exotic currency pairs with competitive trading conditions.</p>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-body">
                      <img className="mt-2" src="img/in-cirro-2-icon-2.svg" alt="icon" width="54" height="54" />
                      <h5 className="fw-bold mt-2">Metals</h5>
                      <p>Trade metal commodities such as Gold, Silver & Platinum.</p>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-body">
                      <img className="mt-2" src="img/in-cirro-2-icon-3.svg" alt="icon" width="54" height="54" />
                      <h5 className="fw-bold mt-2">Cryptocurrencies</h5>
                      <p>Trade Bitcoin, Ether, Doge & more crypto & altcoin CFDs</p>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-body">
                      <img className="mt-2" src="img/in-cirro-2-icon-4.svg" alt="icon" width="54" height="54" />
                      <h5 className="fw-bold mt-2">Shares</h5>
                      <p>Hundreds of public companies from the US, UK, France & Germany available to trade.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Link to="/login" className="btn btn-info">See other Instruments<i className="fas fa-arrow-right ms-1"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 in-cirro-15 bg-white">
        <div className="container mb-2">
          <div className="row row-cols-1 row-cols-lg-3 gx-0 gx-lg-5 gy-3 gy-lg-0">
            <div className="col border-bottom border-bottom-lg-0 border-end-lg pb-4 pb-lg-0">
              <div className="d-flex align-items-start">
                <img className="mt-1 me-2" src="img/in-cirro-15-image.svg" alt="gh" width="73" height="127" />
                <div>
                  <h3 className="h4">What just happened. And what comes next.</h3>
                  <p className="text-muted">Get timely news and analysis from top publications and financial projects</p>
                  <Link to="/login" className="btn btn-primary mt-1">More insights</Link>
                </div>
              </div>
            </div>
            <div className="col border-bottom border-bottom-lg-0 border-end-lg pb-4 pb-lg-0">
              <div className="d-flex align-items-center text-muted">
                <i className="fas fa-video"></i>
                <p className="fw-bold small text-uppercase ms-1 mb-0">Video</p>
              </div>
              <h3 className="h4 mt-3">Investing for Income</h3>
              <div className="blog-author d-flex align-items-center">
                <small className="text-muted">
                  Anna Gregory<span className="mx-1">•</span>
                </small>
                <small className="text-muted">
                  February 25, 2023
                </small>
              </div>
              <p className="mt-2 mb-4">Income investing means selecting investments designed to deliver a steady stream of income over a certain period. It’s a popular way to chase decent returns – and to potentially beat inflation.</p>
              <Link to="/login" className="btn btn-link"><i className="fas fa-arrow-right"></i>Continue reading</Link>
            </div>
            <div className="col">
              <div className="d-flex align-items-center text-muted">
                <i className="fas fa-file-alt"></i>
                <p className="fw-bold small text-uppercase ms-1 mb-0">Article</p>
              </div>
              <h3 className="h4 mt-3">Countries Leading Crypto</h3>
              <div className="blog-author d-flex align-items-center">
                <small className="text-muted">
                  James Parker<span className="mx-1">•</span>
                </small>
                <small className="text-muted">
                  March 12, 2023
                </small>
              </div>
              <p className="mt-2 mb-4">Different countries and regions are laying the foundation to help drive the crypto bull run. Here is a guide to their regulations and goals.</p>
              <Link to="/login" className="btn btn-link"><i className="fas fa-arrow-right"></i>Continue reading</Link>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5 in-cirro-20 bg-white">
        <div className="container d-flex justify-content-center">
          <div className="col-md-12 col-lg-8">
            <div className="row row-cols-1 row-cols-md-3 gy-3 gy-md-0">
              <div className="col text-center">
                <img src="img/in-cirro-20-award.svg" alt="award" width="84" height="78" />
                <div className="mt-2">
                  <h6 className="mb-0">People's Choice App</h6>
                  <p className="text-muted small mb-0">Summit 2022</p>
                </div>
              </div>
              <div className="col text-center">
                <img src="img/in-cirro-20-award.svg" alt="award" width="84" height="78" />
                <div className="mt-2">
                  <h6 className="mb-0">Top ECN Broker</h6>
                  <p className="text-muted small mb-0">Expo 2020</p>
                </div>
              </div>
              <div className="col text-center">
                <img src="img/in-cirro-20-award.svg" alt="award" width="84" height="78" />
                <div className="mt-2">
                  <h6 className="mb-0">Top Investment Broker</h6>
                  <p className="text-muted small mb-0">Summit 2019</p>
                </div>
              </div>
              <div className="col-md-12 mt-4 mb-2">
                <div className="card card-body p-2">
                  <div className="hstack gap-4 d-flex justify-content-center">
                    <div className="d-none d-lg-block">
                      <Link to="#" className="d-flex align-items-center text-decoration-none">
                        <div className="icon-wrap icon-wrap-small flex-shrink-0 me-1">
                          <i className="fas fa-phone fa-lg text-info"></i>
                        </div>
                        <p className="small text-info mb-0">+14355548555</p>
                      </Link>
                    </div>
                    <div className="vr d-none d-lg-block"></div>
                    <div>
                      <Link to="#" className="d-flex align-items-center text-decoration-none">
                        <div className="icon-wrap icon-wrap-small flex-shrink-0 me-1">
                          <i className="fas fa-envelope-open-text fa-lg text-info"></i>
                        </div>
                        <p className="small text-info mb-0">support@cexafm.com</p>
                      </Link>
                    </div>
                    <div className="vr d-none d-md-block"></div>
                    <div className="d-none d-md-block">
                      <Link to="#" className="d-flex align-items-center text-decoration-none">
                        <div className="icon-wrap icon-wrap-small flex-shrink-0 me-1">
                          <i className="fas fa-comment-dots fa-lg text-info"></i>
                        </div>
                        <p className="small text-info mb-0">24/7 Support</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5 in-cirro-9">
        <div className="container mt-2">
          <div className="row mb-5 gx-0">
            <div className="col-12 col-lg-6 pb-3 pb-lg-0">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <h1 className="mb-1">Beginner <span className="text-info">Trader</span></h1>
                  <p className="mb-1">Our finance consultants and managers are always on standby to support your investing needs.</p>
                </div>
                <div className="col-md-5 col-lg-6 d-flex align-items-end">
                  <ul className="fa-ul">
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Webinars</Link></li>
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Seminars</Link></li>
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Financial events</Link></li>
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Forex calendars</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 border-top border-top-lg-0 border-start-lg pt-3 pt-lg-0 ps-lg-4">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <h1 className="mb-1">Experienced <span className="text-info">Trader</span></h1>
                  <p className="mb-1">Explore endless trading opportunities with tight spreads and no commission with ease.</p>
                </div>
                <div className="col-md-5 col-lg-6 d-flex align-items-end">
                  <ul className="fa-ul">
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Trading strategis</Link></li>
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Metatrader</Link></li>
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Trading Psychology</Link></li>
                    <li><Link to="#" className="link-dark text-decoration-none"><span className="fa-li"><i className="fas fa-arrow-right text-info"></i></span>Market News</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 mt-lg-3">
              <div className="row gx-0">
                <div className="col-md-12 col-lg-2 border-end-lg d-flex align-items-center justify-content-center justify-content-md-center justify-content-lg-start">
                  <h6 className="fw-bold text-muted text-center mb-md-2 mb-lg-0">Featured on</h6>
                </div>
                <div className="col-md-12 col-lg-10">
                  <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 gx-0">
                    <div className="col text-center">
                      <img className="opacity-75 my-2 my-md-1 my-lg-1" src="img/in-cirro-press-1.svg" alt="press-logo" width="128" height="21" />
                    </div>
                    <div className="col text-center">
                      <img className="opacity-75 my-2 my-md-1 my-lg-1" src="img/in-cirro-press-2.svg" alt="press-logo" width="128" height="23" />
                    </div>
                    <div className="col text-center">
                      <img className="opacity-75 my-2 my-md-1 my-lg-1" src="img/in-cirro-press-3.svg" alt="press-logo" width="127" height="24" />
                    </div>
                    <div className="col text-center">
                      <img className="opacity-75 my-2 my-md-1 my-lg-1" src="img/in-cirro-press-4.svg" alt="press-logo" width="126" height="30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-3 in-cirro-10">
        <div className="container mt-0 mt-md-2">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="row d-flex align-items-start">
                <div className="col-md-5 col-lg-6 order-last order-md-first">
                  <img className="w-100" src="img/in-cirro-10-mockup.png" alt="mockup" />
                </div>
                <div className="col-md-7 col-lg-6 pb-5 order-first order-md-last">
                  <h1 className="mb-2">Platform by traders, for traders</h1>
                  <p className="text-muted mb-3 d-none d-lg-block">Seize your opportunity, with technology built design with easy access both on mobile.</p>
                  <Link to="https://apps.apple.com/app/apple-store/id1047225016">
                    <img src="img/in-app-button-apple.svg" alt="apple" width="120" height="40" /></Link>
                  <Link to="https://play.google.com/store/apps/details?id=io.cex.app.prod" className="ms-1">
                    <img src="img/in-app-button-google.svg" alt="google" width="135" height="40" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-4 bg-info in-cirro-6">
        <div className="container">
          <div className="row">
            <div className="col-12 d-md-flex justify-content-md-start align-items-center">
              <div className="border-end-md pe-md-5 d-block">
                <h2 className="text-white mb-0">Start investing today.</h2>
              </div>
              <div className="mt-3 mt-md-0 ps-md-5">
                <Link to="/register" className="btn btn-link"><i className="fas fa-arrow-right"></i>Open account</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

  )
}

export default HomeLanding
