import React from 'react'
import { useParams } from 'react-router-dom'

const DepositStep3 = () => {
  const {amount} = useParams();
  return (
    <>

      <div class="row center"><br /><br />
        <h1>PAY ${amount}</h1>
        <p>Send Crypto</p><br />
        <div class="row">
          <div class="col l4 offset-l4 s12">
            <div class="card-panel">
              <div>
                <center>0.01537 BTC</center><br />
              </div>
              <form autocomplete="off">
                <div class="row">
                  <div class="input-field undefined">
                    <label class="active">Select Payment Method</label>
                    <select id="wallet_id" class="browser-default app-my-2">
                      <option value="1" selected="">Bitcoin (BTC)</option>
                      <option value="2">Ethereum (ETHErc20)</option>
                      <option value="3">USDT (ERC20)</option>
                      <option value="4">USDT (TRC20)</option>
                      <option value="5">USDC (ERC20)</option>
                    </select>
                  </div>
                </div>
                <div><button type="submit" class="btn btn-full">Proceed</button></div>
              </form>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default DepositStep3
