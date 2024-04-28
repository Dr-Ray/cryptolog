import React, { useContext, useState } from 'react'
import { AuthContext } from '../context';

const EmailVerification = () => {
  const [pin, setPin] = useState('');
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e)
  }

  const handleResend = (e) => {
    e.preventDefault();

    console.log(e)
  }

  return (
    <>
      <div className=" roww">
        <div className="col l4 s12 offset-l4"><br />
          <div className="cardd-panel" style={{ "borderRadius": "10px" }}>
            <div className="container">
              <center>
                <h3 className="btnn-color">Email Verification</h3><br />
                <p>An email containing your 5-digit PIN has been sent to your email If you have not received it in a minute or two, click ‘Resend’.</p><br />
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="roww">
                    <div>
                      <div className="input-field">
                        <label className="active" htmlFor="pin">pin</label>
                        <input 
                          type="number"
                          id="pin"
                          min="00000001"
                          max="99999999"
                          name="pin"
                          className=""
                          onChange={(e) => setPin(e.target.value)}
                          required="" value={pin} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btnn btnn-full">VERIFY EMAIL</button>
                  </div>
                </form><br /><br />
                <form autoComplete="off" onSubmit={handleResend}>
                  <div className="roww">
                    <div className="input-field undefined">
                      <input type="email" id="email" name="email" autoComplete="new-email" required="" value={currentUser.email} />
                      <label className="active" htmlFor="email">email</label>
                    </div>
                  </div>
                  <div><button type="submit" className="btnn btnn-full">RESEND PIN</button></div>
                </form><br /><br />
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerification
