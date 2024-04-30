import React, { useContext } from 'react'
import '../dashboard.css';
import { Link } from 'react-router-dom';
import BottomNav from '../component/bottomnav';
import { AuthContext } from '../context';
import UserWatchList from './trading/watchlist';

const HomeDashboard = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <section className="container">
                <div className="roww">
                    <div className="col l4 s12 ">
                        <div className="bg bg-secondary white-text dashboard-trading notranslate app-px-1 app-py-1" style={{ "background": "url('../assets/images/site/DashboardTrading.png')" }}>
                            <div className="roww center white-text">
                                <div className="col l6 s6 app-py-1">
                                    <h3 className="f-20 undefined white-text">${currentUser.wallet_balance.trading_deposit}</h3>
                                    <span style={{ "fontSize": "11px" }}>DEPOSIT BALANCE</span>
                                </div>
                                <div className="col l6 s6 app-py-1">
                                    <h3 className="f-20 undefined white-text">${currentUser.wallet_balance.trading_profit}</h3><span style={{ "fontSize": "11px" }}>PROFIT BALANCE</span>
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
                        <UserWatchList />
                    </div>
                </div>
            </section>
            <BottomNav home='active' />
        </>
    )
}

export default HomeDashboard
