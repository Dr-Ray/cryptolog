import React from 'react'

const MiningContracts = () => {
    return (
        <div class="container">
            <div>
                <div class="center">
                    <b>MY MINING CONTRACTS</b>
                </div><br />
                <div class="container">
                    <ul class="collection">
                        <li class="collection-item app-py-2">
                            <p id="no-data" style={{ "textAlign": "center" }}>
                                <span class="app-font-normal">YOU HAVE NO MINING CONTRACT AT THE MOMENT</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MiningContracts
