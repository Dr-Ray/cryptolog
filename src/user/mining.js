import React from 'react'
import View1 from '../component/tradingview/view1'
import BottomNav from '../component/bottomnav'
import View2 from '../component/tradingview/view2'
import { Link } from 'react-router-dom';

const MiningPage = () => {
    return (
        <>
            <main className="app-py-1">
                <div className="fade-appear-done fade-enter-done">
                    <section className="pc-container" style={{ "margin": "auto" }}><br />
                        <div className="row">
                            <div className="col l4 s12">
                                <ul className="collection ">
                                    <li className="collection-item dashboard-mining app-image-gradient white-text app-px-1" style={{backgroundImage:"url('../assets/images/site/DashboardMining.png')"}}><br />
                                        <h2 className="white-text" style={{ "margin": "0px", "fontSize": "35px" }}>$0.00</h2><br /><br /><br />
                                    </li>
                                </ul>
                                <div className="row center ">
                                    <div className="col l6 s6" style={{ "paddingRight": "0px" }}>
                                        <Link className="btn btn-full btn-trans" to="/user/plans/categories/mining">BUY CONTRACT</Link>
                                        </div>
                                    <div className="col l6 s6" style={{ "paddingLeft": "0px" }}>
                                        <Link className="btn btn-full btn-trans" to="/user/mining-contracts">MY CONTRACTS</Link>
                                        </div>
                                </div>
                                <View1 />
                                <View2 />
                            </div>
                            <div className="col l8 s12">
                                <ul className="collection">
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="row">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg" alt='' style={{ " maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">0.000000 BTC<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="row">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">0.000000 ETH<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="row">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBNB--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">0.000000 BNB<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text">0 GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="row">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCDOGE--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">0.000000 DOGE<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="row">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCATOM--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">0.000000 ATOM<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <BottomNav mining={'active'} />
                </div>
            </main>
        </>
    )
}

export default MiningPage