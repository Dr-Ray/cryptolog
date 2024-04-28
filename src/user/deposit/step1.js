import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';


const DepositStep1 = () => {
  const navigate = useNavigate();
  const { setDepositDetails } = useContext(AuthContext);
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('trading_balance_deposit');
  // const [error, setError] = useState('');

  const handleSubmission = () => {
    setDepositDetails({
      amount,
      account
    })
    navigate(`/user/deposits/fund/step2/${amount}/${account}`)
  }
  return (
    <>
      <section className="roww">
        <div className="col l4 offset-l4 s12 center"><br />
          <h3>Fund Account</h3><br /><Link to="/user/plans">VIEW PRICING</Link><br /><br />
          <div className="cardd-panel"><br /><br />
            <form autoComplete="off" onSubmit={handleSubmission}>
              <div className="roww">
                <div>
                  <div className="input-field">
                    <span className=" prefix">USD</span>
                    <label className="active" htmlFor="amount">amount</label>
                    <input 
                      type="number" 
                      id="amount" 
                      min="100" 
                      max="" 
                      step="any" 
                      inputMode="decimal" 
                      name="amount" 
                      className="" 
                      required=""
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-field undefined">
                  <label className="active">account</label>
                  <select id="account" className="browser-default undefined"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}>
                    <option value="trading_balance_deposit">Trading Balance Deposit</option>
                  </select>
                </div>
              </div>
              <div>
                <button type="submit" className="btnn btnn-full">Proceed</button>
              </div>
            </form>
          </div>
        </div>
      </section>


    </>
  )
}

export default DepositStep1
