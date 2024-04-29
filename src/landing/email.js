import React, { useContext, useState } from 'react'
import { AuthContext } from '../context';
import { InfinitySpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

const EmailVerification = () => {
  const [isLoading, setIsloading] = useState(false);
  const [isLoading2, setIsloading2] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsloading(true)

    try {
      let data = {
        pin,
        "id":currentUser.id
      }

      const resp = await fetch('http://localhost:4500/user/verify/email', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const response = await resp.json();
      setTimeout(()=> {
        setIsloading(false)
      }, 2000)

      if (response.status === 200) {
        toast(response.message)

      } else {
        setTimeout(()=> {
          setError(response.message)
          toast(response.message)
        }, 2100)
        
      }

    } catch (err) {
      setIsloading(false)
      setError(err.message)
    }
  }

  const handleResend = async(e) => {
    e.preventDefault();

    setIsloading2(true);
    try {
      let data = {
        email:currentUser.email
      }

      const resp = await fetch('http://localhost:4500/user/verification/resend-email', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const response = await resp.json();
      setTimeout(()=> {
        setIsloading2(false)
      }, 2000)

      if (response.status === 200) {
        toast(response.message)
      } else {
        setTimeout(()=> {
          setError(response.message)
          toast(response.message)
        }, 2100)
      }

    } catch (err) {
      setIsloading2(false)
      setError(err.message)
    }
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
                          name="pin"
                          className=""
                          onChange={(e) => setPin(e.target.value)}
                          value={pin} 
                          required
                          />
                      </div>
                    </div>
                  </div>

                  {
                    isLoading ? (
                      <InfinitySpin
                        visible={true}
                        width="200"
                        color="#4fa94d"
                        ariaLabel="infinity-spin-loading"
                      />
                    ) : (
                      <>
                        <div>
                          <button type="submit" className="btnn btnn-full">VERIFY EMAIL</button>
                        </div>
                      </>
                    )
                  }

                </form><br /><br />
                <form autoComplete="off" onSubmit={handleResend}>
                  <div className="roww">
                    <div className="input-field undefined">
                      <input type="email" id="email" name="email" autoComplete="new-email" required readOnly defaultValue={currentUser.email} />
                      <label className="active" htmlFor="email">email</label>
                    </div>
                  </div>

                  {
                    isLoading2 ? (
                      <InfinitySpin
                        visible={true}
                        width="200"
                        color="#4fa94d"
                        ariaLabel="infinity-spin-loading"
                      />
                    ) : (
                      <>
                        <div><button type="submit" className="btnn btnn-full">RESEND PIN</button></div>

                      </>
                    )
                  }

                  
                </form><br /><br />
              </center>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerification
