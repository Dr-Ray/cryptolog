import React from 'react'
import { Link } from 'react-router-dom'

const DepositStep1 = () => {
  return (
    <>
      <section class="roww">
        <div class="col l4 offset-l4 s12 center"><br />
          <h3>Fund Account</h3><br /><Link to="/user/plans">VIEW PRICING</Link><br /><br />
          <div class="cardd-panel"><br /><br />
            <form autocomplete="off">
              <div class="roww">
                <div>
                  <div class="input-field">
                    <span class=" prefix">USD</span>
                    <label class="active" for="amount">amount</label>
                    <input type="number" id="amount" min="100" max="" step="any" inputmode="decimal" name="amount" class="" required="" value="0" />
                  </div>
                </div>
                <div class="input-field undefined">
                  <label class="active">account</label>
                  <select id="account" class="browser-default undefined">
                    <option value="trading_balance_deposit" selected="">Trading Balance Deposit</option>
                  </select>
                </div>
              </div>
              <div>
                <button type="submit" class="btnn btnn-full">Proceed</button>
              </div>
            </form>
          </div>
        </div>
      </section>


    </>
  )
}

export default DepositStep1
