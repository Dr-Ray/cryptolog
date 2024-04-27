import React from 'react'
import { Link } from 'react-router-dom'

const CustomersLanding = () => {
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
    <section className="py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-9">
                    <div className="row align-items-center gx-0 gx-md-3 gx-lg-3">
                        <div className="col-12 col-md-8 col-lg-8">
                           
                          <h1 className="fw-bold mb-2">Stories <span className="text-highlight">from</span> our customers.</h1>
                            <p className="lead text-muted">How we help them engage trades so their investments can grow!</p>
                            <p>Take Our Clients’ Word for It. Do you want to know why people like working with us? Here’s what they have to say about it.</p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 mt-3 mt-md-0 mt-lg-0">
                            <ul className="list-unstyled">
                                <li className="border-bottom pb-2">
                                    <div className="d-flex align-items-start">
                                        <div className="me-2">
                                            <div className="icon-wrap bg-info flex-shrink-0">
                                                <i className="fas fa-paper-plane fa-lg text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="fw-bold mb-0">
                                              <span className="count" data-counter-end="4000">0</span>+
                                            </h3>
                                            <div className="badge bg-secondary mb-0">Traded Markets</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-2">
                                    <div className="d-flex align-items-start">
                                        <div className="me-2">
                                            <div className="icon-wrap bg-info flex-shrink-0">
                                                <i className="fas fa-user-tie fa-lg text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="fw-bold mb-0">
                                              <span className="count" data-counter-end="983732">0</span>
                                            </h3>
                                            <div className="badge bg-secondary mb-0">Investors engaged</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-2 mb-n3">
   <div className="container">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 gx-0 gx-md-0 gx-lg-3 gy-3 gy-md-3 gy-lg-0">
                <div className="col">
                    <div className="card position-relative">
                        <div className="card-body">
                            <img className="position-absolute bottom-0 end-0" src="img/blockit/palm.png" alt="client-testimoni" width="200"/>
                            <blockquote className="blockquote text-muted">
                                <p>For the past three years, I have worked with CexAffiliate. The service I got feels highly great. The comfort I experience from knowing that our money is being so wisely managed is immeasurable. Thank you always!</p>
                            </blockquote>
                            <div className="mt-4">
                                <img className="mb-2" src="img/favicon.ico" alt="client-logo" width="62" height="62"/>
                                <h6 className="mb-0">Lauren Peterson</h6>
                                <span className="blockquote-footer">Daytrader at CexAffiliate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card position-relative">
                        <div className="card-body">
                            <img className="position-absolute bottom-0 end-0" src="img/blockit/palm.png" alt="client-testimoni" width="200"/>
                            <blockquote className="blockquote text-muted">
                                <p>This is not thesame with other investment platforms that I have used previously. I would encourage anybody to get in here at CexAffiliate if they truly want to grow and improve their investment portfolio.</p>
                            </blockquote>
                            <div className="mt-4">
                                <img className="mb-2" src="img/favicon.ico" alt="client-logo" width="62" height="62"/>
                                <h6 className="mb-0">Davies Robert</h6>
                                <span className="blockquote-footer">Trader at CexAffiliate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-5">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 gx-0 gx-md-0 gx-lg-3 gy-3 gy-md-3 gy-lg-0">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src="img/favicon.ico" alt="client-logo" width="64" height="64"/>
                            <blockquote className="blockquote text-muted my-4">
                                <p>Since making an investment with CexAffiliate, I'm provided with the stability and a sense of confidence in the lifestyle I can enjoy. I have quickly noticed growth in my investment portfolio, which is a reassuring sign. I truly recommend.</p>
                            </blockquote>
                            <h6 className="mb-0">Jakes Terrence</h6>
                            <span className="blockquote-footer">Trader at CexAffiliate</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src="img/favicon.ico" alt="client-logo" width="64" height="64"/>
                            <blockquote className="blockquote text-muted my-4">
                                <p>I have used many platforms but this is straightforward and has improved my investment boundlessly. If you are reluctant about joining, attempt it for a month and you will perceive how smooth it is. Great platform!</p>
                            </blockquote>
                            <h6 className="mb-0">Alison Jeremy</h6>
                            <span className="blockquote-footer">Trader at CexAffiliate</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img src="img/favicon.ico" alt="client-logo" width="64" height="64"/>
                            <blockquote className="blockquote text-muted my-4">
                                <p>Your administration isn't just giving productive investment ideas, but showing me how to examine markets. I appreciate that, and your itemized answers to my inquiries is a Yes Yes!</p>
                            </blockquote>
                            <h6 className="mb-0">Lisa Franklin</h6>
                            <span className="blockquote-footer">Trader at CexAffiliate</span>
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

export default CustomersLanding
