import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context';

const CopyTrading = () => {
    const { currentUser } = useContext(AuthContext);
    const [traders, setTraders] = useState([])
    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`http://localhost:4500/user/traders/all`);
            const resp = await response.json();
            setTraders(resp);
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="container">
                <form>
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete" placeholder="Search" data-target="autocomplete-options-4a2f700f-da8f-0365-0b82-086707faa596" />
                        <ul id="autocomplete-options-4a2f700f-da8f-0365-0b82-086707faa596" className="autocomplete-content dropdown-content" tabindex="0"></ul>
                    </div>
                </form>
                <ul className="collection roww">
                    {
                        traders.map((trader, index) => (
                            <>
                                <li className="collection-item app-mb-2" style={{ "padding": "0px" }}>
                                    <div className="roww app-link-list">
                                        <div className="col s3 l1 app-trader-border-image">
                                            <center>
                                                <img className="circle" src={`/uploads/images/traders/${trader.image}`} style={{ "maxWidth": "70px", "maxHeight": "70px" }} alt='' /><br />
                                                {
                                                    trader.copytrader.accepted ? (
                                                        <>
                                                            <button className="green btnn btnn-full" style={{ "fontSize": "10px" }}>Accepted</button>
                                                        </>
                                                    ) : (
                                                        
                                                        <>
                                                            {(trader.copytrader.copier_id === currentUser.id) ? (
                                                                <>
                                                                    <button className="green btnn btnn-full" style={{ "fontSize": "10px" }}>Requested</button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <button className="green btnn btnn-full" style={{ "fontSize": "10px" }}>Copy</button>
                                                                </>
                                                            )}
                                                        </>
                                                )
                                                }
                                            </center>
                                        </div>
                                        <Link to={`/user/traders/${trader.id}`}>
                                            <div className="col s9 l5 app-trader-border-name">
                                                <h3>{trader.name}</h3>
                                                <p>{trader.bio}</p>
                                            </div>
                                            <div className="col s4 l2 center app-trader-border">
                                                <h3>{trader.win_percent}%</h3>Return Rate
                                            </div>
                                            <div className="col s4 l2 center app-trader-border">
                                                <h3>{trader.followers}</h3>Followers
                                            </div>
                                            <div className="col s4 l2 center app-trader-border">
                                                <h3>0</h3>Minimum
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            </>
                        ))
                    }
                </ul>
                <br />
                <center><Link to="/pages/copy-trading-agreement">Copy Trading Agreement</Link></center>
            </div>
        </>
    )
}

export default CopyTrading
