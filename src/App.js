import { useState } from 'react';
import './app.css'
import axios from 'axios';


function App() {
  const [asset, setAsset] = useState('')
  const [button, setButton] = useState('')

  const handleInputChange = (e) => {
    setAsset(e.target.value);
  };

  const handleButtonclick = (e) => {
    axios.get(`https://api.blockchain.com/v3/exchange/tickers/${asset}`).then((Response)=>{
      setButton(Response.data)
      console.log(button);
    
    })};


  return (

    <div className="app">
      <p>Type your crypto asset in capital letters(eg: BTC-USD)</p>
      <input type='text'  onChange={handleInputChange} placeholder='Type asset name' alt='input' />
      <button onClick={handleButtonclick}>Submit</button>

      <div>
        <h2>Symbol:<span>{button.symbol}</span></h2>
        <h2>Current Price:<span>{button.last_trade_price}</span></h2>
      </div>

    </div>

  );

}

export default App;


