import React from 'react'
import { Link } from 'react-router-dom'

const DepositSingle = () => {
  return (
    <>
      <section className="container">
        <div className="cardd-panel">
          <div className="roww">
            <div className="col l3 s12 center">
              <p><Link to="/user/deposits/fund/step4">Make Payment</Link></p>
              <p><Link to="/user/deposits/upload-proof/234">Upload Payment Proof</Link></p><br/>
            </div>
            <div className="col l9 s12">
              <table className="striped">
                <tbody>
                  <tr className="roww">
                    <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>date</td>
                    <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>APR 26</td>
                  </tr>
                  <tr className="roww">
                    <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>status</td>
                    <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>Pending</td>
                  </tr>
                  <tr className="roww">
                    <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>amount</td>
                    <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>$990.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DepositSingle
