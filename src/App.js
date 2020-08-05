import React from 'react';
import Info from './components/Info';
import Select from './components/Select';

function App() {
  let companies = [
    {brand:'General Dynamics', symbol:'GD'},
    {brand:'Microsoft', symbol:'MSFT'},
    {brand:'Electronic Arts', symbol:'EA'},
    {brand:'Starbucks', symbol:'SBUX'},
    {brand:'Intel', symbol:'INTC'},
    {brand:'Netflix', symbol:'NFLX'},
    {brand:'PepsiCo', symbol:'PEP'},
    {brand:'PayPal', symbol:'PYPL'},
    {brand:'IBM', symbol:'IBM'},
    {brand:'Biogen', symbol:'BIIB'},
    {brand:'Toyota', symbol:'TM'},
    {brand:'ServiceNow', symbol:'NOW'},
    {brand:'Snap', symbol:'SNAP'},
    {brand:'Twitter', symbol:'TWTR'},
    {brand:'Tesla', symbol:'TSLA'},
    {brand:'Cisco', symbol:'CSCO'},
    {brand:'EBay', symbol:'EBAY'},
    {brand:'T-Mobile', symbol:'TMUS'},
    {brand:'Booking Holdings', symbol:'BKNG'},
    {brand:'Amazon', symbol:'AMZN'},
    {brand:'Apple', symbol:'AAPL'},
    {brand:'Chipotle Mexican Grill', symbol:'CMG'},
    {brand:'American Airlines', symbol:'AAL'},
    {brand:'Zoom', symbol:'ZM'},
    {brand:'Adobe', symbol:'ADBE'},
    {brand:'Alphabet', symbol:'GOOG'},
    {brand:'DraftKings', symbol:'DKNG'},
    {brand:'Nike', symbol:'NKE'},
    {brand:'Alibaba', symbol:'BABA'},
    {brand:'Oracle', symbol:'ORCL'},
    {brand:'Atlassian', symbol:'TEAM'},
    {brand:'Wix.com', symbol:'WIX'},
    {brand:'Nvidia', symbol:'NVDA'},
    {brand:'Facebook', symbol:'FB'},
    {brand:'Walt Disney', symbol:'DIS'}
  ];

  return (
    <div>
      <Info />
      <Select companies = {companies} />
    </div>
  );
}

export default App;

