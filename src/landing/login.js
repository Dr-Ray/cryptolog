import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
            <div className="card">
              <div className="card-body p-3 p-md-5">
                <Link to="/" className="text-center d-block mb-3 mb-sm-4 auth-page-logo">
                  <img src="assets/img/logoIcon/logo_2.png" alt="logo" />
                </Link>
                <form action="/login" method="POST" className="verify-gcaptcha account-form">
                  <input type="hidden" name="_token" value="i0O64BYKigXcwBjLJG8tTEX1NnLS3ClnmgLC1LjH" />
                  <div className="mb-4">
                    <h4 className="mb-2">Login to your account</h4>
                    <p>You can sign in to your account using email or username</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Username or Email</label>
                        <input type="text" name="username" className="form-control form--control h-45" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control form--control h-45" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex flex-wrap gap-2 justify-content-between">
                        <div className="form-group custom--checkbox">
                          <input type="checkbox" id="remember" name="remember" className="form-check-input" />
                          <label for="remember">Keep me Logged in</label>
                        </div>
                        <Link to="/forgot-password" className="text--base fw-bold">Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="col-12">
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">Login Account</button>
                    </div>
                    <div className="col-12 mt-4">
                      <p className="text-center">Don't have any account? <Link to="/register" className="fw-bold text--base">Create Account</Link></p>
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

export default Login
