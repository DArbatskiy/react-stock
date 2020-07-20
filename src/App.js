import React from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import Stock from './components/Stock';

const API_KEY = 'GR5KIC31BMD0ZSAS';

class App extends React.Component {

  state= {
    symbol: undefined,
    lastRefrehed: undefined,
    openPrice: undefined,
    closePrice: undefined
  }

  gettingStock = async (e) => {
    e.preventDefault();
    let brand = e.target.elements.brand.value;
    const api_url = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${brand}&apikey=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
    console.log(data["Meta Data"]["2. Symbol"]);

    let lastRefrehed = data["Meta Data"]["3. Last Refreshed"];
    let symbol = "2. Symbol"
    console.log(data["Meta Data"][`${symbol}`]);

   this.setState({
      symbol: data["Meta Data"]["2. Symbol"],
      lastRefrehed: data["Meta Data"]["3. Last Refreshed"],
      openPrice: data["Time Series (Daily)"][`${lastRefrehed}`]["1. open"],
      closePrice: data["Time Series (Daily)"][`${lastRefrehed}`]["4. close"]
    });
  }

  render() {
    return (
      <div>
        <Info />
        <Form stockMethod={this.gettingStock} />
        <Stock 
          symbol = {this.state.symbol}
          lastRefrehed = {this.state.lastRefrehed}
          openPrice = {this.state.openPrice}
          closePrice = {this.state.closePrice}
        />
      </div>
    );
  }
}

export default App;
