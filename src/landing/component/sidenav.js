import { Link } from 'react-router-dom'

const SideNavLanding = ({openNav, setopenNav}) => {
    return (
        <>
            <div className={openNav ? "sidenavv-overlay open-overlayy" : 'sidenavv-overlay'} onClick={() => setopenNav(!openNav)}></div>
            <ul className={openNav ? "sidenavv openNavv" : 'sidenavv'}>
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="/img/logog.png" alt='logo' height={80} />
                        </div>
                        <br /><br /><br />
                    </div>
                </li>
                <li className="no-padding">
                    <ul className="">
                        <li className="">
                            <div>
                                <ul>
                                    <li><Link className="sidenavv-close" to="/">
                                        <span className="material-icons notranslate">home</span>
                                        <span style={{ "paddingLeft": "10px" }}>Home</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/login">
                                        <span className="material-icons notranslate">person_outline</span>
                                        <span style={{ "paddingLeft": "10px" }}>Sign In</span>
                                    </Link></li>
                                    <li><Link className="sidenav-close" to="/register">
                                        <span className="material-icons notranslate">person_add</span>
                                        <span style={{ "paddingLeft": "10px" }}>Signup</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/about">
                                        <span className="material-icons notranslate">account_circle</span>
                                        <span style={{ "paddingLeft": "10px" }}>About</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/market">
                                        <span className="material-icons notranslate">input</span>
                                        <span style={{ "paddingLeft": "10px" }}>Markets</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/education">
                                        <span className="material-icons notranslate">supervisor_account</span>
                                        <span style={{ "paddingLeft": "10px" }}>Academy</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/copytrading">
                                        <span className="material-icons notranslate">content_copy</span>
                                        <span style={{ "paddingLeft": "10px" }}>Copy trading</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/cryptotrading">
                                        <span className="material-icons notranslate">copyright</span>
                                        <span style={{ "paddingLeft": "10px" }}>Crypto trading</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/forextrading">
                                        <span className="material-icons notranslate">wysiwyg</span>
                                        <span style={{ "paddingLeft": "10px" }}>Forex Trading</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/stockstrading">
                                        <span className="material-icons notranslate">insert_chart_outlined</span>
                                        <span style={{ "paddingLeft": "10px" }}>Stocks Trading</span>
                                    </Link></li>
                                    <li><Link className="sidenavv-close" to="/terms">
                                        <span className="material-icons notranslate">folder_open</span>
                                        <span style={{ "paddingLeft": "10px" }}>Terms of service</span>
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

export default SideNavLanding
