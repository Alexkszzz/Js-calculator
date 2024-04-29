import './App.css';
import { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState(0)
  const [expression, setExpression] = useState("")
  const [latestSymbol, setLatestSymbol] = useState("")
  const [newOperation, setNewOperation] = useState()

  const operator = ["+", "-", "*", "/"]

  const updateExpression = (symbol) => {
    if (latestSymbol === "=" && symbol === "=") {
      // Do nothing if the latest symbol is already "=" and the current symbol is "="
      return;
    }

    if (latestSymbol === "=" && operator.includes(symbol)) {
      setExpression(prevExpression => answer + symbol)
    }
    else {
      setExpression(prevExpression => prevExpression + symbol)
      setLatestSymbol(symbol)
    }
  }
  const clear = () => {
    setExpression("")
    setAnswer(0)
  }

  const calc = (symbol) => {
    setAnswer(prevAnswer => {
      const result = eval(expression)
      setExpression(expression + symbol + result)
      return result
    })
    setLatestSymbol(symbol)
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='formulaScreen'>
          {expression}
        </div>
        <div id="display" className='outputScreen'>{answer}</div>
        <button id="clear" className='jumbo' onClick={clear}>AC</button>
        <button id="divide" onClick={() => updateExpression("/")}>/</button>
        <button id="multiply" onClick={() => updateExpression("*")}>x</button>
        <button id="seven" onClick={() => updateExpression("7")}>7</button>
        <button id="eight" onClick={() => updateExpression("8")}>8</button>
        <button id="nine" onClick={() => updateExpression("9")}>9</button>
        <button id="subtract" onClick={() => updateExpression("-")}>-</button>
        <button id="four" onClick={() => updateExpression("4")}>4</button>
        <button id="five" onClick={() => updateExpression("5")}>5</button>
        <button id="six" onClick={() => updateExpression("6")}>6</button>
        <button id="add" onClick={() => updateExpression("+")}>+</button>
        <button id="one" onClick={() => updateExpression("1")}>1</button>
        <button id="two" onClick={() => updateExpression("2")}>2</button>
        <button id="three" onClick={() => updateExpression("3")}>3</button>
        <button id="equals" onClick={() => calc("=")} >=</button>
        <button id="zero" className='jumbo' onClick={() => updateExpression("0")}>0</button>
        <button id="decimal" onClick={() => updateExpression(".")}>.</button>
      </div>
    </div>
  );
}

export default App;
