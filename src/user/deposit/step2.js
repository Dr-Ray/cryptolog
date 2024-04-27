import React from 'react'
import { Link } from 'react-router-dom'

const DepositStep2 = () => {
  return (
    <>
      <div class="rowww center"><br /><br />
        <span>FUND TRADING BALANCE DEPOSIT </span>
        <h1>$990.00</h1><br /><br />
        <p>SELECT PAYMENT METHOD</p>
        <div class="col l4 s12 offset-l4">
          <ul class="collection">
            <Link to="/user/deposits/fund/step3/fund/990/trading_balance_deposit">
              <li class="collection-item app-py-2 app-px-2">
                <b>Send Crypto</b><br />
                <small class="grey-text">send supported crypto currencies</small>
              </li>
            </Link>
          </ul>
          <br /><br /><br />
          <Link to="/buy-crypto" target="_blank">BUY CRYPTO</Link>
        </div>
      </div>
    </>
  )
}

export default DepositStep2
