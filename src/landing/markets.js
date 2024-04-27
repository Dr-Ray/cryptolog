import React from 'react'
import { Link } from 'react-router-dom'

const MarketsLanding = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="d-none">Breadcrumb</h6>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="py-5 card-style-10">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-2">
                <h1 className="fw-bold mb-2">Explore our <span className="text-highlight">Markets</span></h1>
                <p className="lead text-muted">Trading becomes easy with the right steps.</p>
                <p>Some believe you must choose between an online broker and a wealth management firm. At SignalBlaze, you don’t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.</p>
              </div>
            </div>

            <br/><br/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
              <div className="col">
                <div className="card card-green">
                  <div className="card-body p-3">
                    <div className="icon-wrap flex-shrink-0">
                      <i className="fas fa-seedling fa-lg text-secondary"></i>
                    </div>
                    <h5 className="fw-bold mt-4">
                      <Link to="#" className="link-light text-decoration-none d-flex justify-content-between align-items-center">
                        Investing
                        <i className="fas fa-angle-right fa-xs"></i>
                      </Link>
                    </h5>
                    <hr />
                    <p className="small text-white text-opacity-75">A wide selection of investment product to help build diversified portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-blue">
                  <div className="card-body p-3">
                    <div className="icon-wrap flex-shrink-0">
                      <i className="fas fa-chart-bar fa-lg text-secondary"></i>
                    </div>
                    <h5 className="fw-bold mt-4">
                      <Link to="#" className="link-light text-decoration-none d-flex justify-content-between align-items-center">
                        Trading
                        <i className="fas fa-angle-right fa-xs"></i>
                      </Link>
                    </h5>
                    <hr />
                    <p className="small text-white text-opacity-75">Powerful trading tools, resources, insight and support</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-purple">
                  <div className="card-body p-3">
                    <div className="icon-wrap flex-shrink-0">
                      <i className="fas fa-chart-pie fa-lg text-secondary"></i>
                    </div>
                    <h5 className="fw-bold mt-4">
                      <Link to="#" className="link-light text-decoration-none d-flex justify-content-between align-items-center">
                        Wealth management
                        <i className="fas fa-angle-right fa-xs"></i>
                      </Link>
                    </h5>
                    <hr />
                    <p className="small text-white text-opacity-50">Dedicated financial consultant to help reach your own specific goals</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-navy">
                  <div className="card-body p-3">
                    <div className="icon-wrap flex-shrink-0">
                      <i className="fas fa-chalkboard-teacher fa-lg text-secondary"></i>
                    </div>
                    <h5 className="fw-bold mt-4">
                      <Link to="#" className="link-light text-decoration-none d-flex justify-content-between align-items-center">
                        Investment advisory
                        <i className="fas fa-angle-right fa-xs"></i>
                      </Link>
                    </h5>
                    <hr />
                    <p className="small text-white text-opacity-75">A wide selection of investing strategies from seasoned portfolio managers</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-grey">
                  <div className="card-body p-3">
                    <div className="icon-wrap flex-shrink-0">
                      <i className="fas fa-funnel-dollar fa-lg text-secondary"></i>
                    </div>
                    <h5 className="fw-bold mt-4">
                      <Link to="#" className="link-light text-decoration-none d-flex justify-content-between align-items-center">
                        Smart portfolio
                        <i className="fas fa-angle-right fa-xs"></i>
                      </Link>
                    </h5>
                    <hr />
                    <p className="small text-white text-opacity-75">A revolutionary, fully-automated investmend advisory services</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-orange">
                  <div className="card-body p-3">
                    <div className="icon-wrap flex-shrink-0">
                      <i className="fas fa-handshake fa-lg text-secondary"></i>
                    </div>
                    <h5 className="fw-bold mt-4">
                      <Link to="#" className="link-light text-decoration-none d-flex justify-content-between align-items-center">
                        Mutual fund advisor
                        <i className="fas fa-angle-right fa-xs"></i>
                      </Link>
                    </h5>
                    <hr />
                    <p className="small text-white text-opacity-75">Specialized guidance from independent local advisor for hight-worth investors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card shadow-sm border-info">
                  <div className="card-body d-lg-flex justify-content-between align-items-center p-4">
                    <h4 className="fw-bold mb-0">Get up to $300 plus 60 days of commission-free stocks</h4>
                    <Link className="btn btn-info mt-2 mt-lg-0" to="/register">Open an Account</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  ) 
}

export default MarketsLanding
