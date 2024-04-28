import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context';

const UserAccount = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="container"><br />
        <div className="roww"><br />
          <div className="col l5 s12 offset-l1">
            <center>
              <img src={`/images/${currentUser.profilephoto}`} className="circle" height="150px" alt={currentUser.fullname} />
              <h3>{currentUser.fullname}</h3>{currentUser.tradingPlan}<br /><br />
            </center>
            <ul className="collection">
              <Link className="collection-item bg" to="/user/account/verification/notifications">
                <li>
                  <div style={{ "background": "rgb(225, 85, 93)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>notifications</span></div>Push Notifications <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/account/verification/home">
                <li>
                  <div style={{ "background": "rgb(82, 82, 152)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>verified_user</span></div>Account Verifications <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col l5 s12"><br /><br />
            <ul className="collection">
              <Link className="collection-item bg" to="/user/account/verification/address">
                <li>
                  <div style={{ "background": "rgb(34, 176, 125)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>home</span></div>Update Address <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/account/verification/password">
                <li>
                  <div style={{ "background": "rgb(50, 167, 226)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>lock</span></div>Update Password <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/account/verification/photo">
                <li>
                  <div style={{ "background": "rgb(181, 72, 198)", "padding": "1rem 1rem 0.8rem", "marginRight": "1rem", "borderRadius": "10px", "display": "inline-block" }}><span className="material-icons notranslate" style={{ "fontSize": "30px", "margin": "0px", "padding": "0px", "color": "white" }}>account_circle</span></div>Update Profile Photo <span style={{ "color": "silver", "fontSize": "12px" }}></span>
                </li>
              </Link>
              <Link className="collection-item bg" to="/user/account/verification/email">
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
