import React from 'react'

const IndexPrices = ({ data }) => {
    return (
        <>
            <li class="collection-item app-py-2">
                <div class="roww">
                    <div class="col s2 l1">
                        <img src={data.icon} style={{ "width": "46px", "height": "46px" }} alt={data.name} />
                    </div>
                    <div class="col s5 l9" style={{ "paddingTop": "5px" }}>{data.tradingview}<br />{data.name}</div>
                    <div class="col s3 l1" style={{ "textAlign": "right", "paddingTop": "10px" }}>{data.price_usd}</div>
                    <div class="col s2 l1" style={{ "paddingTop": "10px" }}>
                        <span class="material-icons notranslate btn-color">star</span>
                    </div>
                </div>
            </li>
        </>
    )
}

export default IndexPrices
