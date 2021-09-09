import React from 'react'
import './App.css';
import {weaponlist} from './Data/weapons'
import Header from './Components/Header'
import ToonSelection from './Components/ToonSelection';
import { UserContextProvider } from './Contexts';
import Armory from './Components/Armory';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
    <UserContextProvider>
          <Header />
          <ToonSelection />
          <Armory />
          <Footer />
    </UserContextProvider>
    </div>
  );
}

export default App;
