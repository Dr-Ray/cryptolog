import React from 'react'
import { Link } from 'react-router-dom'

const CryptoTradingLanding = () => {
    return (
        <>
            <section className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="d-none">Crypto Trading</h6>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <section className="py-5 card-style-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <h1 className="fw-bold mb-2">Crypto <span className="text-highlight">Trading</span></h1>
                            </div>
                        </div>

                        <section className="">
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-lg-12">
                                        <div className="card">
                                            <div className="card-body p-3 p-md-5">
                                                <p>
                                                    CryptoLogia is excited to announce the launch of our new cryptocurrency trading platform.
                                                    Now you can start trading Bitcoin, Ethereum and many more cryptocurrencies quickly,
                                                    easily and safely from wherever you are — in just seconds.
                                                    You get great margin trading leverage and short sell options with fast deposits and withdrawals.
                                                    Our support team is available 24/7/365 to help get you trading on our
                                                    CySEC-regulated platform with a trading volume of US $11 billion monthly.
                                                </p>
                                                <p>
                                                    What is a crypto currency<br />
                                                    A cryptocurrency like bitcoin is a virtual currency traded peer-to-peer on a blockchain, independent of centralized authorities like banks and governments. Cryptocurrencies are entirely virtual, so they are not backed by physical commodities and have no intrinsic value.
                                                    <br />
                                                    How Do Cryptocurrencies Work?<br />
                                                    Primarily, cryptocurrencies rely on blockchain technology to complete a transaction via an intricate P2P network. Once a transfer request is entered into the network, it is validated by the network and added to a pool of other transactions to create a block of data for the ledger, which is then entered into the existing blockchain. Once the block is successfully added to the chain, the transaction is approved and completed.
                                                    <br />
                                                    Are There Investment Opportunities with Cryptocurrencies?<br />
                                                    Absolutely. Cryptocurrencies have become established investment commodities among major financial institutions and have even been adopted by countries such as Australia and Japan. As with any investment though, there are risks linked to market movements, high volatility and economics.
                                                </p>
                                                <div className="card bg-light border-0 mt-4 mb-1">
                                                    <div className="card-body px-2 py-1">
                                                        <small>For more information please contact <Link className="link-primary text-decoration-none" to="mailto:">info@cexafm.com</Link></small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm border-info">
                                    <div className="card-body d-lg-flex justify-content-between align-items-center p-4">
                                        <h4 className="fw-bold mb-0">Get up to $300 plus 60 days of commission-free stocks</h4>
                                        <Link className="btn btn-info mt-2 mt-lg-0" to="/register">Open an Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CryptoTradingLanding
