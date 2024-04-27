import React from 'react'
import { Link } from 'react-router-dom'

const UserReferals = () => {
  return (
    <>
      <div class="roww container">
        <div class="col l4 s12 center">
          <div class="card-panel app-py-2 app-px-2">
            <h1>$0.00</h1><span>Referral Balance</span><br /><br /><Link class="btnn" to="/user/withdrawals/crypto">WITHDRAW</Link>
          </div><br />
          <div class="card-panel app-py-2 app-px-2">
            <div class="input-field container" style={{ "marginBottom": "0px" }}>
              <input type="text" readonly="" value="https://cryptologia.net/signup?user_id=104" style={{ "textAlign": "center" }} />
            </div>
            <span>Referral Link</span>
          </div><br />
        </div>
        <div class="col l8 s12">
          <div class="container">
            <ul class="collection">
              <li class="collection-item app-py-2">
                <p id="no-data" style={{ "textAlign": "center" }}><span class="app-font-normal">No Referrals Yet</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserReferals
