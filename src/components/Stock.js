import React from 'react';

class Stock extends React.Component {
  render() {
    return (
      <div>
        <p>Symbol: {this.props.symbol}</p>
        <p>LastRefrehed: {this.props.lastRefrehed}</p>
        <p>Open price: {this.props.openPrice}</p>
        <p>Close price: {this.props.closePrice}</p>
      </div>
    );
  }
}

export default Stock;