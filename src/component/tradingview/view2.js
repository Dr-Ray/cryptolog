// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function View1() {
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
                "symbol": "ETHUSD",
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "dateRange": "1d",
                "colorTheme": "light",
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
    );
}

export default memo(View1);
