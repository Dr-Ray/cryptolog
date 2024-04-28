import React, { useContext, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../context';

const DepositStep4 = () => {
    const { depositDetails } = useContext(AuthContext)
    const [copyText, setCopyText] = useState(depositDetails.data.wallet_address);
   
    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    };

    return (
        <>
            <section className="roww center">
                <div className="col l4 offset-l4 s12">
                    <div className="cardd-panel">
                        <p>SEND {Math.fround(depositDetails.amount/6500)} BTC</p>
                        <p>TO THE WALLET ADDRESS BELOW OR SCAN THE QR CODE WITH YOUR {depositDetails.data.paymethod} WALLET APP</p> 
                        <p></p>
                        <div className="input-field">
                            <CopyToClipboard text={copyText}
                                onCopy={() => toast(depositDetails.data.wallet_address)}>
                                <i className="material-icons prefix">content_copy</i>
                            </CopyToClipboard>
                            <input
                                type="text"
                                value={copyText}
                                onChange={handleCopyText}
                                style={{ "textAlign": "center" }}
                            />
                        </div>
                        <div className="background">
                            <img src={ `https://chart.googleapis.com/chart?cht=qr&amp;chl=${depositDetails.data.wallet_address}&amp;chs=160x160&amp;chld=L|0`} alt={depositDetails.data.wallet_address} />
                        </div>
                        <br />
                        <p>Awaiting Payment</p>
                        <Link className="btnn" to={`/user/deposits/upload-proof/${depositDetails.data.id}`}>UPLOAD PAYMENT PROOF</Link>
                        <br />
                        <Link className="btnn btnn-secondary" to="/user/deposits/list">WAIT FOR CONFIRMATION</Link>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default DepositStep4
