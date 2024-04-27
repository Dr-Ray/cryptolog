import React from 'react'

const UserWatchList = () => {
  return (
    <>
      <div>
          <ul class="collection">
              <li class="collection-item app-py-1">
                  <div class="roww">
                      <div class="col s2">
                          <center>
                              <img src="https://s3-symbol-logo.tradingview.com/indices/s-and-p-500--big.svg" class="ticon" alt="" />
                          </center>
                      </div>
                      <div class="col s4">
                          S&amp;P 500<br />
                          <span style={{"fontSize": "12px"}}>SPX500USD</span>
                      </div>
                      <div class="col s4" style={{"paddingTop": "10px"}}>4938.35</div>
                      <div class="col s2" style={{"paddingTop": "10px"}}>
                          <span class="material-icons notranslate btnn-color">star</span>
                      </div>
                  </div>
              </li>
          </ul>
          <br /><br />
      </div>
    </>
  )
}

export default UserWatchList
