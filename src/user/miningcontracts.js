import React from 'react'

const MiningContracts = () => {
    return (
        <div className="container">
            <div>
                <div className="center">
                    <b>MY MINING CONTRACTS</b>
                </div><br />
                <div className="container">
                    <ul className="collection">
                        <li className="collection-item app-py-2">
                            <p id="no-data" style={{ "textAlign": "center" }}>
                                <span className="app-font-normal">YOU HAVE NO MINING CONTRACT AT THE MOMENT</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MiningContracts
