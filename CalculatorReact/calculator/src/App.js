import "./App.css";
import {useState} from 'react'

function App() {
  const [result,setResult]=useState("");

  const clickHandle=(e)=>{
        setResult(result.concat(e.target.name));
  }

  const clear=()=>{
    setResult("");
  }

  const finalResult=()=>{
    setResult(eval(result).toString());
  }
  return (
    <>
      <div className="calculator">
        <input type="text" value={result} placeholder="0" className="input-val"/>
        <button name="9" className="button" onClick={clickHandle}>9</button>
        <button name="8" className="button" onClick={clickHandle}>8</button>
        <button name="7" className="button" onClick={clickHandle}>7</button>
        <button name="6" className="button" onClick={clickHandle}>6</button>
        <button name="5" className="button" onClick={clickHandle}>5</button>
        <button name="4" className="button" onClick={clickHandle}>4</button>
        <button name="3" className="button" onClick={clickHandle}>3</button>
        <button name="2" className="button" onClick={clickHandle}>2</button>
        <button name="1" className="button" onClick={clickHandle}>1</button>
        <button name="0" className="button" onClick={clickHandle}>0</button>
        <button name="+" className="button" onClick={clickHandle}>+</button>
        <button name="-" className="button" onClick={clickHandle}>-</button>
        <button name="*" className="button" onClick={clickHandle}>*</button>
        <button name="/" className="button" onClick={clickHandle}>/</button>
        <button className="button" onClick={clear}>Clear</button>
        <button className="button" onClick={finalResult}>=</button>


      </div>
    </>
  );
}

export default App;
