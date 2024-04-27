import React from 'react'
import { Link } from 'react-router-dom'

const DepositSingle = () => {
  return (
    <>
      <section class="container">
        <div class="cardd-panel">
          <div class="roww">
            <div class="col l3 s12 center">
              <p><Link to="/user/deposits/fund/step4">Make Payment</Link></p>
              <p><Link to="/user/deposits/upload-proof/234">Upload Payment Proof</Link></p><br/>
            </div>
            <div class="col l9 s12">
              <table class="striped">
                <tbody>
                  <tr class="roww">
                    <td class="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>date</td>
                    <td class="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>APR 26</td>
                  </tr>
                  <tr class="roww">
                    <td class="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>status</td>
                    <td class="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>Pending</td>
                  </tr>
                  <tr class="roww">
                    <td class="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>amount</td>
                    <td class="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>$990.00</td>
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
