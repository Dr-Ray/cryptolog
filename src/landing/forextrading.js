import React from 'react'
import { Link } from 'react-router-dom'

const ForexTrading = () => {
  return (
    <>
      <section className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="d-none">Forex Trading</h6>
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
                                <h1 className="fw-bold mb-2">Forex <span className="text-highlight">Trading</span></h1>
                            </div>
                        </div>

                        <section className="">
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-lg-12">
                                        <div className="card">
                                            <div className="card-body p-3 p-md-5">
                                                <p>
                                                    Forex is short for foreign exchange. The forex market is a place where currencies are traded. It is the largest and most liquid financial market in the world with an average daily turnover of 6.6 trillion U.S. dollars as of 2019. The basis of the forex market is the fluctuations of exchange rates. Forex traders speculate on the price fluctuations of currency pairs, making money on the difference between buying and selling prices.
                                                    <br/><br/><br/>
                                                    What is Margin?<br/>
                                                    Margin is the amount of a trader’s funds required to open a new position. Margin is estimated based on the size of your trade, which is measured in lots. A standard lot is 100,000 units. We also provide mini lots (10,000 units), micro lots (1,000 units) and nano lots (100 units). The greater the lot, the bigger the margin amount. Margin allows you to trade with leverage, which, in turn, allows you to place trades larger than the amount of your trading capital. Leverage influences the margin amount too.
                                                </p><br/>
                                                <p>
                                                    What is leverage?<br/>
                                                    Leverage is the ability to trade positions larger than the amount of capital you possess. This mechanism allows traders to use extra funds from a broker in order to increase the size of their trades. For example, 1:100 leverage means that a trader who has deposited $1,000 into his or her account can trade with $100,000. Although leverage lets traders increase their trade size and, consequently, potential gains, it magnifies their potential losses putting their capital at risk.

                                                    <br/><br/><br/>
                                                    When is the forex market open?<br/>
                                                    Due to different time zones, the international forex market is open 24 hours a day — from 5 p.m. Eastern Standard Time (EST) on Sunday to 4 p.m. EST on Friday, except holidays. Markets first open in Australasia, then in Europe and afterwards in North America. So, when the market closes in Australia, traders can have access to markets in other regions. The 24-hour availability of the forex market is what makes it so attractive to millions of traders.
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

export default ForexTrading
