import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handle = (event) => {
    setResult(result.concat(event.target.value));
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  const clear = () => {
    setResult("");
  };

  return (
    <>
      <div className="calculator">
        <input type="text" value={result} placeholder="0" className="result" />
        <input type="button" value="1" className="button" onClick={handle} />
        <input type="button" value="2" className="button" onClick={handle} />
        <input type="button" value="3" className="button" onClick={handle} />
        <input type="button" value="4" className="button" onClick={handle} />
        <input type="button" value="5" className="button" onClick={handle} />
        <input type="button" value="6" className="button" onClick={handle} />
        <input type="button" value="7" className="button" onClick={handle} />
        <input type="button" value="8" className="button" onClick={handle} />
        <input type="button" value="9" className="button" onClick={handle} />
        <input type="button" value="0" className="button" onClick={handle} />
        <input type="button" value="+" className="button" onClick={handle} />
        <input type="button" value="-" className="button" onClick={handle} />
        <input type="button" value="*" className="button" onClick={handle} />
        <input type="button" value="/" className="button" onClick={handle} />
        <input type="button" value="Clear" className="button" onClick={clear} />
        <input type="button" value="=" className="button" onClick={calculate} />
      </div>
    </>
  );
}

export default App;
