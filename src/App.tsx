import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent from './UseStateComponent';
import UseEffectComponent from './UseEffectComponent';
import UseContextComponent from './UseContextComponent';
import UseReducerComponent from './UseReducerComponent';


function App() {
  return (
    <div >
      <h1>useReducerComponent</h1>
      <UseReducerComponent/>
       <h1>useContext</h1>
       <UseContextComponent/>
      <h1>useEffect</h1>
      <UseEffectComponent/>
      <h1>useState</h1>
      <UseStateComponent/>
    </div>
  );
}

export default App;
