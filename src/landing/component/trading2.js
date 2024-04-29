import React, { useEffect, useRef } from 'react'

const Trading2 = () => {
    const container = useRef();
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
            "symbol": "BINANCE:BTCUSDT",
            "width": "100%",
            "height": "200",
            "locale": "en",
            "dateRange": "12M",
            "colorTheme": "dark",
            "trendLineColor": "rgba(73, 133, 231, 1)",
            "isTransparent": false,
            "autosize": true,
            "largeChartUrl": ""
          }
        `;
        container.current.appendChild(script);
    }, []);
    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    )
}

export default Trading2
