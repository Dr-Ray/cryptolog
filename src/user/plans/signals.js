import React from 'react'
import { Link } from 'react-router-dom'

const SignalPlans = () => {
  return (
   <>
    <div className="container">
    <h1 className="center">Signals</h1><br/><br/>
    <section className="roww">
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="cardd hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Signals<br/><span style={{"fontSize": "30px"}}>Bot signal 5.0</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$100,000.00</h4><br/><br/><Link className="btnn " to="/user/deposits/fund/step3/purchase/100000/Bot signal 5.0 signals ">PURCHASE PLAN</Link>
                </center>
            </div>
        </div>
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="cardd hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Signals<br/><span style={{"fontSize": "30px"}}>Bot signal 4.0</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$75,000.00</h4><br/><br/><Link className="btnn " to="/user/deposits/fund/step3/purchase/75000/Bot signal 4.0 signals ">PURCHASE PLAN</Link>
                </center>
            </div>
        </div>
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="cardd hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Signals<br/><span style={{"fontSize": "30px"}}>Bot signal 3.0</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$50,000.00</h4><br/><br/><Link className="btnn " to="/user/deposits/fund/step3/purchase/50000/Bot signal 3.0 signals ">PURCHASE PLAN</Link>
                </center>
            </div>
        </div>
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="cardd hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Signals<br/><span style={{"fontSize": "30px"}}>Bot signal 2.0</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$25,000.00</h4><br/><br/><Link className="btnn " to="/user/deposits/fund/step3/purchase/25000/Bot signal 2.0 signals ">PURCHASE PLAN</Link>
                </center>
            </div>
        </div>
        <div className="col l3 s12 wow fadeInUp slow">
            <div className="cardd hoverable app-py-1 app-px-2" style={{"borderRadius": "10px"}}> Signals<br/><span style={{"fontSize": "30px"}}>Bot signal 1.0</span>
                <hr/>
                <center>
                    <h4 className="alt-color" style={{"fontSize": "35px", "fontWeight": "bold"}}>$10,000.00</h4><br/><br/><Link className="btnn " to="/user/deposits/fund/step3/purchase/10000/Bot signal 1.0 signals ">PURCHASE PLAN</Link>
                </center>
            </div>
        </div>
    </section>
</div>
   </>
  )
}

export default SignalPlans
