import React, { useContext } from 'react'
import View1 from '../component/tradingview/view1'
import BottomNav from '../component/bottomnav'
import View2 from '../component/tradingview/view2'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';

const MiningPage = () => {
    const { currentUser } = useContext(AuthContext);
    
    return (
        <>
            <main className="app-py-1">
                <div className="fade-appear-done fade-enter-done">
                    <section className="pc-container" style={{ "margin": "auto" }}><br />
                        <div className="roww">
                            <div className="col l4 s12">
                                <ul className="collection ">
                                    <li className="collection-item dashboard-mining app-image-gradient white-text app-px-1" style={{backgroundImage:"url('../assets/images/site/DashboardMining.png')"}}><br />
                                        <h2 className="white-text" style={{ "margin": "0px", "fontSize": "35px" }}>${currentUser.trading_deposit}</h2><br /><br /><br />
                                    </li>
                                </ul>
                                <div className="roww center ">
                                    <div className="col l6 s6" style={{ "paddingRight": "0px" }}>
                                        <Link className="btnn btnn-full btnn-trans" to="/user/plans/categories/mining">BUY CONTRACT</Link>
                                        </div>
                                    <div className="col l6 s6" style={{ "paddingLeft": "0px" }}>
                                        <Link className="btnn btnn-full btnn-trans" to="/user/mining-contracts">MY CONTRACTS</Link>
                                        </div>
                                </div>
                                <View1 />
                                <View2 />
                            </div>
                            <div className="col l8 s12">
                                <ul className="collection">
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="roww">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg" alt='' style={{ " maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">{currentUser.btc_mining} BTC<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="roww">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">{currentUser.eth_mining} ETH<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="roww">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBNB--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">{currentUser.binince_coin} BNB<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text">0 GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="roww">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCDOGE--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">{currentUser.dogecoin} DOGE<br /> <span className="grey-text">$0.00</span></div>
                                            <div className="col l2"><span className="grey-text"> GH/s</span><br /></div>
                                        </div>
                                    </li>
                                    <li className="collection-item bg " style={{ "paddingTop": "1.5rem", "paddingBottom": "1.5rem" }}>
                                        <div className="roww">
                                            <div className="col l1 center"><img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCATOM--big.svg" alt='' style={{ "maxHeight": "40px", "borderRadius": "10px" }} /></div>
                                            <div className="col l9 s6">{currentUser.cosmos_mining} COSMOS<br /> <span className="grey-text">$0.00</span></div>
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
