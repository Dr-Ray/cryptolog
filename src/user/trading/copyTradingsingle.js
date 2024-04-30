import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CopyTradingSingle = () => {
    const {id} = useParams();
    const [trader, setTrader] = useState({})
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4500/user/traders/single/${id}`);
            const resp = await response.json();
            setTrader(resp);
        }
        fetchData();
    }, [id])
    return (
        <>
            <section className="roww">
                <div className="col l4 offset-l4 s12 center">
                    <div className="cardd-panel">
                        <center>
                            <img src={`/uploads/images/traders/${trader.image}`} className="circle responsive-img" style={{ "maxHeight": "150px" }} alt="" />
                            <h2>{trader.name}</h2>
                            <p></p><br />
                            <table className="striped">
                                <tbody>
                                    <tr className="roww">
                                        <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>trades</td>
                                        <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{trader.trades}</td>
                                    </tr>
                                    <tr className="roww">
                                        <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>total wins</td>
                                        <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{trader.total_wins}</td>
                                    </tr>
                                    <tr className="roww">
                                        <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>followers</td>
                                        <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{trader.followers}</td>
                                    </tr>
                                    <tr className="roww">
                                        <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>total losses</td>
                                        <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{trader.total_losses}</td>
                                    </tr>
                                    <tr className="roww">
                                        <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>win percent</td>
                                        <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{trader.win_percent}%</td>
                                    </tr>
                                    <tr className="roww">
                                        <td className="col l4 s7 table-title" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>profit share</td>
                                        <td className="col l8 s5 table-content" style={{ "paddingTop": "1rem", "paddingBottom": "1rem" }}>{trader.profit_share}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CopyTradingSingle
