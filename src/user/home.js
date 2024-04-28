import React, { useContext } from 'react'
import '../dashboard.css';
import { Link } from 'react-router-dom';
import BottomNav from '../component/bottomnav';
import { AuthContext } from '../context';
import { useEffect } from 'react';

const HomeDashboard = () => {
    const { currentUser } = useContext(AuthContext);
    // useEffect( () => {
    //     async function fetchData() {
            
    //         const response =  await fetch(`http://localhost:4500/profile`);
    //         console.log()
    //       }
    //       fetchData();
    // }, [])
    return (
        <>
            <section className="container">
                <div className="roww">
                    <div className="col l4 s12 ">
                        <div className="bg bg-secondary white-text dashboard-trading notranslate app-px-1 app-py-1" style={{ "background": "url('../assets/images/site/DashboardTrading.png')" }}>
                            <div className="roww center white-text">
                                <div className="col l6 s6 app-py-1">
                                    <h3 className="f-20 undefined white-text">${currentUser.trading_deposit}</h3>
                                    <span style={{ "fontSize": "11px" }}>DEPOSIT BALANCE</span>
                                </div>
                                <div className="col l6 s6 app-py-1">
                                    <h3 className="f-20 undefined white-text">${currentUser.trading_profit}</h3><span style={{ "fontSize": "11px" }}>PROFIT BALANCE</span>
                                </div>
                            </div><br />
                            <center>
                                <progress value="1" max="100" style={{ "width": "98%", "display": "block", "marginTop": "4px" }}></progress>
                                <small>SIGNAL STRENGTH</small>
                            </center>
                        </div>
                        <br />
                        <div className="roww center">
                            <div className="col s6" style={{ "cursor": "pointer" }}>
                                <Link to="/user/plans/categories/trading">
                                    <h6>TRADING PLAN</h6>{currentUser.tradingPlan}
                                </Link>
                            </div>
                            <div className="col s6" style={{ "cursor": "pointer" }}>
                                <Link to="/user/account/verification/home">
                                    <h6>ID VERIFICATION</h6>Skipped
                                </Link>
                            </div>
                        </div><br /><br />
                        <div className="roww ">
                            <div className="col l4 s4 center">
                                <Link to="/user/deposits/fund/step1">
                                    <center>
                                        <span className="material-icons notranslate" style={{ "fontSize": "30px" }}>system_update_alt</span>
                                        <br /><span>Deposit</span>
                                    </center>
                                </Link>
                            </div>
                            <div className="col l4 s4 center">
                                <Link to="/user/traders/">
                                    <center>
                                        <span className="material-icons notranslate" style={{ "fontSize": "30px" }}>group</span><br />
                                        <span>Copy Traders</span>
                                    </center>
                                </Link>
                            </div>
                            <div className="col l4 s4 center">
                                <Link to="/user/referals">
                                    <center>
                                        <span className="material-icons notranslate" style={{ "fontSize": "30px" }}>savings</span><br />
                                        <span>Refer &amp; Earn</span>
                                    </center>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col l8 s12"><br />
                        <div>
                            <ul className="collection">
                                <li className="collection-item app-py-1">
                                    <div className="roww">
                                        <div className="col s2">
                                            <center>
                                                <img src="https://s3-symbol-logo.tradingview.com/indices/nasdaq-100--big.svg" className="ticon" alt='' />
                                            </center>
                                        </div>
                                        <div className="col s4">US Nas 100<br />
                                            <span style={{ "fontSize": "12px" }}>NAS100USD</span>
                                        </div>
                                        <div className="col s4" style={{ "paddingTop": "10px" }}>17561.25</div>
                                        <div className="col s2" style={{ "paddingTop": "10px" }}>
                                            <span className="material-icons notranslate btnn-color">star</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="collection-item app-py-1">
                                    <div className="roww">
                                        <div className="col s2">
                                            <center>
                                                <img src="https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg" className="ticon" alt='' />
                                            </center>
                                        </div>
                                        <div className="col s4">US Wall St 30<br />
                                            <span style={{ "fontSize": "12px" }}>US30USD</span>
                                        </div>
                                        <div className="col s4" style={{ "paddingTop": "10px" }}>38457.55</div>
                                        <div className="col s2" style={{ "paddingTop": "10px" }}>
                                            <span className="material-icons notranslate btnn-color">star</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="collection-item app-py-1">
                                    <div className="roww">
                                        <div className="col s2">
                                            <center>
                                                <img src="https://s3-symbol-logo.tradingview.com/crypto/XTVCXRP--big.svg" className="ticon" alt='' />
                                            </center>
                                        </div>
                                        <div className="col s4">Ripple<br />
                                            <span style={{ "fontSize": "12px" }}>XRPUSD</span>
                                        </div>
                                        <div className="col s4" style={{ "paddingTop": "10px" }}>0.50482</div>
                                        <div className="col s2" style={{ "paddingTop": "10px" }}>
                                            <span className="material-icons notranslate btnn-color">star</span>
                                        </div>
                                    </div>
                                </li>
                            </ul><br /><br />
                        </div>
                    </div>
                </div>
            </section>
            <BottomNav home='active' />
        </>
    )
}

export default HomeDashboard
