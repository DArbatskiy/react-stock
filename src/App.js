import React, { setState } from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import Stock from './components/Stock';

const API_KEY = 'GR5KIC31BMD0ZSAS';

function App(state) {

  state = {
    symbol: undefined,
    lastRefrehed: undefined,
    openPrice: undefined,
    closePrice: undefined
  }
  
  
  async function gettingStock(e) {
    e.preventDefault();
    let brand = e.target.elements.brand.value;
    const api_url = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${brand}&apikey=${API_KEY}`);
    const data = await api_url.json();

    let lastRefrehed = data["Meta Data"]["3. Last Refreshed"];

    setState({
        symbol: data["Meta Data"]["2. Symbol"],
        lastRefrehed: data["Meta Data"]["3. Last Refreshed"],
        openPrice: data["Time Series (Daily)"][`${lastRefrehed}`]["1. open"],
        closePrice: data["Time Series (Daily)"][`${lastRefrehed}`]["4. close"]
      });
  }

  return (
    <div>
      <Info />
      <Form stockMethod={gettingStock} />
      <Stock 
        symbol = {state.symbol}
        lastRefrehed = {state.lastRefrehed}
        openPrice = {state.openPrice}
        closePrice = {state.closePrice}
      />
    </div>
  );
}

export default App;
