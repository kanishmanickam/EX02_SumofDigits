
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState(null);

  const calculate = () => {
    let s = 0;
    for (let d of num) s += Number(d);
    setSum(s);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && num) {
      calculate();
    }
  };

  return (
    <div className="container">
      <div className="icon">🔢</div>
      <h2>Sum of Digits</h2>
      <p className="subtitle">Enter any number to calculate the sum of its digits</p>
      
      <div className="input-wrapper">
        <input 
          type="text"
          value={num}
          onChange={e => setNum(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a number..."
        />
      </div>
      
      <button onClick={calculate} disabled={!num}>Calculate Sum</button>
      
      {sum !== null && (
        <div className="result">
          <div className="result-label">Total Sum</div>
          <div className="result-value">{sum}</div>
        </div>
      )}
    </div>
  );
}
