import React from 'react'
import { Link } from 'react-router-dom'

const UserTrades = () => {
  return (
    <>
      <section className="">
        <center>
          <ul className="bg tabs container">
            <li className="tab col s6" style={{"borderBottom":"3px solid black"}}>
              <Link to="#open">
                <span className="material-icons notranslate">hourglass_top</span>
                <span>Open</span>
              </Link>
            </li>
            <li className="tab  col s6">
              <Link to="#closed" className="active">
                <span className="material-icons notranslate">hourglass_full</span>
                <span>Closed</span>
              </Link>
            </li>

          </ul>
        </center><br /><br />
        <div className="container pc-scroll">
          <div id="closed" className="active" style={{"display": "block"}}>
            <ul className="collection">
              <li className="collection-item app-py-2">
                <p id="no-data" style={{ "textAlign": "center" }}>
                  <span className="app-font-normal">NO CLOSED TRADES</span>
                </p>
              </li>
            </ul>
          </div>
          <div id="open" style={{"display": "none"}}>
            <ul className="collection">
              <li className="collection-item app-py-2">
                <p id="no-data" style={{ "textAlign": "center" }}>
                  <span className="app-font-normal">NO OPEN TRADES</span>
                </p>
              </li>
            </ul>
          </div>
        </div><br /><br /><br /><br />
      </section>
    </>
  )
}

export default UserTrades
