import React, {useState} from 'react';
import Stock from './Stock';

export default function Select(props) {
  const{companies} = props;
  const [brand, setBrand] = useState('');

  const [ticker, setTicker] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState('');
  const [openPrice,setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');

  async function handleButtonClick() {
    const API_KEY = 'GR5KIC31BMD0ZSAS';
    const api_url = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${brand}&apikey=${API_KEY}`);
    const data = await api_url.json();

    let lastRefreshed = data["Meta Data"]["3. Last Refreshed"];

    setTicker(data["Meta Data"]["2. Symbol"]);
    setLastRefreshed(data["Meta Data"]["3. Last Refreshed"]);
    setOpenPrice(data["Time Series (Daily)"][`${lastRefreshed}`]["1. open"]);
    setClosePrice(data["Time Series (Daily)"][`${lastRefreshed}`]["4. close"]);

  }
  

  return (
    <>
      <select value={brand} onChange={e=>setBrand(e.target.value)}>
        {companies.map(company => <option value={company.symbol}>{company.brand}</option>)}
      </select>
      <button onClick={handleButtonClick}>Get Info</button>
      {ticker &&< Stock 
          ticker = {ticker}
          lastRefreshed = {lastRefreshed}
          openPrice = {openPrice}
          closePrice = {closePrice}
      />}
    </>
  );
} 
