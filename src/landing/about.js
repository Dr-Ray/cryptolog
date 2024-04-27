import React from 'react'
import { Link } from 'react-router-dom'

const AboutLanding = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="d-none">Breadcrumb</h6>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="#">Home  / About Us</Link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-9">
                <h1>Driven by <span className="text-highlight">experts and leaders</span></h1>
                <p className="lead text-muted">Who are committed to making trading a strength for every individual.</p>
                <p>We've already helped hundreds of people succeed at choosing the right steps in investments and getting the best out of it. And we're just getting started.</p>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 gx-0 gx-md-3 gx-lg-5 mt-4">
                  <div className="col border-end-md-0 border-end-lg">
                    <h4 className="fw-bold">Our aim</h4>
                    <p>To help people discover the world of trading: The ins & outs of the market, relevant information and market dynamics.</p>
                    <Link className="btn btn-link link-primary text-decoration-none p-0" to="/login">Watch the video<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                    <hr className="d-lg-none my-3 my-md-3" />
                  </div>
                  <div className="col border-end-md-0 border-end-lg">
                    <h4 className="fw-bold">Our team</h4>
                    <p>We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed investor.</p>
                    <Link className="btn btn-link link-primary text-decoration-none p-0" to="/login">Meet the team<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                    <hr className="d-lg-none my-3 my-md-3" />
                  </div>
                  <div className="col">
                    <h4 className="fw-bold">Our culture</h4>
                    <p>Combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting—and more approachable.</p>
                    <Link className="btn btn-link link-primary text-decoration-none p-0" to="/login">See our values<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="pt-2 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card bg-white" style="background-image: url(img/blockit/in-team-background-1.png); background-repeat: no-repeat;">
                            <div className="card-body py-4">
                                <div className="row justify-content-center text-center mb-1">
                                    <div className="col-md-10 col-lg-8">
                                        <h2 className="fw-bold">Our Leaders</h2>
                                        <p>We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed investor.</p>
                                    </div>
                                </div>
                                <div className="row row-cols-md-1 row-cols-lg-3 text-center gy-2 gy-md-3 gx-0 gx-md-3 gx-lg-5 mb-3">
                                    <div className="col">
                                        <img className="mb-2" src="img/blockit/in-team-1.png" alt="image-team" width="200" height="200"/>
                                        <h5 className="fw-bold mb-1">Cynthia Dixon</h5>
                                        <span className="badge bg-secondary mb-2">Chief Executive Officer</span>
                                        <p>Omnis voluptas assumenda est dolor repellendus autem debit officiis</p>
                                        <div>
                                            <Link className="color-facebook me-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link className="color-twitter me-2" to="#"><i className="fab fa-twitter"></i></Link>
                                            <Link className="color-linkedin" to="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <img className="mb-2" src="img/blockit/in-team-4.png" alt="image-team" width="200" height="200"/>
                                        <h5 className="fw-bold mb-1">Bryan Greene</h5>
                                        <span className="badge bg-secondary mb-2">Human Resources</span>
                                        <p>Omnis voluptas assumenda est dolor repellendus autem debit officiis</p>
                                        <div>
                                            <Link className="color-behance me-2" to="#"><i className="fab fa-behance"></i></Link>
                                            <Link className="color-twitter me-2" to="#"><i className="fab fa-twitter"></i></Link>
                                            <Link className="color-facebook" to="#"><i className="fab fa-facebook-f"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <img className="mb-2" src="img/blockit/in-team-2.png" alt="image-team" width="200" height="200"/>
                                        <h5 className="fw-bold mb-1">Arthur Parker</h5>
                                        <span className="badge bg-secondary mb-2">Executive Assistant</span>
                                        <p>Omnis voluptas assumenda est dolor repellendus autem debit officiis</p>
                                        <div>
                                            <Link className="color-dribbble me-2" to="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link className="color-twitter me-2" to="#"><i className="fab fa-twitter"></i></Link>
                                            <Link className="color-pinterest" to="#"><i className="fab fa-pinterest"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="card">
                  <div className="card-body p-3 p-md-5">
                    <h2 className="fw-bold">Meet Us</h2>
                    <p>We are a driven, motivated people who believe that personal engagement is a sense of ownership, and a commitment to investing gives them control over financial future. SignalBlaze has become one of the largest growing crypto/stock trading companies listed in CFD brokerage in the world.</p>
                    <p>We have offices in over 12 countries including UK, China, Germany, France and Australia. We are also regulated by the world's biggest supervision authorities. Always providing top-notch trading experience for our clients and becoming one of the best in the industry. We never settle for less as we help our customers grow!</p>
                    <div className="card bg-light border-0 mt-4 mb-1">
                      <div className="card-body px-2 py-1">
                        <small>For general inquiries please contact <Link className="link-primary text-decoration-none" to="mailto:">info@signalblaze.com</Link></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="row row-cols-1 row-cols-lg-2 align-items-center gy-3">
                  <div className="col text-md-center text-lg-start">
                    <h4 className="fw-bold text-muted mb-1">Number speaks</h4>
                    <h1 className="fw-bold">We're always ready for a challenge.</h1>
                    <Link to="/login" className="btn btn-info mt-2">Learn more<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                  </div>
                  <div className="col">
                    <div className="row align-items-start gx-0 mb-2 mb-md-4">
                      <div className="col-12 col-md-3 text-md-end border-bottom border-info">
                        <h1 className="fw-bold text-info">
                          <span className="count" data-counter-end="270">0</span>
                        </h1>
                      </div>
                      <div className="col-12 col-md-9 mt-2 mt-md-0 ps-md-4">
                        <h5 className="fw-bold">Trading instruments</h5>
                        <p>The most widely-used technical indicators and widgets. Control your trades with features like Stop Loss/Take Profit.</p>
                      </div>
                    </div>
                    <div className="row align-items-start gx-0">
                      <div className="col-12 col-md-3 text-md-end border-bottom border-info">
                        <h1 className="fw-bold text-info">
                          <span className="count" data-counter-end="12">0</span>
                        </h1>
                      </div>
                      <div className="col-12 col-md-9 mt-2 mt-md-0 ps-md-4">
                        <h5 className="fw-bold">Countries covered</h5>
                        <p>We're global with 24/7 Support, always available to help you. Just make use of the LiveChat if you need support.</p>
                      </div>
                    </div>
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

export default AboutLanding
