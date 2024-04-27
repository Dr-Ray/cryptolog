import React from 'react'
import { Link } from 'react-router-dom'

const CopyTrading = () => {
    return (
        <>
            <div className="container">
                <form>
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete" placeholder="Search" data-target="autocomplete-options-4a2f700f-da8f-0365-0b82-086707faa596" />
                        <ul id="autocomplete-options-4a2f700f-da8f-0365-0b82-086707faa596" className="autocomplete-content dropdown-content" tabindex="0"></ul>
                    </div>
                </form>
                <ul className="collection row">
                    <li className="collection-item app-mb-2" style={{"padding": "0px"}}>
                        <div className="row app-link-list">
                            <div className="col s3 l1 app-trader-border-image">
                                <center>
                                    <img className="circle" src="/uploads/images/trader-143-1713211310.png" style={{"maxWidth": "70px", "maxHeight": "70px"}} alt=''/><br />
                                    <button className="green btn btn-full" style={{"fontSize": "10px"}}>COPY</button>
                                </center>
                            </div>
                            <Link to="/user/traders/143">
                                <div className="col s9 l5 app-trader-border-name">
                                    <h3>Kyren</h3>
                                    <p></p>
                                </div>
                                <div className="col s4 l2 center app-trader-border">
                                    <h3>97.47%</h3>Return Rate
                                </div>
                                <div className="col s4 l2 center app-trader-border">
                                    <h3>3530</h3>Followers
                                </div>
                                <div className="col s4 l2 center app-trader-border">
                                    <h3>0</h3>Minimum
                                </div>
                            </Link>
                        </div>
                    </li>
                </ul>
                <center>
                    <ul style={{ "display": "inline-block" }}>
                        <li className="pagination-text">(1 / 2)</li>
                    </ul>
                    <div style={{ "display": "inline-block" }}><i className="material-icons notranslate pagination-button">chevron_right</i></div>
                </center><br />
                <center><Link to="/pages/copy-trading-agreement">Copy Trading Agreement</Link></center>
            </div>
        </>
    )
}

export default CopyTrading
