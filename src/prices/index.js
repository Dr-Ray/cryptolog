import React from 'react'
import { toast } from 'react-toastify'

const IndexPrices = ({ data, addToWish, currentUser }) => {
    const Wishlist = async () => {
        if (addToWish) {
            let mywish = {
                icon: data.icon,
                name: data.name,
                tradingView: data.tradingview,
                price_usd: data.price_usd,
                userid: currentUser
            }

            const dd = await fetch('http://localhost:4500/user/trading/wishlist/add', {
                method: "POST",
                body: mywish
            })

            const resp = await dd.json();
            if (resp.status === 200) {
                toast("added to wishlist")
            } else {
                toast(resp.message)
            }
        }
        return
    }
    return (
        <>
            <li class="collection-item app-py-2">
                <div class="roww">
                    <div class="col s2 l1">
                        <img src={data.icon} style={{ "width": "46px", "height": "46px" }} alt={data.name} />
                    </div>
                    <div class="col s5 l9" style={{ "paddingTop": "5px" }}>{data.tradingview}<br />{data.name}</div>
                    <div class="col s3 l1" style={{ "textAlign": "right", "paddingTop": "10px" }}>{data.price_usd}</div>

                    <div class="col s2 l1" style={{ "paddingTop": "10px" }} onClick={Wishlist}>
                        <span class="material-icons notranslate btn-color">star</span>
                    </div>
                </div>
            </li>
        </>
    )
}

export default IndexPrices
