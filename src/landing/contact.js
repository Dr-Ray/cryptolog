import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
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
        
        <section className="pt-5 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card bg-info border-0" style={{"backgroundImage": "url(img/blockit/in-content-10-image.png)","backgroundRepeat": "no-repeat", "backgroundPosition": "left bottom"}}>
                            <div className="card-body p-3 p-md-4 p-lg-4">
                                <h1 className="fw-bold text-center mb-2 text-white">Hi, we’re here to help.</h1>
                                <div className="d-flex justify-content-center">
                                    <form className="col-12 col-md-11 col-lg-7 mb-lg-1">
                                        <div className="input-group mb-2">
                                            <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                                            <input type="text" className="form-control form-control-lg" placeholder="Search for articles..."/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-0 gx-md-5 gx-lg-5 mt-4">
                            <div className="col border-end-0 border-end-md border-end-lg">
                                <h4 className="fw-bold border-start border-5 ps-1">How-To's & Tutorials</h4>
                                <div className="d-flex align-items-start mt-2">
                                    <div>
                                        <i className="fas fa-question fa-3x ms-1 ms-md-1 ms-lg-3 text-dark text-opacity-50"></i>
                                    </div>
                                </div>
                                <hr className="d-md-none d-lg-none my-3 my-md-3"/>
                            </div>
                            <div className="col border-end-0 border-end-md border-end-lg d-md-none d-lg-block">
                                <h4 className="fw-bold border-start border-5 ps-1">Security and Privacy</h4>
                                <div className="d-flex align-items-start mt-1">
                                    <div>
                                        <i className="fas fa-unlock-alt fa-3x ms-1 ms-md-1 ms-lg-3 text-dark text-opacity-50"></i>
                                    </div>
                                </div>
                                <hr className="d-lg-none my-3 my-md-3"/>
                            </div>
                            <div className="col">
                                <h4 className="fw-bold border-start border-5 ps-1">Open a Support ticket</h4>
                                <div className="d-flex align-items-start mt-2">
                                    <div>
                                        <i className="fas fa-life-ring fa-3x ms-1 ms-md-1 ms-lg-3 text-dark text-opacity-50"></i>
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
                <div className="row">
                    <div className="col-12">
                       
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-11 col-lg-8 mt-2">
                            <hr className="my-2"/>
                            <h1 className="pt-2 text-center">Have a <span className="text-highlight">question?</span></h1>
                            <p className="lead text-muted text-center">Let's get in touch!</p>
                            <br/>
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                                <div className="col text-center">
                                    <h5 className="fw-bold mb-1">Address</h5>
                                    <p className="text-muted">181 Austin Dr #APT 127 Burlington, Vermont (VT), 05401</p>
                                </div>
                                <div className="col text-center">
                                    <h5 className="fw-bold mb-1">Email</h5>
                                    <p className="text-muted">support@signalblaze.com<br/>for public inquiries</p>
                                </div>
                                <div className="col text-center">
                                    <h5 className="fw-bold mb-1">Call</h5>
                                    <p className="text-muted">+14355548555<br/>Mon - Fri, 9am - 5pm</p>
                                </div>
                            </div>
                            <hr className="my-2"/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-fixed bottom-0 end-0 p-4" style={{"zIndex": 1}}>
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body text-primary">
                        <i className="fas fa-check-circle me-1"></i>Your message has been sent successfully. Thank you!
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default ContactUs
