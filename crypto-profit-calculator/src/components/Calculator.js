
import { useState } from 'react';


function Calculator() {
  // State declarations
  const [investment, setInvestment] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');

  const coinsOwned = investment / buyPrice;
  const currentValue = coinsOwned * sellPrice;
  const profit = currentValue - investment;
  const profitPercent = (profit / investment) * 100;

  console.log("Coins Owned:", coinsOwned);
  console.log("Current Value:", currentValue);
  console.log("Profit:", profit);
  console.log("Return (%):", profitPercent);


  return (
    <div>
      <h2>Crypto Profit Calculator</h2>
      <p>Enter your investment details below.</p>

      <input
        type="number"
        placeholder="Investment Amount"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Buy Price per Coin"
        value={buyPrice}
        onChange={(e) => setBuyPrice(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Sell Price per Coin"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
      />
      
      <div style={{ marginTop: '20px' }}>

      <h3>Results:</h3>
      <p>Coins Owned: {buyPrice > 0 ? coinsOwned.toFixed(4) : 0}</p>
      <p>Current Value: {buyPrice > 0 && sellPrice > 0 ? `$${currentValue.toFixed(2)}` : '$0'}</p>
      <p>Profit/Loss: {buyPrice > 0 && sellPrice > 0 ? `$${profit.toFixed(2)}` : '$0'}</p>
      <p>Return (%): {buyPrice > 0 && sellPrice > 0 ? `${profitPercent.toFixed(2)}%` : '0%'}</p>
      </div>

    </div>
  );
}

export default Calculator;

