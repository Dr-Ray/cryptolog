import React from 'react'

const EmailVerification = () => {
  return (
    <>
      <div class=" row">
        <div class="col l4 s12 offset-l4"><br />
          <div class="card-panel" style={{ "borderRadius": "10px" }}>
            <div class="container">
              <center>
                <h3 class="btn-color">Email Verification</h3><br />
                <p>An email containing your 5-digit PIN has been sent to your email If you have not received it in a minute or two, click ‘Resend’.</p><br />
                <form autocomplete="off">
                  <div class="row">
                    <div>
                      <div class="input-field">
                        <label class="active" for="pin">pin</label>
                        <input type="number" id="pin" min="" max="" step="any" inputmode="decimal" name="pin" class="" required="" value="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-full">VERIFY EMAIL</button>
                  </div>
                </form><br /><br />
                <form autocomplete="off">
                  <div class="row">
                    <div class="input-field undefined">
                      <input type="email" id="email" name="email" autocomplete="new-email" required="" value="raypeter053@gmail.com" />
                      <label class="active" for="email">email</label>
                    </div>
                  </div>
                  <div><button type="submit" class="btn btn-full">RESEND PIN</button></div>
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
