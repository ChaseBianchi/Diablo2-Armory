import React from 'react'
import './App.css';
import {weaponlist} from './weapons'
import Header from './Components/Header'
import ToonSelection from './Components/ToonSelection';
import { UserContextProvider } from './Contexts';
import Armory from './Components/Armory';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
          <Header />
          <ToonSelection />
          <Armory />
    </UserContextProvider>
    </div>
  );
}

export default App;
