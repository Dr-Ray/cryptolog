import React from 'react'
import { Link } from 'react-router-dom'

const UserAccount = () => {
  return (
    <>
      <div className="container"><br />
        <div className="row"><br />
          <div className="col l5 s12 offset-l1">
            <center><img src="/images/human.png" className="circle" height="150px" alt='' />
              <h3>Ray Adolph</h3>Premium account<br /><br />
            </center>
            <ul className="collection">
              <Link className="collection-item bg" to="/user/notifications">
                <li>
                  <div style={{ "background": "rgb(225, 85, 93)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>notifications</span></div>Push Notifications <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/verifications/home">
                <li>
                  <div style={{ "background": "rgb(82, 82, 152)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>verified_user</span></div>Account Verifications <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col l5 s12"><br /><br />
            <ul className="collection">
              <Link className="collection-item bg" to="/user/address">
                <li>
                  <div style={{ "background": "rgb(34, 176, 125)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>home</span></div>Update Address <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/password">
                <li>
                  <div style={{ "background": "rgb(50, 167, 226)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>lock</span></div>Update Password <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/photo">
                <li>
                  <div style={{ "background": "rgb(181, 72, 198)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>account_circle</span></div>Update Profile Photo <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/email">
                <li>
                  <div style={{ "background": "rgb(1, 176, 163)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>mail</span></div>Update Email Address <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
            </ul><br /><br />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserAccount
