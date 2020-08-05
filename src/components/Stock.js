import React from 'react';

function Stock(props) {
  const {ticker, lastRefreshed, openPrice, closePrice} = props;
  return (
    <div>
      <p>Ticker: {ticker}</p>
      <p>LastRefreshed: {lastRefreshed}</p>
      <p>Open price: {openPrice}</p>
      <p>Close price: {closePrice}</p>
    </div>
  );
}

export default Stock;
