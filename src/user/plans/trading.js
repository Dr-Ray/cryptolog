import React from 'react'
import { Link } from 'react-router-dom'

const TradingPlans = () => {
  return (
    <>
    <div className="container">
    <h1 className="center">Trading</h1><br/><br/>
    <section className="row">
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="card hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Trading<br/><span style={{"fontSize": "30px"}}>Gold account</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$50,000.00</h4><br/><br/><Link className="btn " to="/user/deposits/fund/step1?type=fund&amp;amount=50000&amp;comment= Gold account trading ">FUND PLAN</Link>
                </center>
            </div>
        </div>
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="card hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Trading<br/><span style={{"fontSize": "30px"}}>Premium account</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$100,000.00</h4><br/><br/><Link className="btn " to="/user/deposits/fund/step1?type=fund&amp;amount=100000&amp;comment= Premium account trading ">FUND PLAN</Link>
                </center>
            </div>
        </div>
    </section>
</div>
    </>
  )
}

export default TradingPlans