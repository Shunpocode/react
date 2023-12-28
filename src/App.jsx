import React from 'react';
import './App.css';

function App() {
  // let count = 0;
  const [count, setCount] = React.useState(0);

  function sumCount(sum) {
    console.log(sum);
    if(sum === '+'){
      setCount(count + 1);
    }
    if(sum === '-'){
      if (count !== 0) {
        setCount(count - 1);
      }
    }
  }

  return (
    <div>
      <div id='counter'>
        <h2>Счётчик:</h2>
        <h1>
          {count}
        </h1>
        <div id='buttons'>
          <button onClick={()=>sumCount('-')} type="button">- Минус123</button>
          <button onClick={()=>sumCount('+')} type="button">Плюс +</button>
        </div>
      </div>
    </div>
  );
}

export default App;
