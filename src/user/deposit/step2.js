import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DepositStep2 = () => {
  const { amount, account } = useParams();
  return (
    <>
      <div className="rowww center"><br /><br />
        <span>
          {(account === "trading_balance_deposit")&&(
            <>
              FUND TRADING BALANCE DEPOSIT
            </>
          )}
        </span>
        <h1>${amount}</h1><br /><br />
        <p>SELECT PAYMENT METHOD</p>
        <div className="col l4 s12 offset-l4">
          <ul className="collection">
            <Link to={`/user/deposits/fund/step3/fund/${amount}/${account}`}>
              <li className="collection-item app-py-2 app-px-2">
                <b>Send Crypto</b><br />
                <small className="grey-text">send supported crypto currencies</small>
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
