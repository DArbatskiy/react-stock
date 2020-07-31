import Form from './components/Form';
import Info from './components/Info';
import Stock from './components/Stock';
import Select from './components/Select';

const API_KEY = 'GR5KIC31BMD0ZSAS';

function App() {

  const [symbol, setSymbol] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState('');
  const [openPrice,setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');

  let companies = [
    {brand:'General Dynamics', symbol:'GD'},
    {brand:'Microsoft', symbol:'MSFT'},
    {brand:'Electronic Arts', symbol:'EA'},
    {brand:'SBUX', symbol:'Starbucks'},
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

  let brands = [];
  for (let company in companies) {
    brands= [...brands, companies[company].brand];
  }




  async function handleFormSubmit(e) {
    e.preventDefault();
    let brand = e.target.elements.brand.value;
    const api_url = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${brand}&apikey=${API_KEY}`);
    const data = await api_url.json();

    let lastRefreshed = data["Meta Data"]["3. Last Refreshed"];

    setSymbol(data["Meta Data"]["2. Symbol"]);
    setLastRefreshed(data["Meta Data"]["3. Last Refreshed"]);
    setOpenPrice(data["Time Series (Daily)"][`${lastRefreshed}`]["1. open"]);
    setClosePrice(data["Time Series (Daily)"][`${lastRefreshed}`]["4. close"]);
  }

  return (
    <div>
      <Info />
      <Form onFormSubmit={handleFormSubmit} />
      <Stock 
        symbol = {symbol}
        lastRefreshed = {lastRefreshed}
        openPrice = {openPrice}
        closePrice = {closePrice}
      />
      <Select brands = {brands} />
    </div>
  );
}

export default App;
