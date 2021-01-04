import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
    script.async = true;
    script.innerHTML = JSON.stringify(
      {
      "colorTheme": "dark",
      "dateRange": "3M",
      "exchange": "US",
      "showChart": true,
      "locale": "en",
      "width": "100%",
      "height": "100%",
      "largeChartUrl": "",
      "isTransparent": true,
      "showSymbolLogo": false,
      "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
      "plotLineColorFalling": "rgba(25, 118, 210, 1)",
      "gridLineColor": "rgba(42, 46, 57, 1)",
      "scaleFontColor": "rgba(120, 123, 134, 1)",
      "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
      "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
      "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
    }
    )
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
