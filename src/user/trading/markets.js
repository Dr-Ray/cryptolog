import React from 'react'
import BottomNav from '../../component/bottomnav'

const UserMarkets = () => {
  return (
    <>
      <div class="container">
        <div class="row center" style={{ "fontSize": "14px", "textAlign":"center !important"}}>
          <div class="col l2 offset-l1 offset-s1 s2">
            <img src="/assets/images/svgs/IconStocks.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Stocks</span>
          </div>
          <div class="col l2 s2">
            <img src="/assets/images/svgs/IconCrypto.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Crypto</span>
          </div>
          <div class="col l2 s2">
            <img src="/assets/images/svgs/IconCurrencies.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Forex</span>
          </div>
          <div class="col l2 s2">
            <img src="/assets/images/svgs/IconIndices.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>ETFs</span>
          </div>
          <div class="col l2 s2">
            <img src="/assets/images/svgs/IconIndices.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Index</span>
          </div>
        </div><br />
        <ul class="collection row">
          <li class="collection-item app-py-2">
            <div class="row">
              <div class="col s2 l1">
                <img src="https://s3-symbol-logo.tradingview.com/apple--big.svg" style={{ "width": "46px", "height": "46px" }} alt="" />
              </div>
              <div class="col s5 l9" style={{ "paddingTop": "5px" }}>AAPL<br />Apple</div>
              <div class="col s3 l1" style={{ "textAlign": "right", "paddingTop": "10px" }}>185.11</div>
              <div class="col s2 l1" style={{ "paddingTop": "10px" }}>
                <span class="material-icons notranslate btn-color">star</span>
              </div>
            </div>
          </li>
        </ul><br /><br /><br /><br />
      </div>
      <BottomNav markets='active' />
    </>
  )
}

export default UserMarkets
