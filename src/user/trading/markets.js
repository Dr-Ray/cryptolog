
import React, { useEffect, useState } from 'react'
import BottomNav from '../../component/bottomnav'
import data from '../../cryptoprices'

import IndexPrices from '../../prices'

const UserMarkets = () => {
  const [ forexPrices, setForexPrices ] = useState([]);
  const [ stockPrices, setStockPrices ] = useState([]);
  const [ cryptoPricess, setCryptoPrices ] = useState([]);
  const [ etfPrices, setEtfPrices ] = useState([]);
  const [ indexPrices, setIndexPrices ] = useState([]);

  const [ gen, setGen ] = useState([]);
  
  useEffect(() => {
    for (const [key, value] of Object.entries(data.data)) {
      if (key === 'forex') {
        setForexPrices(value.data);
      }
      if (key === 'stock') {
        setStockPrices(value.data);
        setGen(value.data);
      }
      if (key === 'crypto') {
        setCryptoPrices(value.data);
      }
      if (key === 'etf') {
        setEtfPrices(value.data);
      }
      if (key === 'index') {
        setIndexPrices(value.data);
      }
    }
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="roww center" style={{ "fontSize": "14px", "textAlign": "center !important" }}>
          <div className="col l2 offset-l1 offset-s1 s2" onClick={()=>{
            setGen(stockPrices)
          }}>
            <img src="/assets/images/svgs/IconStocks.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Stocks</span>
          </div>
          <div className="col l2 s2" onClick={()=>{
            setGen(cryptoPricess)
          }}>
            <img src="/assets/images/svgs/IconCrypto.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Crypto</span>
          </div>
          <div className="col l2 s2" onClick={()=>{
            setGen(forexPrices)
          }}>
            <img src="/assets/images/svgs/IconCurrencies.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Forex</span>
          </div>
          <div className="col l2 s2" onClick={()=>{
            setGen(etfPrices)
          }}>
            <img src="/assets/images/svgs/IconIndices.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>ETFs</span>
          </div>
          <div className="col l2 s2" onClick={()=>{
            setGen(indexPrices)
          }}>
            <img src="/assets/images/svgs/IconIndices.svg" style={{ "width": "18px", "height": "20px" }} alt="" /><br />
            <span style={{ "color": "rgb(133, 137, 155)" }}>Index</span>
          </div>
        </div><br />
        <ul className="collection roww">
          {
            gen?.map((data, index)=>(
              <IndexPrices data={data} key={index} addToWish={true}/>
            ))
          }
        </ul><br /><br /><br /><br />
      </div>
      <BottomNav markets='active' />
    </>
  )
}

export default UserMarkets
