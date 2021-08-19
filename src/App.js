import React from 'react'
import './App.css';
import {weaponlist} from './weapons'
import Header from './Components/Header'
import ToonSelection from './Components/ToonSelection';
import { DataContextProvider } from './Contexts';


function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <div class="appcontainer">
          <Header />
          <ToonSelection />
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
