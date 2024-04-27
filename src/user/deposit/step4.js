import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const DepositStep4 = () => {
    const [copyText, setCopyText] = useState("Wallet Addresx");

    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    };

    return (
        <>
            <section class="roww center">
                <div class="col l4 offset-l4 s12">
                    <div class="cardd-panel">
                        <p>SEND 0.00186 BTC</p>
                        <p>TO THE WALLET ADDRESS BELOW OR SCAN THE QR CODE WITH YOUR WALLET APP</p>
                        <div class="input-field">
                            <CopyToClipboard text={copyText}
                                onCopy={() => toast("Wallet copied")}>
                                <i class="material-icons prefix">content_copy</i>
                            </CopyToClipboard>
                            <input
                                type="text"
                                value={copyText}
                                onChange={handleCopyText}
                                style={{ "textAlign": "center" }}
                            />
                        </div>
                        <div class="background">
                            <img src="https://chart.googleapis.com/chart?cht=qr&amp;chl=walletAddress&amp;chs=160x160&amp;chld=L|0" alt="walletAddress" />
                        </div>
                        <br />
                        <p>Awaiting Payment</p>
                        <Link class="btnn" to="/user/deposits/upload-proof/23">UPLOAD PAYMENT PROOF</Link>
                        <br />
                        <Link class="btnn btnn-secondary" to="/user/deposits/list">WAIT FOR CONFIRMATION</Link>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default DepositStep4
