import React from 'react'
import { Link } from 'react-router-dom'

const DepositList = () => {
  return (
    <>
      <br />
      <div className="container">
        <ul className="collection app-mx-1">
          <li className="collection-item">
            Deposits will be pending until there are sufficent confirmations on the blockchain.
            <span style={{ "float": "right", "cursor": "pointer" }}> X</span>
          </li>
        </ul>
        <ul className="collection roww">
          <li className="collection-item app-py-1 ">
            <div className="roww app-list-link">
              <Link to="/user/deposits/single">
                <div className="col l1 s2" style={{ "padding": "0px" }}>
                  <center>
                    <p className="app-trading-month">APR</p><span className="app-trading-day">26</span>
                  </center>
                </div>
                <div className="col l9 s7" style={{ "fontSize": "14px" }} >
                  FUND $ {670.00}<br />TRADING BALANCE DEPOSIT
                </div>
              </Link>
              <div className="col l2 s3" style={{ "textAlign": "right", "fontSize": "14px" }}>Pending</div>
            </div>
          </li >
        </ul >
      </div >
      <div className="fixed-action-btnn"><Link title="New Deposit" className="btnn-floating btnn-large" id="btnn" to="/user/deposits/fund/step1"><i className="large material-icons notranslate">add</i></Link>
        <div className="tap-target-wrapper" style={{ "right": "-362px", "bottom": "-262px", "position": "fixed" }}>
          <div className="tap-target" data-target="btnn">
            <div className="tap-target-content" style={{ "width": "456px", "height": "400px", "inset": "0px", "padding": "56px", "verticalAlign": "bottom" }}>
              <h5>New Deposit</h5>
            </div>
          </div>
          <div className="tap-target-wave" style={{ "top": "344px", "left": "344px", "width": "112px", "height": "112px" }}><Link title="New Deposit" className="btnn-floating btnn-large tap-target-origin" to="/user/deposits/fund/step1"><i className="large material-icons notranslate">add</i></Link></div>
        </div>
      </div >
    </>
  )
}

export default DepositList
