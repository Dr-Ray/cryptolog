import React from 'react'
import { Link } from 'react-router-dom'

const BuyCrypto = () => {
    return (
        <>
            <section className="center"><br /><br />
                <div className="roww">
                    <div className="col l4 offset-l4 s12">
                        <h2>BUY CRYPTO</h2>
                        <p className="container">buy bitcoin, ethereum, and other crypto currencies for account funding from third parties</p><br /><br />
                        <ul className="collection">
                            <Link to="https://gemini.com/" target="_blank">
                                <li className="collection-item btnn-color">Gemini</li>
                            </Link>
                            <Link to="https://coinbase.com/" target="_blank">
                                <li className="collection-item btnn-color">Coinbase</li>
                            </Link>
                            <Link to="https://crypto.com/" target="_blank">
                                <li className="collection-item btnn-color">Crypto.com</li>
                            </Link>
                            <Link to="https://bitcoin.com/" target="_blank">
                                <li className="collection-item btnn-color">Bitcoin.com</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyCrypto
