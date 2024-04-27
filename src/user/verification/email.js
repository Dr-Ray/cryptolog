import React from 'react'

const EmailVerification = () => {
  return (
    <>
      <div class=" roww">
        <div class="col l4 s12 offset-l4"><br />
          <div class="cardd-panel" style={{ "borderRadius": "10px" }}>
            <div class="container">
              <center>
                <h3 class="btnn-color">Email Verification</h3><br />
                <p>An email containing your 5-digit PIN has been sent to your email If you have not received it in a minute or two, click ‘Resend’.</p><br />
                <form autocomplete="off">
                  <div class="roww">
                    <div>
                      <div class="input-field">
                        <label class="active" for="pin">pin</label>
                        <input type="number" id="pin" min="" max="" step="any" inputmode="decimal" name="pin" class="" required="" value="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button type="submit" class="btnn btnn-full">VERIFY EMAIL</button>
                  </div>
                </form><br /><br />
                <form autocomplete="off">
                  <div class="roww">
                    <div class="input-field undefined">
                      <input type="email" id="email" name="email" autocomplete="new-email" required="" value="raypeter053@gmail.com" />
                      <label class="active" for="email">email</label>
                    </div>
                  </div>
                  <div><button type="submit" class="btnn btnn-full">RESEND PIN</button></div>
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
