import React from 'react'
import SignalPlans from './signals'
import MiningPlans from './mining'
import TradingPlans from './trading'

const AllPlans = () => {
    return (
        <>
            <div className="">
                <h1 className="center">Pricing</h1>
                <br /><br />
                {/* <h2 className="center">Trading</h2> */}
                <br />
                <TradingPlans />
                <br /><br />
                {/* <h2 className="center">Signals</h2> */}
                <br />
                <SignalPlans />
                <br /><br />
                {/* <h2 className="center">Mining</h2><br /> */}
                <MiningPlans />

            </div>
        </>
    )
}

export default AllPlans
