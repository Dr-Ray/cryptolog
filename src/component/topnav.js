import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [openNav, setopenNav] = useState(false);
    return (
        <>
            <div className="navbar-fixed">
                <nav className="bg ">
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li>
                                <Link data-target="sn" to="#" className="sidenav-trigger show-on-large" onClick={() => setopenNav(!openNav)}>
                                    <span className="material-icons notranslate">menu</span>
                                </Link>
                            </li>
                            <li><Link to="/user"><b>CryptoLogia</b></Link></li>
                        </ul>
                        <ul className="right">
                            <li className="hide-on-med-and-down">Ray Adolph</li>
                            <li><span className="material-icons notranslate " style={{ "fontSize": "20px", "top": "0px" }}>dark_mode</span></li>
                            <li className="li"><Link to="/user/notifications-list"><span className="material-icons notranslate">notifications</span>(0)</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={openNav ? "sidenav-overlay open-overlay" : 'sidenav-overlay'} onClick={() => setopenNav(!openNav)}></div>
            <ul className={openNav ? "sidenav openNav" : 'sidenav'} id="sn">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="/assets/images/site/Office.jpg" alt='office' />
                        </div>
                        <img className="circle" src="/uploads/images/human.png" alt='RAY ADOLPH' />
                        <span className="white-text" style={{ "marginTop": "15px", "display": "inline-block" }}>RAY ADOLPH</span>
                        <br /><br /><br />
                    </div>
                </li>
                <li className="no-padding">
                    <ul className="collapsible collapsible-accordion">
                        <li className="active">
                            <div>
                                <ul>
                                    <li><Link className="sidenav-close" to="/user/">
                                        <span className="material-icons notranslate">home</span>
                                        <span style={{ "paddingLeft": "10px" }}>Home</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/account">
                                        <span className="material-icons notranslate">account_circle</span>
                                        <span style={{ "paddingLeft": "10px" }}>Account</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/deposits/list">
                                        <span className="material-icons notranslate">input</span>
                                        <span style={{ "paddingLeft": "10px" }}>Deposits</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/referals">
                                        <span className="material-icons notranslate">supervisor_account</span>
                                        <span style={{ "paddingLeft": "10px" }}>Referrals</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/withdrawals/list">
                                        <span className="material-icons notranslate">payments</span>
                                        <span style={{ "paddingLeft": "10px" }}>Withdrawals</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/trading/markets">
                                        <span className="material-icons notranslate">store</span>
                                        <span style={{ "paddingLeft": "10px" }}>Markets</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/trading/watchlist">
                                        <span className="material-icons notranslate">star</span>
                                        <span style={{ "paddingLeft": "10px" }}>Watchlist</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/plans/categories/trading">
                                        <span className="material-icons notranslate">upgrade</span>
                                        <span style={{ "paddingLeft": "10px" }}>Upgrade</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/user/plans/categories/signals">
                                        <span className="material-icons notranslate">wifi</span>
                                        <span style={{ "paddingLeft": "10px" }}>Buy Signals</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close">
                                        <span className="material-icons notranslate">power_settings_new</span>
                                        <span style={{ "paddingLeft": "10px" }}>Sign Out</span>
                                    </Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default TopNav
