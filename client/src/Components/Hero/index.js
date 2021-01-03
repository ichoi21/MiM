import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
        "proName": "FOREXCOM:SPXUSD",
        "title": "S&P 500"
        },
        {
        "proName": "FOREXCOM:NSXUSD",
        "title": "Nasdaq 100"
        },
        {
        "description": "",
        "proName": "CURRENCYCOM:US30"
        },
        {
        "description": "BTC|USD",
        "proName": "BITSTAMP:BTCUSD"
        },
        {
        "description": "ETH|USD",
        "proName": "BITSTAMP:ETHUSD"
        }
        ],
        "colorTheme": "light",
        "isTransparent": true,
        "showSymbolLogo": false,
        "locale": "en"
    })
    this.myRef.current.appendChild(script);
  }

  render() {
    return (
      <div className="tradingview-widget-container" ref={this.myRef}>
        <div className="tradingview-widget-container__widget"></div>          
    </div>
 
    )
  }
}
