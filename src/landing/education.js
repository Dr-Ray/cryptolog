import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
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
                <div className="row gy-md-3 gx-0 gx-md-3 gx-lg-5">
                    <div className="col-md-12 col-lg-7">
                        <h1 className="fw-bold mb-2"><span className="text-highlight">Knowledge</span> is an investment</h1>
                        <p className="lead text-muted">By combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting—and more approachable.</p>
                        <div className="d-flex align-items-center mt-3 mb-4 mb-md-0 mb-lg-0">
                            <span className="badge bg-secondary mb-0"><i className="fas fa-book fa-sm me-1"></i>Learn</span>
                            <i className="fas fa-long-arrow-alt-right  fa-sm mx-1 mb-0 text-muted"></i>
                            <span className="badge bg-secondary mb-0"><i className="fas fa-lightbulb fa-sm me-1"></i>Understand</span>
                            <i className="fas fa-long-arrow-alt-right  fa-sm mx-1 mb-0 text-muted"></i>
                            <span className="badge bg-secondary mb-0"><i className="fas fa-chart-area fa-sm me-1"></i>Trade</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="card bg-white">
                            <div className="card-body">
                                <div className="d-flex align-items-start text-dark">
                                    <div className="flex-md-fill">
                                        <h4 className="fw-bold">Trading Academy</h4>
                                        <p>Become an expert trader by picking one of our courses.</p>
                                        <Link className="btn btn-warning" to="/login">Start Learning<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                                    </div>
                                    <div className="ms-1">
                                        <i className="fas fa-user-graduate fa-5x text-dark text-opacity-50 mt-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-3">
            <div className="container">
                <div className="row justify-content-center mt-n3">
                    <div className="col-12">
                        <div className="border-bottom py-3">
                            <div className="row align-content-center gy-1 gy-md-1">
                                <div className="col-md-12 col-lg-4 d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap bg-info flex-shrink-0 me-2">
                                            <i className="fas fa-users fa-lg text-white"></i>
                                        </div>
                                        <h4 className="fw-bold mb-0">Beginner Course</h4>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-5 d-flex align-items-center">
                                    <p className="mb-0">Learn the basic concepts of forex trading, what this market is all about, and why you should be a part of it.</p>
                                </div>
                                <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-lg-end">
                                    <Link className="btn btn-link link-primary text-decoration-none p-0 mt-1 mt-md-0 mt-lg-0" to="/login">Enter Course<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-3">
                            <div className="row align-content-center gy-1 gy-md-1">
                                <div className="col-md-12 col-lg-4 d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap bg-info flex-shrink-0 me-2">
                                            <i className="fas fa-tools fa-lg text-white"></i>
                                        </div>
                                        <h4 className="fw-bold mb-0">Trading Tools</h4>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-5 d-flex align-items-center">
                                    <p className="mb-0">Familiarize yourself with advanced strategies and Btrade's trading toolset. Take your trading to the next level.</p>
                                </div>
                                <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-lg-end">
                                    <Link className="btn btn-link link-primary text-decoration-none p-0 mt-1 mt-md-0 mt-lg-0" to="/login">Enter Course<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="row align-content-center gy-1 gy-md-1">
                                <div className="col-md-12 col-lg-4 d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="icon-wrap bg-info flex-shrink-0 me-2">
                                            <i className="fas fa-chart-area fa-lg text-white"></i>
                                        </div>
                                        <h4 className="fw-bold mb-0">Stocks and CFDs</h4>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-5 d-flex align-items-center">
                                    <p className="mb-0">Discover the world of CFD trading: The ins & outs of the CFD market, relevant information and market dynamics.</p>
                                </div>
                                <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-lg-end">
                                    <Link className="btn btn-link link-primary text-decoration-none p-0 mt-1 mt-md-0 mt-lg-0" to="/login">Enter Course<i className="fas fa-angle-right fa-xs ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-9 mt-2 mt-md-3 mt-lg-3">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-1 g-md-1 g-lg-1">
                            <div className="d-grid col">
                                <Link className="btn btn-outline-primary" to="#">Fast Academy</Link>
                            </div>
                            <div className="d-grid col">
                                <Link className="btn btn-outline-primary" to="https://youtu.be/w2qZT1-9UdY">Video Tutorials</Link>
                            </div>
                            <div className="d-grid col">
                                <Link className="btn btn-outline-primary" to="#">Course</Link>
                            </div>
                            <div className="d-grid col">
                                <Link className="btn btn-outline-primary" to="#">E-Books</Link>
                            </div>
                            <div className="d-grid col">
                                <Link className="btn btn-outline-primary" to="#">Glossary</Link>
                            </div>
                            <div className="d-grid col">
                                <Link className="btn btn-outline-primary" to="#">Trading Info</Link>
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
                        <div className="card shadow-sm border-0" style={{"backgroundImage": "url(img/blockit/in-card-background-1.jpg); background-repeat: no-repeat"}}>
                            <div className="card-body p-4 text-white">
                                <h2 className="fw-bold mb-1 text-white">Free Demo Account</h2>
                                <p className="lead text-white text-opacity-50 my-1">Practice Stocks and CFDs trading in a risk-free environment.</p>
                                <Link className="btn btn-warning mt-1" to="/register">Open an Account</Link>
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

export default Education
