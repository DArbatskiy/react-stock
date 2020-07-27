import React from 'react';

function Stock(props) {
  const {symbol, lastRefreshed, openPrice, closePrice} = props;
  return (
    <div>
      <p>Symbol: {symbol}</p>
      <p>LastRefreshed: {lastRefreshed}</p>
      <p>Open price: {openPrice}</p>
      <p>Close price: {closePrice}</p>
    </div>
  );
}

export default Stock;
