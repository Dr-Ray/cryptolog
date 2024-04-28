import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context';

const DepositStep3 = () => {
  const { setDepositDetails, depositDetails } = useContext (AuthContext);
  // console.log(depositDetails)
  const navigate = useNavigate();
  const {amount} = useParams();
  const [paymethod, setPaymethod] = useState('');
  const handleSubmit = () => {
    let data = {
      paymethod,
      amount,
      wallet_address:"234c347chiurcercg83gwg6c8wecw8ewc",
      id:Math.floor(Math.random()*10000)+1
    }

    setDepositDetails({...depositDetails, data})
    // send data to backend return true with wallet address
    navigate(`/user/deposits/fund/step4/234c347chiurcercg83gwg6c8wecw8ewc`)
  }
  return (
    <>

      <div className="roww center"><br /><br />
        <h1>PAY ${amount}</h1>
        <p>Send Crypto</p><br />
        <div className="roww">
          <div className="col l4 offset-l4 s12">
            <div className="cardd-panel">
              <div>
                <center>{amount/6500} BTC</center><br />
              </div>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="roww">
                  <div className="input-field undefined">
                    <label className="active">Select Payment Method</label>
                    <select id="wallet_id" className="browser-default app-my-2" defaultValue={paymethod}
                      onChange={(e) => setPaymethod(e.target.value)}>
                      <option value="btc" selected>Bitcoin (BTC)</option>
                      <option value="eth">Ethereum (ETHErc20)</option>
                      <option value="usdt-erc20">USDT (ERC20)</option>
                      <option value="usdt-trc20">USDT (TRC20)</option>
                      <option value="usdc">USDC (ERC20)</option>
                    </select>
                  </div>
                </div>
                <div><button type="submit" className="btnn btnn-full">Proceed</button></div>
              </form>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default DepositStep3
