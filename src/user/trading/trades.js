import React from 'react'
import { Link } from 'react-router-dom'

const UserTrades = () => {
  return (
    <>
      <section class="">
        <center>
          <ul class="bg tabs container">
            <li class="tab col s6" style={{"borderBottom":"3px solid black"}}>
              <Link to="#open">
                <span class="material-icons notranslate">hourglass_top</span>
                <span>Open</span>
              </Link>
            </li>
            <li class="tab  col s6">
              <Link to="#closed" class="active">
                <span class="material-icons notranslate">hourglass_full</span>
                <span>Closed</span>
              </Link>
            </li>

          </ul>
        </center><br /><br />
        <div class="container pc-scroll">
          <div id="closed" class="active" style={{"display": "block"}}>
            <ul class="collection">
              <li class="collection-item app-py-2">
                <p id="no-data" style={{ "textAlign": "center" }}>
                  <span class="app-font-normal">NO CLOSED TRADES</span>
                </p>
              </li>
            </ul>
          </div>
          <div id="open" style={{"display": "none"}}>
            <ul class="collection">
              <li class="collection-item app-py-2">
                <p id="no-data" style={{ "textAlign": "center" }}>
                  <span class="app-font-normal">NO OPEN TRADES</span>
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
