import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import Stock from './components/Stock';

const API_KEY = 'GR5KIC31BMD0ZSAS';

function App() {
  
  const [symbol, setSymbol] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState('');
  const [openPrice,setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');
  
  async function gettingStock(e) {
    e.preventDefault();
    let brand = e.target.elements.brand.value;
    const api_url = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${brand}&apikey=${API_KEY}`);
    const data = await api_url.json();

    const lastRefreshed = data["Meta Data"]["3. Last Refreshed"];

    setSymbol(data["Meta Data"]["2. Symbol"]);
    setLastRefreshed(data["Meta Data"]["3. Last Refreshed"]);
    setOpenPrice(data["Time Series (Daily)"][`${lastRefreshed}`]["1. open"]);
    setClosePrice(data["Time Series (Daily)"][`${lastRefreshed}`]["4. close"]);
  }

  return (
    <div>
      <Info />
      <Form stockMethod={gettingStock} />
      <Stock 
        symbol = {symbol}
        lastRefreshed = {lastRefreshed}
        openPrice = {openPrice}
        closePrice = {closePrice}
      />
    </div>
  );
}

export default App;
