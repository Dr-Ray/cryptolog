import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = ({ home, trades, markets, mining }) => {
    return (
        <section>
            <div className="fixed-footer bgc" style={{ "zIndex": 1 }}>
                <ul className="tabs">
                    <li className="tab col s4">
                        <Link className={home} to="/user">
                            <span className="material-icons notranslate">home</span>
                            <span className="show-on-med-and-down" style={{ "paddingLeft": "6px" }}>Home</span>
                        </Link>
                    </li>
                    <li className="tab col s4">
                        <Link className={markets} to="/user/trading/markets">
                            <span className="material-icons notranslate">store</span>
                            <span className="show-on-med-and-down" style={{ "paddingLeft": "6px" }}>Markets</span>
                        </Link>
                    </li>
                    <li className="tab col s4">
                        <Link className={trades} to="/user/trades">
                            <span className="material-icons notranslate">history_edu</span>
                            <span className="show-on-med-and-down" style={{ "paddingLeft": "6px" }}>Trades</span>
                        </Link>
                    </li>
                    <li className="tab col s4">
                        <Link className={mining} to="/user/mining">
                            <span className="material-icons notranslate">token</span>
                            <span className="show-on-med-and-down" style={{ "paddingLeft": "6px" }}>Mining</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BottomNav
