import React from 'react';

function Stock(props) {
  const {ticker, lastRefreshed, openPrice, closePrice} = props;
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `/logos/${ticker}.svg`} 
        alt='logo' 
        style={{height: 100, width: 100, borderRadius: '50%', backgroundColor: 'white'}}/>
      <p>Ticker: {ticker}</p>
      <p>LastRefreshed: {lastRefreshed}</p>
      <p>Open price: {openPrice}</p>
      <p>Close price: {closePrice}</p>
    </div>
  );
}

export default Stock;
