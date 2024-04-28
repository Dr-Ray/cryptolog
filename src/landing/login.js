import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { AuthContext } from '../context';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setIsloggedIn, setCurrentUser } = useContext(AuthContext)

  const handleSubmit = async(e) => {
    setIsloggedIn(true);
    setCurrentUser({
      fullname:"John Snow",
      balance:{
        tradingBalance:"0",
        btcMiningBalance:"0",
        ethMiningBalance:"0",
        dogeMiningBalance:"0",
        binanceMiningBalance:"0",
        referalBalance:"0",
        cosmosMiningBalance:"0",
        tradingDepositBalance:"0",
      },
      wishlist:[],
      city:"Uyo",
      state:"Aks",
      country:"Nigeria",
      address:"ekpri nsukara",
      zip:"520001",
      profileImg:"hunan.png",
      email:"raypeter053@gmail.com",
      tradingPlan:"Premium account"

    })
    navigate('/user')
    setError('');
    // const login = await fetch('http://localhost:4500/user/login', {
    //   // headers:{
    //   //   "content-type":"application/json"
    //   // },
    //   body:{
    //     email,password
    //   },
    // });

    // if(login.status === 200) {
    //   setIsloggedIn(true);
    //   setCurrentUser(login.user);
    //   navigate('/user')
    // }else{
    //   setIsloggedIn(false);
    //   setError(login.message);
    // }
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
                  {
                    error&&(
                      <div className='alert-error alert-danger'>
                        {
                          error
                        }
                      </div>
                    )
                  }
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
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Login Account</button>
                      </div>
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
