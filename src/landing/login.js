import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { AuthContext } from '../context';
import { InfinitySpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const { setIsloggedIn, setCurrentUser } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      let data = {
        password,
        email
      }

      const resp = await fetch('http://localhost:4500/user/login', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const response = await resp.json();
      setTimeout(() => {
        setIsloading(false)
      }, 2000)

      if (response.status === 200) {
        setIsloggedIn(true)
        setCurrentUser(response.user)
        navigate('/user')
      } else {
        setTimeout(() => {
          setError(response.message)
          toast(response.message)
        }, 2100)

      }

    } catch (err) {
      setIsloading(false)
      setError(err.message)
    }

  }
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card">
                <div className="card-body p-3 p-md-5">
                  <Link to="/" className="text-center d-block mb-3 mb-sm-4 auth-page-logo">
                    <img src="/img/logog.png" alt="logo" />
                  </Link>

                  <ToastContainer />
                  <form className="verify-gcaptcha account-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value="i0O64BYKigXcwBjLJG8tTEX1NnLS3ClnmgLC1LjH" />
                    <div className="mb-4">
                      <h4 className="mb-2">Login to your account</h4>
                      <p>You can sign in to your account using email or username</p>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="username"
                            className="form-control form--control h-45"
                            placeholder="type your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control form--control h-45"
                            placeholder="type your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          /> 
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-wrap gap-2 justify-content-between">
                          <div className="form-group custom--checkbox">
                            <input type="checkbox" id="remember" name="remember" className="form-check-input" />
                            <label htmlFor="remember">Keep me Logged in</label>
                          </div>
                          <Link to="/forgot-password" className="text--base fw-bold">Forgot Password?</Link>
                        </div>
                      </div>
                      <div className="col-12">
                      </div>

                      {
                        isLoading ? (
                          <InfinitySpin
                            visible={true}
                            width="200"
                            color="#4fa94d"
                            ariaLabel="infinity-spin-loading"
                          />
                        ) : (
                          <>
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary w-100">Login Account</button>
                            </div><br /><br />
                            <br /><br />
                            {
                              error && (
                                <div className="red black-text lighten-4 card-panel text-center" style={{ "padding": "30px" }}><span>{error}</span><br /></div>
                              )
                            }
                          </>
                        )
                      }


                      <div className="col-12 mt-4">
                        <p className="text-center">Don't have any account?
                          <Link to="/register" className="fw-bold text--base">Create Account</Link>
                        </p>
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
