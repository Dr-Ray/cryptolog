import React, { useEffect, useRef } from 'react'

const Trading3 = () => {
    const container = useRef();
    useEffect(() => {
        const script = document.createElement("script");
        const script2 = document.createElement("script");

        script.src = "https://s3.tradingview.com/tv.js";
        script2.type = "text/javascript";
        script2.async = true;
        script2.innerHTML = `
        new TradingView.MediumWidget(
            {
                "symbols": [
                    [
                        "BTC|1Y"
                    ]
                ],
                "chartOnly": false,
                "width": "100%",
                "height": "387",
                "locale": "en",
                "colorTheme": "light",
                "gridLineColor": "rgba(42, 46, 57, 0)",
                "fontColor": "#787b86",
                "isTransparent": true,
                "autosize": true,
                "showFloatingTooltip": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Trebuchet MS, sans-serif",
                "noTimeScale": false,
                "chartType": "area",
                "lineColor": "#2962ff",
                "bottomColor": "rgba(41, 98, 255, 0)",
                "topColor": "rgba(41, 98, 255, 0.3)",
                "container_id": "tradingview-widget"
            }
        );
        `;
        container.current.appendChild(script);
        container.current.appendChild(script2);
    }, []);
    return (
        <div class="col-md-12 col-lg-7 mt-3 mt-lg-0">
            <div class="card card-body ms-lg-5" ref={container}>
                <div id="tradingview-widget"></div>
            </div>
        </div>
        
    )
}

export default Trading3
