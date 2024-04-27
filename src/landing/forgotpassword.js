import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordHome = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="card">
                                <div className="card-body p-3 p-md-5">
                                    <div className="text-center">
                                        <Link href="/" className="d-block mb-3 mb-sm-4 auth-page-logo">
                                            <img src="/assets/images/logoIcon/logo_2.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <form action="/user/password/email" method="POST" className="account-form">
                                        <input type="hidden" name="_token" value="i0O64BYKigXcwBjLJG8tTEX1NnLS3ClnmgLC1LjH" />
                                        <div className="mb-4">
                                            <h4 className="mb-2">Account Recovery</h4>
                                            <p>To recover your account please provide your email or username to find your account.</p>
                                        </div>
                                        <div className="row gy-2 gap-2">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Email or Username</label>
                                                    <input type="text" className="form-control form--control h-45" name="value" value="" required autofocus="off" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn--base w-100">Submit</button>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPasswordHome
