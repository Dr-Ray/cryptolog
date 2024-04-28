import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UserReferals = () => {
  const [copyText, setCopyText] = useState(`https://signalBlaze.net/signup?user_id=${Math.floor(Math.random()*200)}`);

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
};

  return (
    <>
      <div className="roww container">
        <div className="col l4 s12 center">
          <div className="card-panel app-py-2 app-px-2">
            <h1>$0.00</h1><span>Referral Balance</span><br /><br /><Link className="btnn" to="/user/withdrawals/crypto">WITHDRAW</Link>
          </div><br />
          <div className="card-panel app-py-2 app-px-2">
            <div className="input-field container" style={{ "marginBottom": "0px" }}>
              <CopyToClipboard text={copyText}
                onCopy={() => toast("Referal link copied successfully")}>
                <i className="material-icons prefix">content_copy</i>
              </CopyToClipboard>
              <input type="text" readonly="" onChange={handleCopyText} defaultValue={copyText} style={{ "textAlign": "center" }} />
            </div>
            <span>Referral Link</span>
          </div><br />
        </div>
        <div className="col l8 s12">
          <div className="container">
            <ul className="collection">
              <li className="collection-item app-py-2">
                <p id="no-data" style={{ "textAlign": "center" }}><span className="app-font-normal">No Referrals Yet</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default UserReferals
