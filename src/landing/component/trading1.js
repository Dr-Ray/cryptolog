import React, { useEffect, useRef } from 'react'

const Trading1 = () => {
    const container = useRef();
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
              "symbols": [
                  {
                      "description": "BTC/USDT",
                      "proName": "BINANCE:BTCUSDT"
                    },
                    {
                      "description": "ETH/USDT",
                      "proName": "BINANCE:ETHUSDT"
                    },
                    {
                      "description": "SOL/USDT",
                      "proName": "BINANCE:SOLUSDT"
                    },
                    {
                      "description": "BNB/USDT",
                      "proName": "BINANCE:BNBUSDT"
                    },
                    {
                      "description": "DOGE/USDT",
                      "proName": "BINANCE:DOGEUSDT"
                    },
                    {
                      "description": "MATIC/USDT",
                      "proName": "BINANCE:MATICUSDT"
                    },
                    {
                      "description": "SHIB/USDT",
                      "proName": "BINANCE:SHIBUSDT"
                    },
                    {
                      "description": "GALA/USDT",
                      "proName": "BINANCE:GALAUSDT"
                    },
                    {
                      "description": "OP/USDT",
                      "proName": "BINANCE:OPUSDT"
                    },
                    {
                      "description": "DOT/USDT",
                      "proName": "BINANCE:DOTUSDT"
                    }
                  ],
                  "showSymbolLogo": true,
                  "colorTheme": "dark",
                  "isTransparent": false,
                  "displayMode": "compact",
                  "locale": "en"
                }`;
        container.current.appendChild(script);
    }, []);
    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    )
}

export default Trading1
